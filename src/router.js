import { Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from "./components";
import { Home, Register, Login, Tasks, Profile, NotFound } from "./pages";

function Router() {
  return (
    <Routes>
      <Route
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route index element={<Home />} />
        <Route path={"/tasks"} element={<Tasks />} />
        <Route path={"/profile"} element={<Profile />} />
      </Route>
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
