import { scan } from "react-scan";
scan({ enabled: import.meta.env.REACT_APP_SCAN === "enabled" });

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
