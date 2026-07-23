// Shared content types for the whole site. Keeping every project/skill/profile
// shape defined here means new content can be dropped into the files under
// `src/data/` without touching any component.

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal Engine",
  Roblox = "Roblox Studio",
}

export enum ProjectStatus {
  Released = "Released",
  InDevelopment = "In Development",
  Prototype = "Prototype",
  GameJam = "Game Jam Build",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
}

export interface MediaItem {
  source: string;
  type: MediaType;
  /** Optional alt/caption text shown under the media item. */
  caption?: string;
}

export enum LinkKind {
  GitHub = "GitHub",
  ItchIO = "itch.io",
  YouTube = "Watch Gameplay",
  Writeup = "Write-up",
  Play = "Play Build",
}

export interface ProjectLink {
  kind: LinkKind;
  url: string;
}

export interface CaseStudySystem {
  title: string;
  description: string;
}

export interface CaseStudyChallenge {
  challenge: string;
  solution: string;
}

export interface CaseStudy {
  overview: string;
  responsibilities: string[];
  coreGameplay: string;
  keySystems: CaseStudySystem[];
  challenges: CaseStudyChallenge[];
  learnings: string[];
  gallery: MediaItem[];
  video?: MediaItem;
}

export interface FeaturedProject {
  /** URL-friendly id used for the /project/:slug route. */
  slug: string;
  name: string;
  /** One or two sentence description shown on the project card. */
  tagline: string;
  role: string;
  engine: GameEngine;
  tools: string[];
  /** Short skill tags shown on the card and detail page, e.g. "Mirror Networking". */
  skillsLearnt: string[];
  status: ProjectStatus;
  cardImage: MediaItem;
  links: ProjectLink[];
  caseStudy: CaseStudy;
}

export interface MiniProject {
  name: string;
  description: string;
  engine: GameEngine;
  /** Short skill tags shown on the card, e.g. "Level Design". */
  skillsLearnt: string[];
  image: MediaItem;
  links: ProjectLink[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Internship {
  company: string;
  role: string;
  /** e.g. "Jan 2025" - leave undefined if the exact date isn't confirmed yet. */
  period?: string;
  tools: string[];
  highlights: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  /** Short hero intro sentence. */
  intro: string;
  /** Longer biography paragraph used in the About section. */
  bio: string;
  location: string;
  email: string;
  image: string;
  resumeUri: string;
  links: {
    github: string;
    linkedIn: string;
    itchIO: string;
  };
}
