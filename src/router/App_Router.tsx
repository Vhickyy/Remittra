import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./Auth_Route";
import Home from "../pages/Home";
import DashboardLayout from "../components/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Wallet from "../pages/dashboard/Wallet";
import Ajo from "../pages/dashboard/Ajo";
import Admin from "../pages/dashboard/Admin";
import CreateAjo from "../pages/dashboard/CreateAjo";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="ajo" element={<Ajo />} />
        <Route path="create-ajo" element={<CreateAjo />} />
        <Route path="admin" element={<Admin />} />
        {/* add more nested routes if needed */}
      </Route>
      {authRoutes}
    </Routes>
  );
};

export default AppRouter;
