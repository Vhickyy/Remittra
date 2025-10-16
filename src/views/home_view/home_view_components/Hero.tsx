// import { Button } from "";
// import { ArrowRight } from "lucide-react";
import Button from "../../../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#00BFFF] px-6 py-20 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            Now Available Worldwide
          </div>

          <h1 className="mb-6 max-w-4xl text-balance text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Your All-in-One Multi-Currency Wallet
          </h1>

          <p className="mb-8 max-w-[42rem] text-pretty text-base leading-relaxed text-white/90 md:text-xl">
            Send, receive, and manage money across borders with ease. Join
            savings groups, create virtual cards, and transfer funds instantly.
          </p>

          <div className="flex gap-4 flex-row">
            <Button text="Get Started Free" icon="" />

            {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button> */}
            <Button text="Watch Demo" icon="" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
