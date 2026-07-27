# Changelog
    
    ## [v1.0.1] - 2026-07-27
    
    ### Fixed & Improved
    
    - **Skills Installation**: Updated `skills` CLI commands to install non-interactively (`-y`) and target specific skills correctly (`--skill emil-design-eng`).
    - **Gitignore Handling**: Templates now use `_gitignore` which is automatically renamed to `.gitignore` during scaffolding. This prevents npm from stripping the file during publish.
    - **CLI Prompts**: Updated template descriptions to be more accurate and fair:
      - Next.js: "App Router + Server Components"
      - TanStack Start: "Type-safe routing + SSR"
    
    ## [v1.0.0] - 2026-07-27

### Initial Release

- **ViraStack CLI (`virastack`)**: Scaffold production-ready projects with a single command.
- **Templates**: Included four robust, agent-ready templates out of the box:
  - Next.js 16 (Base)
  - Next.js 16 (with i18n via next-intl)
  - TanStack Start (Base)
  - TanStack Start (with i18n via Inlang Paraglide JS)
- **Interactive Prompts**: Clean CLI wizard to select project name, template, i18n support, and tools.
- **Agent-Ready Architecture**: 
  - Automatically runs `npx @virastack/ai init --force` after install to inject framework-specific agent rules.
  - Writes `AGENTS.md`, `CLAUDE.md`, `docs/`, and `.cursor/rules/*.mdc` via `@virastack/ai`.
  - Installs design skills from [emilkowalski/skills](https://github.com/emilkowalski/skills) (7 skills) and [make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better).
  - Out-of-the-box support for Cursor, Claude Code, and other agents via `AGENTS.md`.
- **Modern Tech Stack**: React 19, Tailwind CSS 4, Base UI, TanStack Query, Zustand, React Hook Form, and Zod.
- **i18n Implementation**: Type-safe, chunked JSON translation strategies to prevent string-splitting bugs.
- **Quality Gates**: Pre-configured ESLint, Prettier, Knip, Husky, Commitlint, and GitHub Actions CI.
- **Developer Experience (DX)**: 
  - Offline-aware installation and robust error handling.
  - Non-interactive flags for automation (`--yes`, `--template`, `--i18n`).
  - Feature-sliced architecture with a ready-to-use `landing` module demo.
  - Strict TypeScript (`noUncheckedIndexedAccess`).

## [v0.0.1] - 2026-03-26

- **Note**: Placeholder release to secure the `virastack` npm package name. No CLI features were included in this build.
