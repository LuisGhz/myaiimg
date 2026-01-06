import { BrowserRouter, Routes, Route } from "react-router";
import App from "../App";
import { HomePage } from "@home/pages/HomePage";
import { GenerateImage } from "@img/pages/GenerateImage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/generate" element={<GenerateImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
