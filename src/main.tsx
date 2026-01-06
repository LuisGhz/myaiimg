import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppAuth0Provider } from "./core/AppAuth0Provider";
import { AppRoutes } from "./core/AppRoutes.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppAuth0Provider>
      <AppRoutes />
    </AppAuth0Provider>
  </StrictMode>
);
