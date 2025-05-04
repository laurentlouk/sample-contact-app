import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeProvider as SCThemeProvider,
  DefaultTheme,
} from "styled-components";
import { lightTheme, darkTheme } from "../theme";

type ThemeName = "light" | "dark";

type ThemeCtx = {
  theme: DefaultTheme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx>({
  theme: lightTheme,
  themeName: "light",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProviderContext({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") as ThemeName;
  });

  useEffect(() => {
    if (localStorage.getItem("theme") !== themeName) {
      localStorage.setItem("theme", themeName);
    }
  }, [themeName]);

  const setTheme = useCallback((n: ThemeName) => setThemeName(n), []);
  const toggleTheme = useCallback(
    () => setThemeName((name) => (name === "light" ? "dark" : "light")),
    []
  );

  const value = useMemo<ThemeCtx>(
    () => ({
      theme: themeName === "light" ? lightTheme : darkTheme,
      themeName,
      setTheme,
      toggleTheme,
    }),
    [themeName, setTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={value.theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
