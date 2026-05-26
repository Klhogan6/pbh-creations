# PBH Creations

Web design and digital marketing for local small businesses — based in Lexington, SC.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Auth/DB:** Supabase
- **Payments:** Stripe
- **Language:** TypeScript (strict mode)
- **Deployment:** Vercel

## Getting Started

1. Copy `.env.local.example` to `.env.local` and fill in your credentials
2. Install dependencies: `npm install`
3. Run the dev server: `npm run dev`

## Git Workflow

- `main` — production. Never push directly.
- `development` — integration branch. All feature branches merge here.
- `feature/*` — one branch per feature, opened as PRs into `development`.

## Environment Variables

See `.env.local.example` for all required variables.
