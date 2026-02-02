import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { SocialSidebar } from "@/components/social-sidebar";

export default function Home() {
  return (
    <>
      <Navigation />
      <SocialSidebar />
      <main className="max-w-6xl mx-auto px-6 lg:px-12 md:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
