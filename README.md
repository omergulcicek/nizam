# Nizam — A Modern Next.js 16 Boilerplate

A production-ready **Next.js 16** boilerplate designed for scalability, performance, and developer happiness.

> **Nizam** is a Turkish word that means _"structure, organization, and harmony.”_

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?logo=reactquery&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-3B82F6?logo=react&logoColor=white)

## Features

- [Next.js 16](https://nextjs.org/) and [React 19](https://react.dev/) with App Router and concurrent rendering
- [TypeScript 5](https://www.typescriptlang.org/) for full type safety
- [Tailwind CSS v4](https://tailwindcss.com/) for scalable and fast styling
- [TanStack Query 5](https://tanstack.com/query/latest) for data fetching and caching
- [Zustand](https://zustand-demo.pmnd.rs) for lightweight global state management
- [Zod](https://zod.dev/) + [@t3-oss/env-nextjs](https://env.t3.gg) for runtime validation
- [next-intl](https://next-intl-docs.vercel.app) for internationalization
- [Next Themes](https://github.com/pacocoursey/next-themes) for dynamic light/dark modes
- [Lucide](https://lucide.dev) icons and [Sonner](https://sonner.emilkowal.ski) for notifications
- [Google Analytics](https://analytics.google.com/) integration
- [ESLint 9](https://eslint.org/), [Prettier 3](https://prettier.io/), [Husky](https://github.com/typicode/husky), [lint-staged](https://github.com/okonet/lint-staged), and [Knip](https://knip.dev) for code quality
- SEO-ready with metadata, sitemap, and robots.txt generation
- Bundler Analyzer
- Absolute Imports using `@` prefix
- Maximize lighthouse score

## Getting Started

To run this project locally, follow the steps below.

### Requirements

- Node.js 22+ and npm (or pnpm/yarn)

### Installation

```bash
git clone --depth=1 https://github.com/omergulcicek/nizam my-project
cd my-project
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Environment Variables

The project uses some variables validated at runtime. Create a `.env` file in the root and define at least the following:

```env
NEXT_PUBLIC_SITE_URL=https://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The variable schema is defined in `src/env.ts`.

## Customization

You can quickly tailor the Next.js Boilerplate to your needs by searching the project for `FIXME:` tags.

- `.env`: runtime environment variables
- `src/env.ts`: environment variables schema (required/optional fields)
- `src/app/robots.ts`: Robots.txt configuration for search engines
- `src/app/sitemap.ts`: Dynamic sitemap generation for SEO
- `src/config/site.ts`: site name, description, URL, social accounts, default locales
- `src/config/seo.ts`: Metadata-based SEO settings (title, description, Open Graph, Twitter)
- `src/constants/i18n.ts`: Localization settings (supported and default locales)
- `src/lib/api.ts`: Axios instance and request helpers based on `NEXT_PUBLIC_API_URL`

## Project structure

```
├── public/                             # Public assets folder
├── src/
│   ├── app/                            # App Router with locale support
│   ├── assets/                         # Static and vector assets
│   ├── components/                     # UI and shared components
│   │   ├── icons                       # Svg icons
│   │   ├── layouts                     # Page structure (header, footer, sidebar)
│   │   ├── ui                          # Atomic and reusable UI elements
│   │   └── widgets                     # Advanced UI components
│   ├── config/                         # Site and SEO configurations
│   ├── constants/                      # Global constants (i18n, date, etc.)
│   ├── hooks/                          # Custom React hooks
│   ├── i18n/                           # next-intl configurations
│   ├── lib/                            # Utilities and API layer
│   ├── messages/                       # Translation files (JSON)
│   ├── providers/                      # App-wide providers (Theme, Query, Intl)
│   ├── schemas/                        # Zod validation schemas
│   ├── stores/                         # Application-wide state management
│   ├── styles/                         # Base styling and Tailwind setup
│   ├── types/                          # TypeScript types and interfaces
│   └── .env.ts                         # Environment validation
├── .prettierrc                         # Prettier setup with Tailwind and import sorting
├── next.config.ts                      # Next.js configuration
└── tsconfig.json                       # TypeScript configuration
```

## Tips & Recommendations

- **Cursor rules (for Cursor users)**: This repository centralizes AI/editor collaboration rules in `.cursor/rules`. If you use Cursor, review this file and keep it aligned with the conventions in this README (naming, structure, types, a11y, styling).

- **Cookies (server-side)**: Use Next.js App Router APIs for cookies.
  - `cookies()` from `next/headers` (read/write in server components/actions)
  - `NextResponse.cookies.set` in route handlers/middleware
  - Docs: `https://nextjs.org/docs/app/api-reference/functions/cookies`

- **Helpers (formatting & slug)**:
  - Currency/number/date formatting via `next-intl`:
    - Client: `useFormatter()`
    - Server: `getFormatter()`
  - Slug generation: `@sindresorhus/slugify`

- **Useful hooks (`usehooks-ts`)**: Recommended utilities for common needs
  - `useLocalStorage`, `useSessionStorage`
  - `useMediaQuery`
  - `useDebounceValue`
  - `useOnClickOutside`
  - `useCopyToClipboard`

## Naming Conventions

The following naming conventions are recommended for the project.

| Type                               | Example                              | Style                        |
| ---------------------------------- | ------------------------------------ | ---------------------------- |
| Folders & base files               | `locale-switcher`, `query-client.ts` | kebab-case                   |
| Components (widgets/layouts/pages) | `UserList.tsx`                       | PascalCase                   |
| UI elements                        | `button.tsx`                         | kebab-case                   |
| Helper / util files                | `format-currency.ts`                 | kebab-case                   |
| Hook files                         | `use-users.ts`                       | kebab-case                   |
| Hook functions                     | `useUsers`                           | camelCase (prefix `use`)     |
| Datas                              | `user.data.ts`                       | kebab-case (suffix `.data`)  |
| Stores                             | `counter.store.ts`                   | kebab-case (suffix `.store`) |
| Icons                              | `ReactIcon`                          | PascalCase (suffix `Icon`)   |
| Types & interfaces                 | `UserType`                           | PascalCase (suffix `Type`)   |
| Type files                         | `user.type.ts`                       | kebab-case (suffix `.type`)  |
| Constants                          | `DEFAULT_LOCALE`                     | SNAKE_CASE                   |

## Useful commands

### Development

- `npm run dev`: starts the development server
- `npm run build`: production build
- `npm run start`: starts the production server
- `npm run clean`: cleans the `.next` directory

### Code quality and validation

- `npm run lint`: checks lint errors
- `npm run lint:fix`: auto-fixes fixable lint issues and formats
- `npm run lint:ci`: runs lint in CI mode (no warnings allowed) and checks formatting
- `npm run format`: formats with Prettier
- `npm run format:check`: checks formatting
- `npm run typecheck`: verifies type safety
- `npm run knip`: analyzes unused dependencies and files

### Git hooks

- `npm run prepare`: sets up git hooks via Husky

### Bundle Analyzer

To analyze build outputs:

- `npm run analyze`: analyzes bundle sizes and opens the report

### Conventional Commits

This project enforces the Conventional Commits specification. All commit messages must follow the standard. You can use the interactive CLI:

```bash
npm run commit
```

Benefits include automatic release notes and semantic versioning based on commit types.

---

Created by [Ömer Gülçiçek](https://github.com/omergulcicek)  
Support: [Sponsor on GitHub](https://github.com/sponsors/omergulcicek) or <a href="mailto:iletisim@omergulcicek.com">iletisim@omergulcicek.com</a>
