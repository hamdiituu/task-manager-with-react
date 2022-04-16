import { Routes, Route } from "react-router-dom";
import { Home, Register, Login, Tasks, Profile } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/tasks"} element={<Tasks />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
}

export default Router;
