import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Sri Rishi Atluri",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
