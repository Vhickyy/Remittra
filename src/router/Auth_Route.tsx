import { Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const authRoutes = [
  <Route key="login" path="/auth/login" element={<Login />} />,
  <Route key="register" path="/auth/register" element={<Register />} />,
];
