import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";

const Dashboard_View = () => {
  const { user } = useGlobalContext();
  return (
    <section className="px-4 flex flex-col justify-center items-center min-h-screen">
      <h2>Dashboard</h2>
      <p>Welcome {user?.email}</p>

      <div className="flex gap-4">
        <Link
          to={"/dashboard/wallet"}
          className="bg-primary text-white font-semibold text-lg rounded-xl px-16 cursor-pointer py-3"
        >
          Manage Wallet
        </Link>
        <Link
          to={"/dashbaord/ajo"}
          className="bg-transparent border border-primary text-primary font-semibold text-lg rounded-xl px-10 cursor-pointer py-3"
        >
          Start Ajo
        </Link>
      </div>
    </section>
  );
};

export default Dashboard_View;
