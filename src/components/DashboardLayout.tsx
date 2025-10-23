import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../shared/Sidebar";
import { useGlobalContext } from "../context/GlobalContext";

const DashboardLayout = () => {
  const { session, sessionLoading, user } = useGlobalContext();
  if (sessionLoading) {
    return <p>Loading</p>;
  }
  if (!session && !sessionLoading) {
    return <Navigate to="/auth/login" replace />;
  }
  return (
    <div className="flex">
      <div className="w-[20rem]">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
