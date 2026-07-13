// ─────────────────────────────────────────────────────────────
// Business details — single source of truth for the whole site.
// TODO items below MUST be filled in with Tali's real details
// before going live. Search for "TODO" to find them all.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'קייטרינג שפע טל',
  nameEn: 'Shefa Tal Catering',
  owner: 'טלי הר נוי',
  tagline: 'טבעי שתבחרו ביתי!',

  // Business WhatsApp number, taken from the old site's WhatsApp button
  phoneIntl: '972523304074',
  phoneDisplay: '052-330-4074',

  email: 'talihano@gmail.com',

  // TODO: confirm kashrut wording with Tali before publishing
  kashrut: 'לפרטי הכשרות — דברו עם טלי',

  facebookUrl: 'https://www.facebook.com/tali.shefatal/',

  replyPromise: 'חוזרים אליכם מהר — נסו אותנו',
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

// Prefixes internal paths with Astro's `base`, needed while the site is
// served from a subpath on GitHub Pages: url('/menus') → '/Shefa-Tal/menus'.
// Once `base` is removed from astro.config.mjs this becomes a no-op.
export function url(path: string): string {
  const base = import.meta.env.BASE_URL;
  return (base.endsWith('/') ? base.slice(0, -1) : base) + path;
}

export const defaultWaMessage =
  'שלום טלי! ראיתי את האתר של קייטרינג שפע טל ואשמח לשמוע פרטים על אירוע.';
