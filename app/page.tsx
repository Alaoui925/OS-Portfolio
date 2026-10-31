import { Footer } from "@/components/layout/footer";
import { TopBar } from "@/components/layout/top-bar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Evidence } from "@/components/sections/evidence";
import { Hero, MarqueeStrip } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";

/**
 * OS-Portfolio — "Digital Atlas" (Option B).
 * Narrative long-scroll, six numbered sections, evidence first.
 */
export default function Page() {
  return (
    <>
      <TopBar />
      <main id="main">
        <Hero />
        <MarqueeStrip />
        <About />
        <Work />
        <Stack />
        <Evidence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
