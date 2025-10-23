import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../supabase-client";

const Sidebar = () => {
  // const navigate = useNavigate();
  const side_nav = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Wallet",
      link: "/dashboard/wallet",
    },
    {
      name: "Ajo",
      link: "/dashboard/ajo",
    },
    {
      name: "Admin",
      link: "/dashboard/admin",
    },
  ];

  const handleLogout = async () => {
    await supabase.auth.signOut();
    // navigate("/auth/login")
  };
  return (
    <section className="w-[20rem] bg-primary z-[100000] fixed top-0 bottom-0  flex flex-col">
      <div className="overflow-y-auto flex-1 px-6 py-2">
        <div className="text-white flex gap-4 flex-col mt-6">
          {side_nav.map((nav, index) => (
            <div
              key={index}
              className="text-white text-lg px-6 rounded-lg py-3 cursor-pointer hover:bg-[#D9D9D933]"
            >
              <Link to={nav.link}>{nav.name}</Link>
            </div>
          ))}
          <div onClick={handleLogout} className="flex items-center gap-4">
            <LogOut />
            <p>LogOut</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
