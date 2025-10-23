import { Footer } from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import { Features } from "./home_view_components/Features";
import Hero from "./home_view_components/Hero";

const Home_View = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Home_View;
