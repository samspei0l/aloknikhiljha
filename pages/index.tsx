import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Startups } from "../components/sections/Startups";
import { Publications } from "../components/sections/Publications";
import { Media } from "../components/sections/Media";
import { Contact } from "../components/sections/Contact";
import {Education} from "../components/sections/Education";
import {ExtrasAndInterests} from "../components/sections/ExtrasandInterests";
import { ThemeToggle } from "../components/ThemeToggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>Alok Nikhil Jha | Startup Leader & Innovator</title>
        <meta
          name="description"
          content="Portfolio of Alok Nikhil Jha - COO, Startup Incubator, Innovator & Mentor"
        />
      </Head>
      <main className="space-y-24 px-4 max-w-5xl mx-auto">
        <ThemeToggle />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Startups />
        <Publications />
        <Media />
        <ExtrasAndInterests />
        <Contact />
      </main>
      <style jsx global>{`
        .timeline {
          position: relative;
          margin-left: 1rem;
        }
        .timeline::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background: #3b82f6;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 2rem;
        }
        .timeline-item::before {
          content: "";
          position: absolute;
          left: -6px;
          top: 0.25rem;
          width: 12px;
          height: 12px;
          background: #3b82f6;
          border-radius: 9999px;
        }
      `}</style>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
