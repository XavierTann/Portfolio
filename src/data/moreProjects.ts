import { GameEngine, LinkKind, MediaType, MiniProject } from "../types";

// ---------------------------------------------------------------------------
// EDIT ME: smaller/older projects shown in the compact "More Projects" grid
// below the 3 featured case studies. Add, remove or reorder freely - each
// entry only needs a name, one-line description, engine, skillsLearnt, image
// and links.
//
// Internship experience lives in src/data/internships.ts and its own
// Internships section instead of here, to avoid listing the same work twice.
// ---------------------------------------------------------------------------

export const moreProjects: MiniProject[] = [
  {
    name: "Fragged",
    description: "Top-down competitive shooter set in a sci-fi arena.",
    engine: GameEngine.Roblox,
    skillsLearnt: ["Roblox Networking", "Network Interpolation", "First-Time User Experience"],
    image: { source: "/images/games/Fragged/Screenshot%202026-07-17%20161952.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/Fragged" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=u0YPMgNTjh4" },
    ],
  },
  {
    name: "Gun Fishing",
    description: "A fast-paced arcade shooter blasting fish leaping out of a pond for points.",
    engine: GameEngine.Roblox,
    skillsLearnt: ["Roblox Networking", "Game Analytics & Funnels", "Economy & Game Balancing"],
    image: {
      source: "/images/games/Gun_Fishing/2026-05-29_FeedTheBeast_Thumbnail1%20(1).png",
      type: MediaType.Image,
    },
    links: [{ kind: LinkKind.GitHub, url: "https://github.com/XavierTann/Gunfishing2" }],
  },
  {
    name: "Light and Seek",
    description: "A 2D puzzle game where players transform into their shadow to solve light-based puzzles.",
    engine: GameEngine.Unity,
    skillsLearnt: ["Trailer Design", "Level Design", "Art Direction & Animation", "Playtesting & Iteration"],
    image: { source: "/images/games/Light_And_Seek/graphic.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/LightAndSeek" },
      { kind: LinkKind.ItchIO, url: "https://xaviertann.itch.io/light-and-seek" },
    ],
  },
  {
    name: "Reboot",
    description: "A 2D puzzle platformer where players summon illusions by rewinding time.",
    engine: GameEngine.Unity,
    skillsLearnt: ["Git Collaboration", "2D Environment & Character Art", "Design Documentation"],
    image: { source: "/images/games/Reboot/Screenshot_1.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/reboot" },
      { kind: LinkKind.ItchIO, url: "https://xaviertann.itch.io/reboot" },
    ],
  },
  {
    name: "Kitchen Chaos",
    description: "A co-op cooking simulation game where players collaborate in chaotic kitchens.",
    engine: GameEngine.Unity,
    skillsLearnt: ["UI/UX Design", "Prefabs & ScriptableObjects"],
    image: { source: "/images/games/Kitchen_Chaos/Screenshot_1.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/KitchenChaos" },
      { kind: LinkKind.ItchIO, url: "https://xaviertann.itch.io/kitchenchaos" },
    ],
  },
  {
    name: "Death Ball",
    description: "A competitive 1v1 dodgeball arena inspired by ability-based dueling games.",
    engine: GameEngine.Roblox,
    skillsLearnt: ["Rojo Workflow", "React Lua", "UI Labs"],
    image: { source: "/images/games/Death_Ball/logo.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/DeathBall" },
      { kind: LinkKind.Play, url: "https://www.roblox.com/games/135961654284811/DeathBall" },
      {
        kind: LinkKind.Writeup,
        url: "https://docs.google.com/document/d/1rN60bmoa5ceKO4JgtBW6CpasyRiLdscddRZmSEdRdp0/edit?usp=sharing",
      },
    ],
  },
  {
    name: "Techmania (Arcade Edition)",
    description: "An arcade-style remake of the open-source rhythm game Techmania, integrated with an IoT controller via MQTT.",
    engine: GameEngine.Unity,
    skillsLearnt: ["MQTT Integration", "Lua Scripting", "Unity Visual Trees"],
    image: { source: "/images/games/Techmania/Screenshot_1.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/my-techmania" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=ziLGRDt2T0E" },
    ],
  },
  {
    name: "NeoArcade VR",
    description: "A VR arcade prototype exploring lighting workflows, 3D rigging and AI-generated assets in Unity HDRP.",
    engine: GameEngine.Unity,
    skillsLearnt: ["Real-Time & Baked Lighting", "3D Environment Design", "AI-Assisted Asset Creation"],
    image: { source: "/images/games/Arcade_Environment/Screenshot1.png", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/Futuristic-Arcade" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=iduUDik7mbY" },
    ],
  },
  {
    name: "Dune Survivors",
    description: "A roguelike tower defense game set in the desert, with enemy pathfinding via Dijkstra's algorithm. Currently in development.",
    engine: GameEngine.Unity,
    skillsLearnt: ["Pathfinding Algorithms", "Procedural Generation", "Isometric Tilemaps"],
    image: { source: "https://img.youtube.com/vi/jXutWpTrkJ8/hqdefault.jpg", type: MediaType.Image },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/Dune-Survivors" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=jXutWpTrkJ8" },
    ],
  },
  {
    name: "Cosy Quest",
    description: "My first game — a top-down RPG where players fight through hordes of enemies while levelling up.",
    engine: GameEngine.Unity,
    skillsLearnt: ["UI/UX Design", "2D Art", "Unity Basics"],
    image: { source: "/images/games/Cosy_Quest/Screenshot_1.png", type: MediaType.Image },
    links: [{ kind: LinkKind.GitHub, url: "https://github.com/XavierTann/Cozy-Quest" }],
  },
];
