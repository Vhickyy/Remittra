import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-white containerclass py-3 justify-between">
      <p className="font-bold text-primary text-3xl">R</p>
      <div className="flex text-sm gap-4 font-semibold text-primary cursor-pointer">
        <Link to={"/auth/login"} className="cursor-pointer">
          Login
        </Link>
        <Link to={"/auth/register"} className="cursor-pointer">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
