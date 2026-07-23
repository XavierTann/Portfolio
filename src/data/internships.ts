import { Internship } from "../types";

// ---------------------------------------------------------------------------
// EDIT ME: shown in the Internships section, most recent first.
// TODO: confirm/adjust the `period` and ordering for Garena and Persona Theory
// Games below - they weren't on the last resume revision this was drafted
// from, so the exact months are placeholders.
// ---------------------------------------------------------------------------
export const internships: Internship[] = [
  {
    company: "Garena",
    role: "Game Programmer Intern",
    // TODO: add exact dates, e.g. "May 2025 - Aug 2025"
    tools: ["Roblox Studio", "Unity", "Prototyping"],
    highlights: [
      "Rapid-prototyped game concepts in two-week sprint cycles across both Roblox and Unity",
      "Collaborated cross-functionally with game designers, technical artists and monetization analysts",
      "Ran feasibility evaluations and internal playtests to guide iteration and polish",
    ],
  },
  {
    company: "Persona Theory Games",
    role: "Unity Developer Intern",
    // TODO: add exact dates
    tools: ["Unity", "C#"],
    highlights: [
      "Designed enemy AI behaviour for a roguelite project",
      "Built object detection and avoidance algorithms for enemy movement",
      "Developed in-editor debugging tools used by game designers",
    ],
  },
  {
    company: "VirtuLabs",
    role: "Game Developer Intern",
    period: "Jan 2025",
    tools: ["Unity HDRP", "C#", "MQTT", "Lua", "UXML"],
    highlights: [
      "Built NeoArcade VR, a futuristic VR arcade prototype set in Japantown, SF, with multiplayer gaming hubs, a touchscreen photo booth and vending machines",
      "Redesigned Techmania into an arcade-style rhythm game with a simplified, one-button-to-gameplay UI",
      "Integrated IoT controller support via MQTT and gained hands-on experience with HDRP lighting/baking and AI-assisted asset creation",
    ],
  },
  {
    company: "Nika.eco",
    role: "Software Engineer Intern",
    period: "Aug 2024",
    tools: ["TypeScript", "React", "Next.js", "React Native", "Deck.GL"],
    highlights: [
      "Built an interface using the Segment Anything Model (SAM) for satellite imagery segmentation with text/point prompts",
      "Designed a chatbot that turns natural language into actionable functions using OpenAI function calling and MiniLM for intent processing",
      "Built a UI for processing and downloading Google Earth Engine (GEE) datasets",
    ],
  },
];
