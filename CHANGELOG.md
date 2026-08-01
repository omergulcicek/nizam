# Changelog

## [v1.0.5] - 2026-08-01

### Documentation

- **CLI README**: Documented `init` / `add` commands, added `virastack add` examples, and listed the default stack (Query, Zustand, nuqs, RHF, Zod, Base UI, etc.).
- **Template docs links**: Pointed template README and `llms.txt` product docs to `https://virastack.com/start/docs` (replaced outdated `/nextjs-boilerplate/` URLs).

## [v1.0.4] - 2026-07-28

### Fixed & Improved

- **Next.js Proxy**: Next.js i18n template now exports `createMiddleware(routing)` directly, matching [next-intl](https://next-intl.dev/docs/routing/setup).
- **i18n Locale Checks**: Replaced `includes` + cast with `hasLocale` in `[locale]` layout and `i18n/request.ts`.
- **i18n Messages**: Dropped manual `getMessages()`; `NextIntlClientProvider` inherits messages from `i18n/request.ts` (next-intl 4+).
- **i18n Error Routes**: Added root `app/layout.tsx` + `app/not-found.tsx`, and `[locale]/[...rest]` catch-all per [next-intl error files](https://next-intl.dev/docs/environments/error-files).
- **React Compiler**: Both Next.js templates enable `reactCompiler` only in production to keep local `next dev` lighter.

## [v1.0.3] - 2026-07-28

### Fixed & Improved

- **i18n Static Params**: Added `generateStaticParams` to the Next.js i18n `[locale]` layout per [next-intl routing setup](https://next-intl.dev/docs/routing/setup), so locale segments (`en`, `tr`) are known at build/dev time.

## [v1.0.2] - 2026-07-28

### Fixed & Improved

- **Next.js Proxy**: Both Next.js templates now use `export default async function proxy` to match the Next.js 16 Proxy convention and next-intl composition patterns.
- **i18n Locale Detection**: Removed `localeDetection: false` from the Next.js i18n template so locale negotiation follows next-intl defaults (Accept-Language / cookie).

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
