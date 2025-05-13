//import Image from "next/image";
import NavBar from "./main/NavBar";
import Hero from "./main/Hero";
import LogoSection from "./main/LogoSection";
import Services from "./main/Services";
import Projects from "./main/Projects";
import Process from "./main/Process";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <Services />
      <Projects />
      <Process />
    </>
  );
}
