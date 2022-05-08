import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wallet" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
