"use client";

import type {
  Award,
  HackathonTrack,
} from "@components/seasons/2026/blocks/tracks/card";
import {
  AwardCardGrid,
  TrackCardGrid,
} from "@components/seasons/2026/blocks/tracks/card";

const tracks: HackathonTrack[] = [
  {
    name: "Open Source",
    tagline:
      "Build tools the community will actually use Build tools the community will actually use Build tools the community will actually use Build tools the community will actually use Build tools the community will actually use",
    badge: "Community",
    prize: "$2,500",
    variant: "glass",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#8BAEFF" stroke-width="1.5"/>
      <path d="M9 12l2 2 4-4" stroke="#8BAEFF" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    perks: [
      "Deploy on public infra",
      "Mentorship from OSS maintainers",
      "1:1 code review session",
      "Community vote bonus",
      "Feature on project showcase",
    ],
  },
  {
    name: "AI & ML",
    tagline:
      "Push the frontier of intelligent systems Push the frontier of intelligent systemsPush the frontier of intelligent systemsPush the frontier of intelligent systemsPush the frontier of intelligent systemsPush the frontier of ntier ofntier ofntier ofntier ofntier ofntier of",
    badge: "Recommended",
    prize: "$10,000",
    variant: "featured",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
        stroke="#fff" stroke-width="1.5" fill="rgba(255,255,255,0.2)" stroke-linejoin="round"/>
    </svg>`,
    perks: [
      "Anthropic API credits",
      "Finalist demo to investors",
      "Fast-track interview at sponsors",
      "Featured in press release",
    ],
  },
  {
    name: "Sustainability",
    tagline:
      "Tech solutions for a livable planet Tech solutions for a livable planetTech solutions for a livable planetTech solutions for a livable planetTech solutions for a livable planetTech solutions for a livable planet",
    badge: "Impact",
    prize: "$5,000",
    variant: "glass",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        stroke="#8BAEFF" stroke-width="1.5"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#8BAEFF" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    perks: [
      "Partner NGO mentors",
      "Carbon-offset infra credits",
      "Pitch at climate summit",
      "Grant writing support",
      "Impact report publication",
    ],
  },
];

const awards: Award[] = [
  {
    name: "People's Choice",
    description: "Voted by attendees — the project the crowd loved most.",
    prize: "$1,000",
    variant: "peoples-choice",
  },
  {
    name: "Most Novel",
    description: "Recognized for the most creative and unexpected idea.",
    prize: "$1,000",
    variant: "most-novel",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="mb-50 flex flex-col items-center md:py-16">
      <div className="relative w-full text-center">
        <h1 className="my-0 py-0 [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Tracks
        </h1>
      </div>

      <div className="container flex w-full flex-row flex-wrap items-stretch justify-center gap-4">
        <TrackCardGrid tracks={tracks} />
        <AwardCardGrid awards={awards} />
      </div>
    </section>
  );
}
