import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
