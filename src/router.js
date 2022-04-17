import { Routes, Route, Outlet } from "react-router-dom";
import { MainLayout } from "./components";
import { Home, Register, Login, Tasks, Profile, NotFound } from "./pages";
import { useSelector } from "react-redux";
function Router() {
  const { loginStatus } = useSelector((s) => s.login);
  return (
    <Routes>
      {loginStatus && (
        <>
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
          <Route path="*" element={<NotFound />} />
        </>
      )}
      {!loginStatus && (
        <>
          <Route path={"/register"} element={<Register />} />
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
