<div align="center">

<a href="https://github.com/virastack/start" target="_blank" rel="noreferrer">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/virastack/start/main/assets/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/virastack/start/main/assets/logo-light.png">
    <img src="https://raw.githubusercontent.com/virastack/start/main/assets/logo-light.png" alt="ViraStack Start" height="120" style="max-width: 100%;" />
  </picture>
</a>

*Production-grade scaffolding CLI for modern React — integrate ecosystem tools in one command.*

[![ViraStack Start](https://img.shields.io/badge/ViraStack-Start-%2300bba7)](https://virastack.com/start/)
[![npm version](https://img.shields.io/npm/v/virastack?color=blue)](https://www.npmjs.com/package/virastack)
[![npm downloads](https://img.shields.io/npm/dt/virastack)](https://www.npmjs.com/package/virastack)
[![Node](https://img.shields.io/badge/node-%3E%3D20.9-339933?logo=node.js&logoColor=white)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![@virastack](https://img.shields.io/badge/-%40virastack-black?logo=x&logoColor=white)](https://x.com/virastack)

</div>

---

### [Read the full documentation →](https://virastack.com/start/)

## Why ViraStack Start?

- **Interactive CLI:** Interactive prompts for template selection, project naming, and ecosystem tool integration.
- **Production-Ready Foundations:** Scaffolds Next.js or TanStack Start projects with pre-configured feature-sliced architecture.
- **Built-in AI Protocols:** Integrates [**ViraStack AI**](https://github.com/virastack/ai) automatically — architecture rules, `AGENTS.md`, and design skills from [**Emil Kowalski**](https://github.com/emilkowalski/skills) and [**Jakub Krehel**](https://github.com/jakubkrehel/make-interfaces-feel-better) — giving your coding agents a strict "constitution" from day one.
- **End-to-End Type Safety:** Strict TypeScript rules, Zod validation, and native package manager alignment (pnpm, npm, yarn, bun).
- **Ecosystem Integration:** Add optional ViraStack tools (`@virastack/mask`, `@virastack/password`) seamlessly.

## Quick Start

**Recommended (pnpm):**
```bash
pnpm dlx virastack
```

**Alternatives:**
```bash
npx virastack
# or
yarn dlx virastack
# or
bunx virastack
```

## What it asks

```text
What is your project named?
  virastack-app

Which template would you like to use?
  › Next.js App Router
    TanStack Start

Would you like multi-language (i18n) support?
  › Yes
    No

Which ViraStack tools would you like to include?
  [ ] @virastack/mask
  [ ] @virastack/password
```

## Tools

| Tool | Description |
| :--- | :--- |
| `@virastack/ai` | Pre-configured AI layer and coding rules for modern AI assistants (included in templates by default) |
| `@virastack/mask` | Input masking and formatting (Phone, IBAN, etc.) |
| `@virastack/password` | Password visibility toggle with customizable icons and text |

## Commands and options

| Command / flag | Description |
| :--- | :--- |
| `init [name]` | Create a new project (default; also runs with no command) |
| `add <tool>` | Add a tool to an existing project (`mask`, `password`, `ai`) |
| `--name <name>` | Project name (or pass as positional / `.`) |
| `--template <name>` | `nextjs` or `tanstack` |
| `--tools <list>` | Comma-separated tools (`mask,password`) |
| `--i18n` / `--no-i18n` | Enable or disable the i18n template |
| `--yes`, `-y` | Non-interactive mode (flags + defaults) |
| `--skip-install` | Scaffold files only; skip install + AI setup |
| `--tr` | Turkish prompts |
| `--telemetry-disable` | Permanently disable anonymous usage tracking |
| `-v`, `--version` | Print CLI version |
| `-h`, `--help` | Show usage |

```bash
pnpm dlx virastack add mask
pnpm dlx virastack add password
pnpm dlx virastack add ai
```

## Included by default

Every template ships with this stack already installed:

| Area | Packages |
| :--- | :--- |
| **State** | TanStack Query, Zustand, nuqs |
| **Form** | React Hook Form, Zod |
| **Hooks** | `usehooks-ts` |
| **UI** | Base UI, Framer Motion, Lucide React |

[ViraStack AI](https://github.com/virastack/ai) encodes these choices as agent rules so assistants follow the same stack from day one.

## Telemetry

To keep usage statistics, ViraStack collects strictly anonymous data (template, i18n choice, selected tools, package manager, and CLI version). Absolutely no personal data, project names, or file paths are collected.

Opt out anytime: `pnpm dlx virastack --telemetry-disable`

## Contributing

Ideas and bug reports are welcome — open an [issue](https://github.com/virastack/start/issues).

## Explore the ViraStack Ecosystem

Discover all ViraStack tools, libraries, and boilerplates at [**virastack.com**](https://virastack.com).

## License

Licensed under the [MIT License](LICENSE).

## Maintainer

A project by [**Ömer Gülçiçek**](https://omergulcicek.com)

[![Follow Ömer Gülçiçek](https://img.shields.io/github/followers/omergulcicek?label=Follow&style=social)](https://github.com/omergulcicek)
