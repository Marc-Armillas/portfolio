# Marc Armillas Portfolio

Astro-based static portfolio for Marc Armillas.

## Stack

- Astro
- Tailwind CSS
- TypeScript
- Static Site Generation for public pages
- Vercel deployment
- Serverless contact endpoint
- Resend email delivery

## Routes

- `/es`
- `/es/sobre-mi`
- `/es/proyectos`
- `/es/servicios`
- `/es/contacto`
- `/en`
- `/en/about`
- `/en/projects`
- `/en/services`
- `/en/contact`
- `/api/contact`

## Structure

```text
src/components/        Reusable UI components
src/layouts/           Base layout, SEO, theme bootstrapping
src/lib/content.ts     Typed bilingual content and route map
src/pages/             Static localized pages and serverless API route
src/styles/global.css  Tailwind entry and design system tokens
public/                Static assets
```

## Contact Form

The contact form sends directly to Resend through `/api/contact`.

Required Vercel environment variables:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

`CONTACT_FROM_EMAIL` must use a sender verified in Resend for production delivery.

## Development

This project targets Node 22.12+.

```bash
npm install
npm run dev
npm run build
```

## Deployment

The app is configured for Vercel through `@astrojs/vercel` and `vercel.json`.
