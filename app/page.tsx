import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-page">
        <Nav />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
        </main>
      </div>
      <Footer />
    </>
  );
}
