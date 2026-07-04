import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Experience — Sri Rishi Atluri",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <Experience />
      </main>
      <Footer />
    </>
  );
}
