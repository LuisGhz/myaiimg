import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { AppAuth0Provider } from "./AppAuth0Provider";
import { HomePage } from "./features/home/pages/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppAuth0Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppAuth0Provider>
  </StrictMode>
);
