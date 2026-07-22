import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/ProjectsAndServices";
import Services from "@/components/sections/Services";
import Certifications from "@/components/sections/Certifications";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />

      <Projects />
      <Services />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
