import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import EngineeringPrinciples from "@/components/sections/EngineeringPrinciples";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EngineeringPrinciples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
