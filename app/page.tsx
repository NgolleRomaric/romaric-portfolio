//import Image from "next/image";
import NavBar from "@/app/main/NavBar";
import Hero from "./main/Hero";
import LogoSection from "./main/LogoSection";
import Services from "./main/Services";
import Projects from "./main/Projects";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <Services />
      <Projects />
    </>
  );
}
