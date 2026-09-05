import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/ProjectsAndServices";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Certifications />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}