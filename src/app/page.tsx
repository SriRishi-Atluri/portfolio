import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LandingHighlights } from "@/components/LandingHighlights";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <LandingHighlights />
      </main>
      <Footer />
    </>
  );
}
