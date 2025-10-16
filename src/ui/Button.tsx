import { type ReactNode } from "react";

const Button = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <button className="group bg-white text-[#00BFFF] hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg py-2 px-6 rounded-xl cursor-pointer">
      {text} {icon}
    </button>
  );
};

export default Button;
