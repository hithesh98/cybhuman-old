// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "CybHuman";
export const SITE_DESCRIPTION = "Musings of a wondering mind";
export const TWITTER_HANDLE = "@cybhuman";
export const MY_NAME = "Hithesh Shaji";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
