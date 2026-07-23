// Central design tokens for the whole site.
// Change a value here and it updates everywhere the theme is used.
export const theme = {
  colors: {
    // Near-black / charcoal backgrounds
    bg: "#0a0a0b",
    bgElevated: "#131316",
    surface: "#18181c",
    surfaceHover: "#1f1f24",
    border: "rgba(237, 234, 227, 0.1)",
    borderStrong: "rgba(237, 234, 227, 0.2)",

    // Off-white text
    text: "#edeae3",
    textMuted: "#a8a5a0",
    textFaint: "#6f6c68",

    // Single restrained accent - muted ember orange
    accent: "#cf7a43",
    accentStrong: "#e08f57",
    accentMuted: "rgba(207, 122, 67, 0.16)",
    accentBorder: "rgba(207, 122, 67, 0.4)",
  },
  fonts: {
    heading: "'Oswald', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },
  maxWidth: "1240px",
  radius: {
    sm: "4px",
    md: "8px",
    lg: "14px",
  },
  shadow: {
    card: "0 20px 60px -20px rgba(0, 0, 0, 0.6)",
    lift: "0 30px 80px -20px rgba(0, 0, 0, 0.75)",
  },
  transition: {
    base: "0.3s cubic-bezier(0.22, 1, 0.36, 1)",
    fast: "0.15s ease-out",
  },
} as const;

export type AppTheme = typeof theme;
