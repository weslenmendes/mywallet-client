import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Home } from "../pages/Home";
import { NewEntry } from "../pages/NewEntry";
import { NewExit } from "../pages/NewExit";
import { UpdateEntry } from "../pages/UpdateEntry";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/wallet" element={<Home />} />
        <Route path="/wallet/new-entry" element={<NewEntry />} />
        <Route path="/wallet/new-exit" element={<NewExit />} />
        <Route path="/wallet/update/:id" element={<UpdateEntry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
