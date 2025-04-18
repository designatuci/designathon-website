"use client";

import Team from "@components/seasons/2025/blocks/team";
import LandingNavigation from "@components/seasons/2025/navigation/landing-navigation";

function Team2025() {
  return (
    <main className="min-h-screen bg-(--blue) font-primary">
      <LandingNavigation />
      <Team />
    </main>
  );
}

export default Team2025;
