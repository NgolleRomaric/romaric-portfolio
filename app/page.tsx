//import Image from "next/image";
import NavBar from "./main/NavBar";
import Hero from "./main/Hero";
import LogoSection from "./main/LogoSection";
import Services from "./main/Services";
import Projects from "./main/Projects";
import Process from "./main/Process";
import Tools from "./main/Tools";
import Offers from "./main/Offers";
import Testimonials from "./main/Testimonials";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <Services />
      <Projects />
      <Process />
      <Tools />
      <Offers />
      <Testimonials />
    </>
  );
}
