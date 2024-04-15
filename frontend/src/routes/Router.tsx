import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { User } from "../pages/User";
import { PrivateRoute } from "../components/PrivateRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
