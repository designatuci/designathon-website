"use client";

import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import MailingList from "@components/seasons/2026/blocks/mailing";
import Partners from "@components/seasons/2026/blocks/partners";
import PastEvents from "@components/seasons/2026/blocks/past-events";
import Prizes from "@components/seasons/2026/blocks/prizes";
import Rules from "@components/seasons/2026/blocks/rules";
import Schedule from "@components/seasons/2026/blocks/schedule";
import Stats from "@components/seasons/2026/blocks/stats";
import MeetCommittees from "@components/seasons/2026/blocks/team";
import LandingNavigation from "@components/seasons/2026/navigation/landing-navigation";

export default function Landing2026() {
  return (
    <main className="noise relative min-h-[100dvh] w-full bg-[url('/images/seasons/2026/landing/gradient/background.webp')] bg-[length:100%_auto] bg-top bg-repeat-y">
      <LandingNavigation />
      <Hero />
      <About />
      <Stats />
      {
        //<Prompt />
      }
      <Schedule />
      <FAQ />
      <Prizes />
      <Judges />
      <Partners />
      <MeetCommittees />
      <Rules />
      <PastEvents />
      <MailingList />
      <Footer />
    </main>
  );
}
