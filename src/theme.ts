import "styled-components";

// Use const assertions so that properties become literal types
export const lightTheme = {
  colors: {
    body: "#f8c8ef",
    text: "#1e1e1e",
    textSecondary: "#333",
    primary: "#6200ee",
    cardBackground: "#fff",
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
    cardBackground: "#1e1e1e",
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
