import "styled-components";

// Use const assertions so that properties become literal types
export const lightTheme = {
  colors: {
    body: "#f9f5ff",
    text: "#1e1e1e",
    textSecondary: "#333",
    primary: "#6200ee",
    cardBackground:
      "linear-gradient(135deg,rgba(255, 255, 255, 0.9) 0%,rgba(246, 248, 255, 0.9) 40%,rgba(235, 240, 250, 0.9) 100%)",
    searchbarBackground: "#f4edff",
    border: "#dfe1e5",
    skeletonGradient:
      "linear-gradient(90deg, #e0e0e0 25%, #f8f8f8 50%, #e0e0e0 75%)",
  },
  font: "system-ui, sans-serif",
} as const;

export const darkTheme = {
  colors: {
    body: "#121212",
    text: "#e0e0e0",
    textSecondary: "#b0b0b0",
    primary: "#bb86fc",
    searchbarBackground: "#21172e",
    cardBackground:
      "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(34,34,34,0.85) 40%, rgba(17,17,17,0.85) 100%)",
    border: "#333",
    skeletonGradient:
      "linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%)",
  },
  font: "system-ui, sans-serif",
} as const;

type Theme = typeof darkTheme.colors | typeof lightTheme.colors;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme;
    font: string;
  }
}
