import { LinkKind, ProjectLink } from "../types";

export const findLink = (links: ProjectLink[], kinds: LinkKind[]): string | undefined =>
  links.find((link) => kinds.includes(link.kind))?.url;

export const toYouTubeWatchUrl = (embedUrl: string): string =>
  embedUrl.replace("youtube.com/embed/", "youtube.com/watch?v=");
