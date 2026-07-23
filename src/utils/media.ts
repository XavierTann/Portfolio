/** Resolves a MediaItem/image source into a usable URL: absolute URLs pass through
 * untouched, relative paths (e.g. "/images/games/...") get the app's PUBLIC_URL prefix. */
export const resolveMediaUrl = (source: string): string =>
  /^https?:\/\//.test(source) ? source : `${process.env.PUBLIC_URL}${source}`;
