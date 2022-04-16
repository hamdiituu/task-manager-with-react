import { Routes, Route } from "react-router-dom";
import { Home, Register, Login } from "./pages";

function Router() {
  return (
    <Routes>
      <Route path={"login"} element={<Login />} />
      <Route path={"register"} element={<Register />} />
      <Route path={"/"} element={<Home />} />
    </Routes>
  );
}

export default Router;
