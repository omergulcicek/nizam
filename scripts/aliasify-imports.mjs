import fs from 'node:fs';
import path from 'node:path';

const workspaceRoot = process.cwd();
const srcRoot = path.resolve(workspaceRoot, 'src');

/**
 * Recursively collect file paths under a directory.
 */
function getAllFiles(dirPath) {
  /** @type {string[]} */
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  /** @type {string[]} */
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      // Skip typical non-source directories
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') {
        continue;
      }
      files.push(...getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Transform a relative import path to an alias path starting with @/ if it resolves within src.
 * Leaves the path unchanged if it does not resolve under src.
 *
 * @param {string} importPath
 * @param {string} filePath
 */
function toAlias(importPath, filePath) {
  if (!importPath.startsWith('.')) return importPath;
  const abs = path.resolve(path.dirname(filePath), importPath);
  let rel = path.relative(srcRoot, abs);
  if (rel.startsWith('..')) return importPath; // outside src
  let normalized = rel.split(path.sep).join('/');
  normalized = normalized.replace(/\.(ts|tsx|js|jsx|json)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  return `@/${normalized}`;
}

/**
 * Process a single file's contents, rewriting relative imports to @/ aliases.
 *
 * @param {string} filePath
 */
function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!['.ts', '.tsx', '.js', '.jsx'].includes(ext)) return false;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  /**
   * Generic replacer used for multiple import/export patterns.
   */
  const replacer = (prefix, importPath, suffix) => {
    const nextPath = toAlias(importPath, filePath);
    if (nextPath !== importPath) changed = true;
    return `${prefix}${nextPath}${suffix}`;
  };

  // import ... from '...'
  content = content.replace(/(^|\s)(import[\s\S]*?from\s*['"])([^'"\)]+)(['"];?)/gm, (m, lead, p1, p2, p3) => {
    return `${lead}${replacer(p1, p2, p3)}`;
  });

  // export ... from '...'
  content = content.replace(/(^|\s)(export[\s\S]*?from\s*['"])([^'"\)]+)(['"];?)/gm, (m, lead, p1, p2, p3) => {
    return `${lead}${replacer(p1, p2, p3)}`;
  });

  // dynamic import('...')
  content = content.replace(/(\bimport\s*\(\s*['"])([^'"]+)(['"]\s*\))/gm, (m, p1, p2, p3) => {
    return replacer(p1, p2, p3);
  });

  // require('...')
  content = content.replace(/(\brequire\s*\(\s*['"])([^'"]+)(['"]\s*\))/gm, (m, p1, p2, p3) => {
    return replacer(p1, p2, p3);
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return changed;
}

function main() {
  if (!fs.existsSync(srcRoot)) {
    console.error(`src directory not found at: ${srcRoot}`);
    process.exit(1);
  }
  const allFiles = getAllFiles(srcRoot);
  let changedCount = 0;
  for (const file of allFiles) {
    if (processFile(file)) changedCount += 1;
  }
  console.log(`Aliasified imports in ${changedCount} files.`);
}

main();


