# Hoàng Văn Lộc — Portfolio (Next.js + Tailwind + Framer Motion)

A one-page portfolio scaffold.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # or npm run dev
```

Open http://localhost:3000

## Where to edit content

- **Project data**: `lib/data.ts`  
  - Paste your GitHub links into `projects[i].links.repo`
  - Replace placeholder images in `/public/images/*`
- **Colors/spacing**: `tailwind.config.ts` and `app/globals.css`
- **Sections**: `app/page.tsx` (uses components under `/components`)

## Deploy

- Push to GitHub and import into [Vercel](https://vercel.com/new).
- Set Framework: Next.js. No extra config needed.

## Notes

- This template avoids external UI kits to keep setup simple. You can add shadcn/ui later if you want.
