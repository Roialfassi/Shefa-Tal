# קייטרינג שפע טל — Shefa Tal Catering website

Mobile-first, Hebrew-RTL marketing site for Tali's Jerusalem catering business, built with [Astro](https://astro.build) as a fully static site. Every page pushes toward one action: **sending Tali a WhatsApp message**.

## Commands

```bash
npm install       # once
npm run dev       # local dev server at http://localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built dist/ locally
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, menus preview, Kotel band, story, testimonials, quote form |
| `/menus` | Full dairy / meat / custom menus + pricing explanation |
| `/kotel` | Landing page for Western Wall / Old City events (her strongest niche) |
| `/gallery` | Photo gallery (placeholders until real photos arrive) |
| `/about` | Tali's story + all 11 real testimonials from the old site |
| `/contact` | All contact channels + quote form |
| `/en` | **English landing page** for Diaspora families planning a Kotel bar mitzvah |

## ⚠️ Before going live — content checklist

Search the codebase for `TODO`. Current status:

1. ~~**Phone number**~~ — DONE: `052-330-4074`, taken from the old site's own WhatsApp button. Double-check with Tali that this is the number she wants leads on.
2. **Email** — `alihano@gmail.com` was found as the contact address on the old site; confirm it's current.
3. **Kashrut wording** — `src/data/site.ts` → `kashrut`. Ask Tali exactly what she can claim (certificate? which rabbinate?) — do not guess; this is a trust-critical religious claim.
4. **Menus** — `src/data/menus.ts` is a **draft** based on dishes shown in her old site's gallery. Review every item with Tali.
5. ~~**Photos**~~ — DONE: her real photos and logo were imported from the old site (`public/images/`, `public/gallery/`). Note: the gallery files are the old site's web-compressed versions (~450px). The site displays them well, but when Tali can send the originals (phone/Drive), drop higher-res files over the same filenames. A photo of **Tali herself in the kitchen** is still the biggest missing shot (for `/about`).
6. **Domain** — buy the domain (e.g. `shefatal.co.il`), then update `site` in `astro.config.mjs` and the Sitemap URL in `public/robots.txt`.

## Deploying (free)

Any static host works. Recommended: **Cloudflare Pages** (fast in Israel, free SSL):

1. Push this folder to a GitHub repo.
2. Cloudflare Pages → Create project → connect repo.
3. Build command `npm run build`, output directory `dist`.
4. Add the custom domain.

Netlify/Vercel work identically. The quote form needs no server — it opens WhatsApp with a prefilled message.

## After launch (drives most of the customers)

- **Google Business Profile**: claim/create one for "קייטרינג שפע טל", category *Caterer*, link the new site, upload the same photos. Most "קייטרינג בירושלים" leads come from Maps, not the website itself.
- **Update the old links**: point the 2all site (or shut it down with a redirect), the Facebook page's website field, and any WhatsApp status to the new domain.
- **Reviews flywheel**: after each event, send clients the Google review link.
- **Analytics** (optional): add GA4 or Plausible; track clicks on `.wa-fab`, `.btn-whatsapp`, and `tel:` links — those are the conversion events.

## Design system

Defined in `src/styles/global.css`. Material: Jerusalem stone palette; signature motif: the **arched doorway** (image frames, menu cards); accents: pomegranate garnet (שפע = abundance) and Jerusalem tile blue (Kotel sections). Type: Suez One (display) + Assistant (body), self-hosted via Fontsource. All layout uses logical properties, so the `/en` page flips to LTR automatically.
