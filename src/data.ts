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
    description:
      "A 2D puzzle game where players transform into their shadow to solve intricate, light-based puzzles. Developed for a game jam with a focus on level design, shadow mechanics, and a dark fantasy aesthetic.",
    genres: ["Puzzle", "2D Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/LightAndSeek",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
      },
    ],
    media: [
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
        source: "/images/games/Light_And_Seek/Screenshot_4.png",
        type: MediaType.Image,
      },
    ],
  },

  {
    name: "KitchenChaos",
    description:
      "A cooperative cooking simulation game where players must collaborate in fast-paced, chaotic kitchens to prepare and serve meals.",
    genres: ["Simulation", "Co-op", "Casual"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/KitchenChaos",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
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
    name: "Reboot",
    description:
      "A 2D side-scrolling puzzle platformer where players summon illusions by rewinding time, allowing them to interact with echoes of their past actions. Features a sleek sci-fi aesthetic and collaborative development using Git.",
    genres: ["Puzzle Platformer", "Sci-Fi"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      {
        source: LinkImageSource.Github,
        url: "https://github.com/XavierTann/reboot",
      },
      {
        source: LinkImageSource.ItchIo,
        url: "https://YOUR_ITCH.itch.io/GAME_NAME",
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
    name: "Unforgotten Depths",
    description:
      "The Forgotten Depths, a survival game where you play as a homeless person navigating the tunnels beneath Las Vegas. Each day, you scavenge for food, water, and resources while managing your physical and mental health. Every night brings unpredictable challenges, such as hostile encounters, collapsing tunnels, or environmental hazards. On hold until I learn how to make 3d assets :(",
    genres: ["First Person", "Survival Horror"],
    platforms: [Platform.Windows],
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
    platforms: [Platform.Windows],
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
    platforms: [Platform.Windows],
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
