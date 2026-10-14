import { ChapterNav } from "@/components/layout/ChapterNav";
import { Footer } from "@/components/layout/Footer";
import { Concept } from "@/components/sections/Concept";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Understanding } from "@/components/sections/Understanding";
import { Walkthrough } from "@/components/sections/Walkthrough";
import { Work } from "@/components/sections/Work";
import { recipient } from "@/content/site";

export default function PitchPage() {
  return (
    <>
      <a
        href="#understanding"
        className="sr-only z-50 rounded bg-ivory-50 px-4 py-2 text-forest-900 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip the introduction
      </a>
      <ChapterNav recipient={recipient.name} />
      <main>
        <Hero />
        <Understanding />
        <Work />
        <Walkthrough />
        <Results />
        <Concept />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
