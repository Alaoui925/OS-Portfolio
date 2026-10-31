import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

/**
 * Seven sections, each earning its place:
   Hero → Tech strip → About → Skills → Projects → Experience → Contact
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
