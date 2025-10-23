import { type ReactNode } from "react";
import Navbar from "../../../shared/Navbar";

const Auth_Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 justify-center items-center  bg-primary">
        <form className="bg-white w-[95%] max-w-[30rem] shadow-lg p-6 rounded-xl">
          <section className="grid gap-6">{children}</section>
        </form>
      </div>
    </div>
  );
};

export default Auth_Layout;
