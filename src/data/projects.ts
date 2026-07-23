import {
  FeaturedProject,
  GameEngine,
  LinkKind,
  MediaType,
  ProjectStatus,
} from "../types";

// ---------------------------------------------------------------------------
// EDIT ME: this file drives both the 3 featured project cards on the home
// page and their /project/:slug case-study pages. To add a 4th featured
// project, add another object to this array with a unique `slug` - no other
// file needs to change. Order here is the order they appear on the site.
//
// For each project:
//   - `cardImage`   -> the big image shown on the project card
//   - `links`       -> only links you provide will render as buttons.
//                      LinkKind.GitHub / Writeup  -> "View Project" button(s)
//                      LinkKind.YouTube           -> "Watch Gameplay" button
//                      LinkKind.ItchIO / Play     -> "Play Build" button
//   - `caseStudy`   -> everything shown on the detailed case-study page
// ---------------------------------------------------------------------------

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "dungeon-master",
    name: "Dungeon Master",
    tagline:
      "An asymmetrical horror game where a team of survivors must outmaneuver a Dungeon Master who spends resources to manipulate the environment and hunt them down.",
    role: "Gameplay Programmer — Asymmetrical Multiplayer & AI",
    engine: GameEngine.Unity,
    tools: ["Unity", "C#", "Mirror Networking", "Git"],
    skillsLearnt: ["Mirror Networking", "Asymmetric Game Design", "Enemy AI", "Gameplay Balancing"],
    status: ProjectStatus.Prototype,
    cardImage: {
      source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171048.png",
      type: MediaType.Image,
      caption: "A survivor spots the Nemesis in the dark",
    },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/DungeonMaster" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=T4eG7adLWU0" },
      // TODO: add an itch.io / build link here to surface a "Play Build" button.
    ],
    caseStudy: {
      overview:
        // TODO: replace with your own overview.
        "Dungeon Master is a 1-vs-many asymmetric multiplayer prototype. One player takes on the Dungeon Master role from a top-down view, spending energy to deploy threats - zombies, turrets, and a directly-controllable Nemesis monster - against a team of survivors playing first-person, who must protect a set of crystals and extract before time runs out.",
      responsibilities: [
        "Built the Dungeon Master's card-based deployment system (resource economy and cooldowns)",
        "Implemented the Nemesis AI and its attack states (punch, lunge, ground slam)",
        "Built first-person survivor movement and the crystal-protection/extraction objective",
        "Synced game state (timer, crystal count, player health) across all clients with Mirror",
      ],
      coreGameplay:
        "Survivors cooperate in first-person to protect a set of crystals and extract before time runs out. Meanwhile the Dungeon Master watches from a top-down camera and spends a regenerating energy resource on cards - spawning a zombie, placing a turret, or unleashing the Nemesis - turning the match into an asymmetric cat-and-mouse loop where resource management matters as much as reflexes.",
      keySystems: [
        {
          title: "Card-Based Threat Economy",
          description:
            "An energy resource that regenerates over time gates which cards the Dungeon Master can play and when, forcing a choice between committing to one big threat or spreading out smaller ones.",
        },
        {
          title: "Nemesis AI",
          description:
            "A monster built as its own state machine with distinct attack states (punch, lunge, ground slam), usable both autonomously and with direct Dungeon Master input during an encounter.",
        },
        {
          title: "Cross-Role Camera & Input",
          description:
            "One Mirror-networked session serving two completely different experiences - a top-down, RTS-style camera and card UI for the Dungeon Master, and first-person movement/combat for survivors.",
        },
      ],
      challenges: [
        {
          challenge:
            "Giving the Dungeon Master useful information about where survivors are without full always-on visibility, which made the role feel unfairly omniscient in early playtests.",
          solution:
            "Replaced a full minimap with proximity/line-of-sight triggers and periodic pings, then tuned the reveal radius through playtesting until both sides reported the match felt tense rather than hopeless for the survivors.",
        },
        {
          challenge:
            "Keeping the Nemesis' attacks and survivor damage feedback in sync across clients when the monster could be driven by both its own AI and direct Dungeon Master input in the same frame.",
          solution:
            "Routed every state-changing action (attacks, damage, deploys) through server-authoritative commands, treating client-side animation as cosmetic prediction that reconciles once the server's result replicates back down.",
        },
      ],
      learnings: [
        // TODO: replace with what you personally took away from this project.
        "Designing for two asymmetric roles in the same match, and balancing information/power between them",
        "Structuring an AI state machine a designer could tune without touching networking code",
        "Tuning fairness and \"game feel\" through iteration rather than pure numbers",
      ],
      gallery: [
        {
          source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20154655.png",
          type: MediaType.Image,
          caption: "The Dungeon Master's top-down view and card deck",
        },
        {
          source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171254.png",
          type: MediaType.Image,
          caption: "Controlling the Nemesis mid-encounter",
        },
        { source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20153443.png", type: MediaType.Image },
        { source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20170836.png", type: MediaType.Image },
        { source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171134.png", type: MediaType.Image },
        { source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171326.png", type: MediaType.Image },
      ],
      video: { source: "https://www.youtube.com/embed/T4eG7adLWU0", type: MediaType.YouTube },
    },
  },

  {
    slug: "cat-burglars",
    name: "Cat Burglars",
    tagline:
      "A co-op first-person stealth/horror game where players are cats sneaking into a museum at night to steal specific artifacts.",
    role: "Multiplayer Gameplay Programmer",
    engine: GameEngine.Unity,
    tools: ["Unity", "C#", "Mirror Networking", "Git"],
    skillsLearnt: ["Mirror Networking", "Authoritative Server Design", "AI State Machines"],
    status: ProjectStatus.Prototype,
    cardImage: {
      source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163114.png",
      type: MediaType.Image,
      caption: "Sneaking past a spotlight, suspicion meter rising",
    },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/CatBurglars" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=KQOcNJeVqck" },
      // TODO: add an itch.io / build link here to surface a "Play Build" button.
    ],
    caseStudy: {
      overview:
        // TODO: replace with your own overview.
        "Cat Burglars is a co-op stealth/horror prototype where a small team of players - playing as cats - break into a museum at night to steal a set of targeted artifacts. A shared suspicion meter rises when the team is seen, and the museum's statues stir when nobody is watching them.",
      responsibilities: [
        "Implemented multiplayer networking with Mirror for player movement, object state and shared game state",
        "Built the networked suspicion/detection system",
        "Implemented artifact pickup, carry and extraction logic for co-op play",
        "Built the statue AI's watched/unwatched state machine",
      ],
      coreGameplay:
        "Players sneak cooperatively through museum rooms, grabbing targeted artifacts while staying out of sight. A shared suspicion meter climbs whenever the team is spotted, and the museum's statues - still when observed, creeping closer when not - add a constant, silent threat. The team must extract everyone with the artifacts before suspicion maxes out.",
      keySystems: [
        {
          title: "Networked Suspicion System",
          description:
            "A shared suspicion meter, synced across all clients, that rises based on visibility/proximity to guards and cameras and drives the alarm state for the whole team.",
        },
        {
          title: "Weeping-Statue AI",
          description:
            "A line-of-sight driven state machine for the museum statues: frozen while any player is looking at them, and creeping closer the moment nobody is.",
        },
        {
          title: "Co-op Extraction Loop",
          description:
            "Artifact objectives and a shared win/lose condition, synced through Mirror so every client agrees on what has been stolen and whether the heist succeeded.",
        },
      ],
      challenges: [
        {
          challenge:
            "Keeping the statues' \"frozen when watched\" behaviour authoritative and cheat-resistant, since a naive client-side visibility check could be spoofed or disagree between players.",
          solution:
            "Moved the watched-check to the server, aggregating every connected client's camera facing and visibility into one authoritative value that is then replicated back down, instead of trusting any single client's raycast.",
        },
        {
          challenge:
            "Handling multiple players grabbing the same artifact at once without desync or duplicate pickups.",
          solution:
            "Routed pickup requests through Mirror's Command/Rpc pattern so the server owns authority over each item, rejecting a grab if another player had already claimed it that frame.",
        },
      ],
      learnings: [
        // TODO: replace with what you personally took away from this project.
        "Authoritative-server patterns in Mirror Networking, and why client-trusting checks break down even in small co-op games",
        "Tuning tension and pacing for a stealth loop through iterative playtesting",
        "Designing shared systems (suspicion, win/lose state) that stay consistent across every connected client",
      ],
      gallery: [
        { source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163137.png", type: MediaType.Image },
        {
          source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163246.png",
          type: MediaType.Image,
          caption: "A statue closing in on a downed player",
        },
        {
          source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163325.png",
          type: MediaType.Image,
          caption: "A failed extraction",
        },
        { source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163500.png", type: MediaType.Image },
        { source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163516.png", type: MediaType.Image },
      ],
      video: { source: "https://www.youtube.com/embed/KQOcNJeVqck", type: MediaType.YouTube },
    },
  },

  {
    slug: "forgotten-depths",
    name: "The Forgotten Depths",
    tagline:
      "A survival game set in the tunnels beneath Las Vegas. Play as a homeless scavenger managing health and resources while surviving nightly threats like hostile encounters and cave-ins.",
    role: "Gameplay & UI Programmer",
    engine: GameEngine.Unity,
    tools: ["Unity", "C#", "uGUI", "Git"],
    skillsLearnt: ["Inventory UI Design", "Item Stacking & Sorting", "Survival Systems Design"],
    status: ProjectStatus.InDevelopment,
    cardImage: {
      source: "/images/games/ForgottenDepths/Screenshot_4.png",
      type: MediaType.Image,
      caption: "Scavenging for supplies in the tunnels",
    },
    links: [
      { kind: LinkKind.GitHub, url: "https://github.com/XavierTann/ForgottenDepths" },
      { kind: LinkKind.YouTube, url: "https://www.youtube.com/watch?v=VZdEbYeVM-I" },
      // TODO: add an itch.io / build link here to surface a "Play Build" button, e.g.
      // { kind: LinkKind.ItchIO, url: "https://xaviertann.itch.io/forgotten-depths" },
    ],
    caseStudy: {
      overview:
        // TODO: replace with your own overview - what is the game, who is it for, what stage is it at.
        "The Forgotten Depths is a first-person survival game set in the storm tunnels beneath Las Vegas. You play as a homeless scavenger managing hunger, health and limited supplies while exploring the tunnels for resources, avoiding cave-ins and hostile encounters as night falls. The project is currently in active development.",
      responsibilities: [
        "Designed and implemented the inventory system end to end",
        "Built two interchangeable interaction modes: drag-and-drop and click-to-move",
        "Implemented item stacking and automatic sorting",
        "Built the survival stat UI (health, hunger and threat indicators)",
      ],
      coreGameplay:
        "Players scavenge the tunnel network for supplies while managing a survival loop of health, hunger and time. Each night introduces escalating threats - hostile encounters, cave-ins and environmental hazards - that push players to balance careful exploration against the risk of staying out too long.",
      keySystems: [
        {
          title: "Dual-Mode Inventory System",
          description:
            "A single inventory data model driving two separate interaction modes - drag-and-drop for precise item placement, and a click-to-move mode for faster keyboard-only play - so players can pick whichever fits how they want to play.",
        },
        {
          title: "Item Stacking & Sorting",
          description:
            "Items of the same type automatically stack up to a defined limit, with a one-click sort that reorganises the inventory grid by item type and quantity.",
        },
        {
          title: "Survival Stat Loop",
          description:
            "Health and hunger tick down over time and are affected by player actions and events, feeding into UI warnings that telegraph danger before it becomes fatal.",
        },
      ],
      challenges: [
        {
          challenge:
            "Supporting two very different interaction patterns (drag-and-drop vs click-to-move) without duplicating inventory logic.",
          solution:
            "Separated the data layer (slots, stacks, item definitions) from the interaction layer. Both input modes call the same underlying add/remove/swap methods and only differ in how the player expresses an action, which kept the two modes in sync automatically.",
        },
        {
          challenge:
            "Keeping inventory UI responsive and readable as the number of item types and stack sizes grew during development.",
          solution:
            "Introduced pooling for inventory slot UI elements and moved sorting/stacking calculations off the per-frame update loop and into event-driven callbacks triggered only when the inventory actually changes.",
        },
      ],
      learnings: [
        // TODO: replace with what you personally took away from this project.
        "How to separate data models from interaction/input code so multiple UX patterns can share one system",
        "Practical patterns for UI performance (pooling, event-driven updates) in inventory-heavy games",
        "Designing survival pacing so danger feels fair rather than punishing",
      ],
      gallery: [
        { source: "/images/games/ForgottenDepths/Screenshot_1.png", type: MediaType.Image },
        {
          source: "/images/games/ForgottenDepths/Screenshot_2.png",
          type: MediaType.Image,
          caption: "The inventory and chest transfer UI",
        },
        { source: "/images/games/ForgottenDepths/Screenshot_3.png", type: MediaType.Image },
        { source: "/images/games/ForgottenDepths/Screenshot_5.png", type: MediaType.Image },
      ],
      video: { source: "https://www.youtube.com/embed/VZdEbYeVM-I", type: MediaType.YouTube },
    },
  },
];
