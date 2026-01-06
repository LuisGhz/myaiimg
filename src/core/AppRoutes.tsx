import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "../features/home/pages/HomePage";
import App from "../App";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
