# Intercontinental General Merchandise & Logistics Limited

Production-focused corporate website built with Next.js 14 and TypeScript.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Before deployment, replace every value in `.env.local` with the company’s real domain, phone, email and office address. The defaults are deliberate placeholders and should not be published.

## Production

```bash
npm run build
npm start
```

Deploy to any Node.js-compatible host such as Vercel. Set the four `NEXT_PUBLIC_*` environment variables in the hosting dashboard. After connecting the final domain, submit `/sitemap.xml` through Google Search Console and Bing Webmaster Tools.

The enquiry form prepares a message in the visitor’s email application without storing personal data. For server-side delivery, connect the form to the company’s chosen email or CRM provider before launch.
