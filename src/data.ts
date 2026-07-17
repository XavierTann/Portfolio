import {
  AboutMeData,
  Game,
  GameEngine,
  LinkImageSource,
  MediaType,
  Platform,
} from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Xavier Tan",
  role: "Unity Game Developer",
  introduction:
    "Undergraduate currently studying Computer Science at Singapore University Of Technology And Design",
  description:
    "I'm super passionate about video games, both playing and making them. I love coding, and I'm always diving into new game tech and design ideas that can really level up how I build games. Right now, I am on the lookout for opportunities at game dev studios where I can grow, learn, and help create awesome experiences. ",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/my_cv.pdf`,
  links: {
    github: "https://github.com/XavierTann",
    itchIO: "https://xaviertann.itch.io",
    linkedIn: "https://www.linkedin.com/in/xaviertanyixuan",
  },
};

export const games: Game[] = [
  {
    name: "Dungeon Master",
    color: "	#339999",
    description: "Asymmetrical horror game where survivors must outmaneuver a dungeon master who can manipulate the environment.",
    genres: ["Asymmetrical", "Horror"],
    skillsLearnt:
      "Unity Mirror Networking",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Writeup,
        url: "https://github.com/XavierTann/DungeonMaster",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://xaviertann.itch.io/light-and-seek",
      // },
    ],
    media: [
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20153443.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20153503.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20154655.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20154736.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20170836.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20170843.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171048.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171055.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171134.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171146.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171210.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171242.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171254.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171312.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Dungeon_Master/Screenshot%202026-07-17%20171326.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/T4eG7adLWU0",
        type: MediaType.YouTube,
      },
    ],
  },
  {
    name: "Cat Burglars",
    color: "	#339999",
    description: "Co-op first-person stealth/horror museum heist game where players are cats sneaking into a museum at night to steal specific artifacts.",
    genres: ["Co-op", "Stealth", "Horror"],
    skillsLearnt:
      "Unity Mirror Networking",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Writeup,
        url: "https://github.com/XavierTann/CatBurglars",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://xaviertann.itch.io/light-and-seek",
      // },
    ],
    media: [
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163114.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163137.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163246.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163325.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163500.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Cat_Burglars/Screenshot%202026-07-17%20163516.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/KQOcNJeVqck",
        type: MediaType.YouTube,
      },
    ],
  },
  {
    name: "Fragged",
    color: "	#339999",
    description: "Top down competitive shooter in a sci fi setting",
    genres: ["Top-Down Shooter", "Competitive", "Sci fi"],
    skillsLearnt:
      "Roblox Networking, Networking techniques like network interpolation, first time user experience",
    engine: GameEngine.Roblox,
    links: [
      {
        source: LinkImageSource.Writeup,
        url: "https://github.com/XavierTann/Fragged",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://xaviertann.itch.io/light-and-seek",
      // },
    ],
    media: [
      {
        source: "/images/games/Fragged/Screenshot%202026-07-17%20161952.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Fragged/Screenshot%202026-07-17%20162008.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Fragged/Screenshot%202026-07-17%20162029.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/u0YPMgNTjh4",
        type: MediaType.YouTube,
      },
    ],
  },
  {
    name: "Gun Fishing",
    color: "	#339999",
    description: "A fast-paced arcade shooter where players blast fish leaping out of a pond to rack up points in a playful, reflex-driven challenge.",
    genres: ["Arcade", "Shooter", "Casual"],
    skillsLearnt:
      "Roblox Networking, Game analytics and funnels, Economy and Game Balancing",
    engine: GameEngine.Roblox,
    links: [
      {
        source: LinkImageSource.Writeup,
        url: "https://github.com/XavierTann/Gunfishing2",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://xaviertann.itch.io/light-and-seek",
      // },
    ],
    media: [
      {
        source: "/images/games/Gun_Fishing/2026-05-29_FeedTheBeast_Thumbnail1%20(1).png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Gun_Fishing/Screenshot%202026-07-17%20164935.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Gun_Fishing/Screenshot%202026-07-17%20164949.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Gun_Fishing/Screenshot%202026-07-17%20165005.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Gun_Fishing/Screenshot%202026-07-17%20165019.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Gun_Fishing/Screenshot%202026-07-17%20165037.png",
        type: MediaType.Image,
      },
    ],
  },
  {
    name: "Garena Game Programmer Intern",
    color: "	#339999",
    description: "",
    genres: ["Game Prototyping"],
    skillsLearnt:
      "Rapid prototyping in two week sprints, cross functional collaboration with technical artists, game designers, and senior monetization analysts, feasibility evaluation, and internal playtesting for iteration and polish",
    engine: GameEngine.Roblox,
    links: [
      {
        source: LinkImageSource.Writeup,
        url: "https://github.com/XavierTann/LightAndSeek",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://xaviertann.itch.io/light-and-seek",
      // },
    ],
    media: [
      {
        source: "/images/games/Garena/garena_logo.png",
        type: MediaType.Image,
      },
    ],
  },
  {
    name: "Unity Developer Internship at Persona Theory Games",
    color: "	#339999",
    description: "",
    genres: ["Roguelite"],
    skillsLearnt:
      "Enemy AI design, object detection and avoidance algorithms, and development of debugging tools for game designers",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/LightAndSeek",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://xaviertann.itch.io/light-and-seek",
      },
      {
        source: LinkImageSource.Writeup,
        url: "https://docs.google.com/document/d/1G-m3SfmTV_plYWaxenzGwhNiv33DEPIJK4BuxMZ6SLI/edit?usp=sharing",
      },
    ],
    media: [
      {
        source: "/images/games/PersonaTheory/PersonaTheory_Screenshot.jpg",
        type: MediaType.Image,
      },
    ],
  },
  {
    name: "Light and Seek",
    color: "	#339999",
    description:
      "A 2D puzzle game where players transform into their shadow to solve intricate, light-based puzzles. Developed for a game jam with a focus on level design, shadow mechanics, and a dark fantasy aesthetic.",
    genres: ["Puzzle", "2D Platformer"],
    skillsLearnt:
      "Trailer Design, Level Design, Art direction and Animation, Playtesting and Iterative design, Collaboration via Git.",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/LightAndSeek",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://xaviertann.itch.io/light-and-seek",
      },
    ],
    media: [
      {
        source: "/images/games/Light_And_Seek/graphic.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/EWfPkICs1xM",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Light_And_Seek/Screenshot_1.png",
        type: MediaType.Image,
      },

      {
        source: "/images/games/Light_And_Seek/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Light_And_Seek/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Light_And_Seek/playtest.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Reboot",
    color: "#5D728A",
    description:
      "A 2D side-scrolling puzzle platformer where players summon illusions by rewinding time, allowing them to interact with echoes of their past actions. Features a sleek sci-fi aesthetic and collaborative development using Git.",
    genres: ["Puzzle Platformer", "Sci-Fi"],
    skillsLearnt:
      "Git Collaboration, 2D Environment and Character Art, Design Documentation, Playtesting & Iteration",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/reboot",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://xaviertann.itch.io/reboot",
      },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/s3BjaO5Ylkc",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Reboot/Screenshot_1.png",
        type: MediaType.Image,
      },

      {
        source: "/images/games/Reboot/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Reboot/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Reboot/Screenshot_4.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Reboot/Screenshot_5.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "KitchenChaos",
    color: "#FFA500",
    description:
      "A cooperative cooking simulation game where players must collaborate in fast-paced, chaotic kitchens to prepare and serve meals.",
    genres: ["Simulation", "Co-op", "Casual"],
    skillsLearnt:
      "UI/UX Design, Unity Basics like the Prefab and ScriptableObjects System",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/KitchenChaos",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://xaviertann.itch.io/kitchenchaos",
      },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/fYMbBh9W9_s",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Kitchen_Chaos/Screenshot_1.png",
        type: MediaType.Image,
      },

      {
        source: "/images/games/Kitchen_Chaos/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Kitchen_Chaos/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Kitchen_Chaos/Screenshot_4.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Kitchen_Chaos/Screenshot_5.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Kitchen_Chaos/Screenshot_6.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Death Ball",
    description:
      "Competitive 1v1 dodgeball arena inspired by ability-based dueling games, ",
    genres: ["Multiplayer", "Arena"],
    skillsLearnt:
      "Roblox Studio, Rojo, Github, React Lua, UI Labs",
    engine: GameEngine.Roblox,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/DeathBall",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://www.roblox.com/games/135961654284811/DeathBall",
      },
      {
        source: LinkImageSource.Writeup,
        url: "https://docs.google.com/document/d/1rN60bmoa5ceKO4JgtBW6CpasyRiLdscddRZmSEdRdp0/edit?usp=sharing",
      },

    ],
    media: [
      {
        source: "/images/games/Death_Ball/logo.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Techmania (Arcade Edition)",
    color: "#FF69B4",
    description:
      "An arcade-style remake of the open-source rhythm game Techmania. Streamlined the UI for quick access, removing extra pages and taking players straight to gameplay with one button. Integrated MQTT in Unity to connect with an IoT controller, and worked with Lua and XML for customization and scripting.",
    genres: ["Rhythm", "Arcade", "Open Source"],
    skillsLearnt: "Unity, MQTT, Lua, XML, Unity Visual Trees",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/my-techmania", // Replace with actual GitHub link
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://yourusername.itch.io/techmania-arcade", // Replace with actual Itch.io link
      // },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/ziLGRDt2T0E", // Replace with your video demo
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Techmania/Screenshot_1.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Techmania/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Techmania/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Techmania/Screenshot_4.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Forgotten Depths",
    description:
      "A survival game set in the tunnels beneath Las Vegas, where you play as a homeless person scavenging for resources and managing health. Face nightly threats like hostile encounters, cave-ins, and harsh conditions. ",
    genres: ["First Person", "Survival Horror"],
    skillsLearnt:
      "Inventory UI Design, Different Inventory Systems like drag and drop and click only, implemented features like Item Stacking and Sorting",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/ForgottenDepths",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      // },
    ],
    media: [
      {
        source: "/images/games/ForgottenDepths/Screenshot_1.png",
        type: MediaType.Image,
      },

      {
        source: "/images/games/ForgottenDepths/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/VZdEbYeVM-I",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/ForgottenDepths/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/ForgottenDepths/Screenshot_4.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/ForgottenDepths/Screenshot_5.png",
        type: MediaType.Image,
      },
    ],
  },



  {
    name: "NeoArcade VR",
    color: "#00CED1",
    description:
      "A VR arcade prototype built for VirtuLabs to showcase an immersive, futuristic entertainment space in Japantown, SF. Features include dynamic cherry blossom walls, multiplayer console stations, a touchscreen photo booth, and vending machines. Developed with Unity HDRP, it explores lighting workflows, 3D rigging and animation, and AI-generated assets.",
    genres: ["VR", "Simulation", "Futuristic"],
    skillsLearnt:
      "Unity Real Time and Baked Lighting, 3D Environment design, AI asset creation, 3D Animation",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/Futuristic-Arcade", // Replace with actual GitHub if any
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://yourusername.itch.io/neoarcadevr", // Replace with actual Itch.io if any
      // },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/iduUDik7mbY", // Replace with your video embed links
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Arcade_Environment/Screenshot1.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Arcade_Environment/Screenshot2.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Dune Survivors",
    description:
      "A roguelike tower defense game set in a desert environment where players survive increasingly difficult runs across hostile terrain, gaining power after each run. Features intelligent enemy movement using Dijkstra's algorithm. Current game I am working on.",
    genres: ["Roguelike", "Tower Defense"],
    skillsLearnt:
      "Pathfinding Algorithms, Procedural Generation, System Design, Balancing, Isometric Tilemaps",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/Dune-Survivors",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      // },
    ],
    media: [
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_1.png",
      //   type: MediaType.Image,
      // },
      {
        source: "https://www.youtube.com/embed/jXutWpTrkJ8",
        type: MediaType.YouTube,
      },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_2.png",
      //   type: MediaType.Image,
      // },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_3.png",
      //   type: MediaType.Image,
      // },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_4.png",
      //   type: MediaType.Image,
      // },
    ],
  },

  {
    name: "Cosy Quest",
    description:
      "My first game! A top down RPG where players have to navigate and fight through hordes of enemies while levelling up and gaining new skills. Unfortunately I did not know how to use source control, and lost all the code. The only picture I have of the game  is this.",
    genres: ["Top Down RPG"],
    skillsLearnt: "UI/UX Design, 2D Art, Unity Basics",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/Cozy-Quest",
      },
      // {
      //   source: LinkImageSource.ItchIo,
      //   url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      // },
    ],
    media: [
      {
        source: "/images/games/Cosy_Quest/Screenshot_1.png",
        type: MediaType.Image,
      },
      // {
      //   source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   type: MediaType.YouTube,
      // },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_2.png",
      //   type: MediaType.Image,
      // },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_3.png",
      //   type: MediaType.Image,
      // },
      // {
      //   source: "/images/games/GAME_NAME/Screenshot_4.png",
      //   type: MediaType.Image,
      // },
    ],
  },
];
