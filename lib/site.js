// Central link registry. Fill the [TO SET] values and every CTA on the site updates.
export const DEMO_REGISTRATION_URL = 'https://us06web.zoom.us/webinar/register/4017858776906/WN_Zxp3IondTlS0WuS6IQezgg'; // Zoom webinar registration (converted from meeting to webinar Aug 4, 2026). Dave swaps in the monthly session link.

// Internal sales page (the page lives on the site, Circle handles checkout + delivery)
export const CANOPY_URL = '/the-canopy';
export const BACK_OFFICE_URL = '/the-back-office'; // Oct 8, 2026: replaced /the-greenhouse

// Circle paywall (Oct 8, 2026). The base link lets the buyer pick annual or monthly at checkout.
export const CANOPY_CHECKOUT_URL = 'https://canopy-creative-co.circle.so/checkout/the-canopy';
export const CANOPY_ANNUAL_CHECKOUT_URL = `${CANOPY_CHECKOUT_URL}?price_id=383292`;
export const CANOPY_MONTHLY_CHECKOUT_URL = `${CANOPY_CHECKOUT_URL}?price_id=383293`;
export const MEMBER_LOGIN_URL = 'https://canopy-creative-co.circle.so';

export const DISCOVERY_CALL_URL = 'https://scheduler.zoom.us/dave-altshul/discovery-call'; // Zoom Scheduler booking page (swapped from Calendly July 20, 2026)
