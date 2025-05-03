import "styled-components";

// Use const assertions so that properties become literal types
export const lightTheme = {
  colors: {
    body: "#f8c8ef",
    text: "#1e1e1e",
    primary: "#6200ee",
    cardBackground: "#fff",
    border: "#dfe1e5",
  },
  font: "system-ui, sans-serif",
} as const;

export const darkTheme = {
  colors: {
    body: "#121212",
    text: "#e0e0e0",
    primary: "#bb86fc",
    cardBackground: "#1e1e1e",
    border: "#333",
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
