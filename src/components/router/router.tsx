import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CatsPage, HomePage, NotFoundPage, ProfilePage } from "./../../pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
