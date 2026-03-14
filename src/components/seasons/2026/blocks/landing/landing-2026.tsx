"use client";

import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import MailingList from "@components/seasons/2026/blocks/mailing";
import LandingNavigation from "@components/seasons/2026/blocks/navigation/landing-navigation";
import Partners from "@components/seasons/2026/blocks/partners";
// import Prompt from "@components/seasons/2026/blocks/prompt";
import Rules from "@components/seasons/2026/blocks/rules";
import Schedule from "@components/seasons/2026/blocks/schedule";
// import Star from "@components/seasons/2026/blocks/star";
import MeetCommittees from "@components/seasons/2026/blocks/team";
import Tracks from "@components/seasons/2026/blocks/tracks";
import Sparkles from "@components/seasons/2026/common/sparkles";

export default function Landing2026() {
  return (
    <main className="relative min-h-[100dvh] w-full overflow-visible bg-[url('/images/seasons/2026/landing/gradient/background.webp')] bg-[length:100%_auto] bg-top bg-repeat">
      <Sparkles />
      <LandingNavigation />
      <Hero />
      <About />
      <Tracks />
      {/* <Prompt /> */}
      <Rules />
      <Schedule />
      <Judges />
      <Partners />
      <MeetCommittees />
      <FAQ />
      <MailingList />
      <Footer />
    </main>
  );
}
