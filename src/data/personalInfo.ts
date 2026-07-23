import { PersonalInfo } from "../types";

// ---------------------------------------------------------------------------
// EDIT ME: this is the single source of truth for the Hero, About and Contact
// sections. Replace the copy, image and links below with your own.
// ---------------------------------------------------------------------------
export const personalInfo: PersonalInfo = {
  name: "Xavier Tan",
  role: "Game Developer",

  // Hero section short intro (1-2 sentences).
  intro:
    "I build gameplay systems, multiplayer mechanics and AI-driven encounters for games that want players to feel something. Currently exploring atmospheric, systems-driven experiences in Unity.",

  // About section biography (can be multiple sentences/paragraphs of plain text).
  bio: "I'm a game developer who enjoys designing gameplay systems, building atmospheric experiences, and solving technical problems inside Unity. Whether it's synchronising a multiplayer duel, scripting an enemy's decision-making, or tuning a horror encounter so it lands at just the right moment, I like getting into the systems under the surface of a game and making them feel right to play. I'm currently looking for opportunities where I can keep building that kind of work alongside other people who care about craft.",

  location: "Singapore",

  // TODO: replace with the email address you want recruiters to use.
  email: "xavier.internships@gmail.com",

  // TODO: replace with a real portrait/photo. Currently reusing the existing placeholder.
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,

  // TODO: replace with your latest resume PDF (drop the file into public/files/).
  resumeUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,

  links: {
    github: "https://github.com/XavierTann",
    linkedIn: "https://www.linkedin.com/in/xaviertanyixuan",
    itchIO: "https://xaviertann.itch.io",
  },
};
