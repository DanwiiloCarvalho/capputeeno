# Capputeeno - Agent Instructions

## Project Overview
Next.js 14 (App Router) e-commerce for mugs and t-shirts. Uses TypeScript, Chakra UI, Styled Components, TanStack Query (React Query), and localStorage for cart persistence.

## Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run test` | Run unit tests (vitest) |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |

## Architecture
- **App Router** with SSG for product pages (`src/app/product/[id]/page.tsx`)
- **TanStack Query** for product listing cache/sync (`src/lib/react-query.ts`, `src/hooks/useProducts.ts`)
- **localStorage** for cart state (`src/hooks/useLocalStorage.ts`)
- **GraphQL API** at `NEXT_PUBLIC_API_URL` (set in `.env`)
- **Path alias**: `@/*` → `src/*`

## Testing
- **Unit**: vitest + jsdom + @testing-library/react (`vitest.config.mts`)
  - Setup: `vitestSetup.ts` (jest-dom + cleanup)
  - Coverage excludes: `.next/`, `next.config.*`, `src/types/`, `src/app/layout.tsx`, `src/app/components/defaultPageLayout.ts`, `src/lib/**`
- **E2E**: Playwright (`playwright.config.ts`, `e2e/`)
  - Tests run against dev server (start manually or via CI)

## Code Organization
```
src/
├── app/                    # Next.js App Router pages
│   ├── components/         # Shared UI components
│   ├── cart/               # Cart page + components
│   ├── product/[id]/       # Product detail (SSG)
│   └── page.tsx            # Home page (product listing)
├── components/             # Additional shared components
├── hooks/                  # Custom React hooks
├── lib/                    # Chakra, React Query, Styled Components registry
├── types/                  # TypeScript types
├── utils/                  # Utility functions
└── enum/                   # Category, Priority enums
```

## Key Conventions
- Styled Components with Next.js compiler plugin (`next.config.js`)
- Chakra UI provider wraps app (`src/lib/chakra.tsx`)
- Font loading via `next/font/google` (Saira, Saira Stencil One)
- Portuguese (pt-BR) locale
- Strict TypeScript (`strict: true`)

## Environment
- Required: `NEXT_PUBLIC_API_URL` in `.env` (GraphQL endpoint)
- Node.js 18.17+ required (Next.js 14.2.3)

## CI/CD Notes
- No GitHub Actions/workflows found in repo
- Playwright config has CI-specific settings (retries, workers, forbidOnly)
- ESLint extends `next/core-web-vitals` only