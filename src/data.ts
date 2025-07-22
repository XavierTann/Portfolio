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
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/XavierTann",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/xaviertanyixuan",
  },
};

export const games: Game[] = [
  {
    name: "Light and Seek",
    color: "	#339999",
    description:
      "A 2D puzzle game where players transform into their shadow to solve intricate, light-based puzzles. Developed for a game jam with a focus on level design, shadow mechanics, and a dark fantasy aesthetic.",
    genres: ["Puzzle", "2D Platformer"],
    platforms:
      "Trailer Design, Scene Management, Level Design, AnimatorTrees, Art Direction",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/LightAndSeek",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://bigbull007.itch.io/light-n-seek",
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
    name: "KitchenChaos",
    color: "#FFA500",
    description:
      "A cooperative cooking simulation game where players must collaborate in fast-paced, chaotic kitchens to prepare and serve meals.",
    genres: ["Simulation", "Co-op", "Casual"],
    platforms: "UI/UX Design, Unity Prefab and ScriptableObjects System",
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
    name: "Techmania (Arcade Edition)",
    color: "#FF69B4",
    description:
      "An arcade-style remake of the open-source rhythm game Techmania. Streamlined the UI for quick access, removing extra pages and taking players straight to gameplay with one button. Integrated MQTT in Unity to connect with an IoT controller, and worked with Lua and XML for customization and scripting.",
    genres: ["Rhythm", "Arcade", "Open Source"],
    platforms: "Unity, MQTT, Lua, XML, Unity Visual Trees",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/YOUR_USERNAME/TechmaniaArcade", // Replace with actual GitHub link
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://yourusername.itch.io/techmania-arcade", // Replace with actual Itch.io link
      },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Replace with your video demo
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/Techmania/Screenshot1.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Techmania/Screenshot2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Techmania/Screenshot3.png",
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
    platforms:
      "Github, 2D Art, Team Collaboration using Game Design Document, Playtesting & Iteration",
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
    name: "NeoArcade VR",
    color: "#00CED1",
    description:
      "A VR arcade prototype built for VirtuLabs to showcase an immersive, futuristic entertainment space in Japantown, SF. Features include dynamic cherry blossom walls, multiplayer console stations, a touchscreen photo booth, and vending machines. Developed with Unity HDRP, it explores lighting workflows, 3D rigging and animation, and AI-generated assets.",
    genres: ["VR", "Simulation", "Futuristic"],
    platforms:
      "3D Model Rigging and Animation, Lighting and Baking, Interactive Environment Design, AI Generation for 3D Models and Materials",
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/YOUR_USERNAME/NeoArcadeVR", // Replace with actual GitHub if any
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://yourusername.itch.io/neoarcadevr", // Replace with actual Itch.io if any
      },
    ],
    media: [
      {
        source: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1", // Replace with your video embed links
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
    name: "Forgotten Depths",
    description:
      "A survival game set in the tunnels beneath Las Vegas, where you play as a homeless person scavenging for resources and managing health. Face nightly threats like hostile encounters, cave-ins, and harsh conditions. ",
    genres: ["First Person", "Survival Horror"],
    platforms: "3D Level Design, Inventory System",
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      },
    ],
    media: [
      {
        source: "/images/games/Unforgotten_Depths/Screenshot_1.png",
        type: MediaType.Image,
      },
      // {
      //   source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      //   type: MediaType.YouTube,
      // },
      {
        source: "/images/games/Unforgotten_Depths/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Unforgotten_Depths/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/Unforgotten_Depths/Screenshot_4.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Cosy Quest",
    description:
      "My first game! A top down RPG where players have to navigate and fight through hordes of enemies while levelling up and gaining new skills. Unfortunately I did not know how to use source control, and lost all the code. The only picture I have of the game  is this.",
    genres: ["Top Down RPG"],
    platforms: "UI/UX Design,2D Art",
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      },
    ],
    media: [
      {
        source: "/images/games/Cosy_Quest/Screenshot_1.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_4.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "Dune Survivors",
    description:
      "A roguelike tower defense game set in a desert environment where players survive increasingly difficult runs across hostile terrain, gaining power after each run. Features intelligent enemy movement using Dijkstra's algorithm. Current game I am working on.",
    genres: ["Roguelike", "Tower Defense"],
    platforms:
      "Pathfinding Algorithms, Procedural Generation, System Design, Balancing",
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      },
    ],
    media: [
      {
        source: "/images/games/GAME_NAME/Screenshot_1.png",
        type: MediaType.Image,
      },
      {
        source: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        type: MediaType.YouTube,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_2.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_3.png",
        type: MediaType.Image,
      },
      {
        source: "/images/games/GAME_NAME/Screenshot_4.png",
        type: MediaType.Image,
      },
    ],
  },
];
