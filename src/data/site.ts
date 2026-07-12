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

  // Found as the contact address on the old site — TODO: confirm with Tali it's current
  email: 'alihano@gmail.com',

  // TODO: confirm kashrut wording with Tali before publishing
  kashrut: 'לפרטי הכשרות — דברו עם טלי',

  address: 'רחוב הנביאים 8, ירושלים',
  addressEn: "8 HaNevi'im St., Jerusalem",
  neighborhood: 'שכונת בתי ניסן ב"ק, בצמוד לעיר העתיקה',

  wazeUrl: 'https://waze.com/ul?q=%D7%94%D7%A0%D7%91%D7%99%D7%90%D7%99%D7%9D%208%20%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D',
  facebookUrl: 'https://www.facebook.com/tali.shefatal/',

  replyPromise: 'חוזרים לכל פנייה עד יום עסקים אחד',
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}

export const defaultWaMessage =
  'שלום טלי! ראיתי את האתר של קייטרינג שפע טל ואשמח לשמוע פרטים על אירוע.';
