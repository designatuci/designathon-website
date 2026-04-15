import SponsorsMarquee from "@components/seasons/2026/blocks/partners/sponsors-marquee";

export interface Organization {
  id: string;
  content?: {
    imageURL: string;
    rotation: number;
    name: string;
    websiteUrl?: string;
  };
}

function Partners() {
  return (
    <section
      id="partners"
      className="flex h-[120vh] justify-center overflow-hidden bg-(--blue) py-12 pb-10 text-white md:h-fit xl:pb-0"
    >
      <div
        className="mx-auto flex w-full max-w-[1920px] flex-col sm:gap-8"
        data-status="incomplete"
      >
        <div className="container mx-auto w-full">
          <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
            Partners
          </h1>
        </div>
        <div className="relative w-full">
          <SponsorsMarquee organizations={partners} />
        </div>
      </div>
    </section>
  );
}

export default Partners;

const partners: Organization[] = [
  {
    id: "marquee1-1",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/spfb.png",
      name: "UCI SPFB",
      rotation: 6,
      websiteUrl: "https://asuci.uci.edu/spfb/",
    },
  },
  {
    id: "marquee1-2",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/gemini.png",
      name: "Google Gemini",
      rotation: 6,
      websiteUrl: "https://gemini.google.com/",
    },
  },
  {
    id: "marquee1-3",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/notability.jpeg",
      name: "Notability",
      rotation: 10,
      websiteUrl: "https://notability.com/",
    },
  },
  {
    id: "marquee1-4",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/ant_center.jpg",
      name: "ANTrepreneur Center",
      rotation: 8,
      websiteUrl: "https://antrepreneur.uci.edu/",
    },
  },
  {
    id: "marquee1-5",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/auntea_jenny.png",
      name: "Auntea Jenny",
      rotation: 6,
      websiteUrl: "https://aunteajenny.us/",
    },
  },
  {
    id: "marquee1-6",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/menya.jpg",
      name: "Menya Hanabi",
      rotation: 20,
      websiteUrl: "https://menyahanabiusa.com/",
    },
  },
  {
    id: "marquee1-7",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/eat.jpg",
      name: "Eat Studio",
      rotation: 6,
      websiteUrl: "https://eat.studio/",
    },
  },
  {
    id: "marquee1-8",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/Ryan Yang.png",
      name: "Ryan Yang",
      rotation: 0,
      websiteUrl: "https://ryqn.dev/",
    },
  },
  {
    id: "marquee1-9",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/bluety.jpg",
      name: "Bluety",
      rotation: -10,
      websiteUrl: "https://bybluety.com/",
    },
  },
  {
    id: "marquee1-10",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/canes.png",
      name: "Raising Cane's",
      rotation: -10,
      websiteUrl: "https://raisingcanes.com/",
    },
  },
  {
    id: "marquee1-11",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/og.jpeg",
      name: "Olive Garden",
      rotation: 6,
      websiteUrl: "https://www.olivegarden.com/",
    },
  },
  {
    id: "marquee1-12",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/tigawok.jpg",
      name: "Tigawok",
      rotation: 8,
      websiteUrl: "https://www.tigawok.com/",
    },
  },
  {
    id: "marquee1-13",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/amazon.jpeg",
      name: "Amazon",
      rotation: 0,
      websiteUrl: "https://www.amazon.com/",
    },
  },
  {
    id: "marquee1-14",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/copilot.png",
      name: "Microsoft Copilot",
      rotation: -10,
      websiteUrl: "https://copilot.microsoft.com/",
    },
  },
  {
    id: "marquee1-15",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/doordash.png",
      name: "Doordash",
      rotation: 8,
      websiteUrl: "https://www.doordash.com/",
    },
  },
  {
    id: "marquee1-16",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/uber_eats.png",
      name: "Uber Eats",
      rotation: 6,
      websiteUrl: "https://www.ubereats.com/",
    },
  },
  {
    id: "marquee1-17",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/lego.png",
      name: "LEGO",
      rotation: -8,
      websiteUrl: "https://www.lego.com/",
    },
  },
  {
    id: "marquee1-18",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/monsters.png",
      name: "Monster Energy",
      rotation: -15,
      websiteUrl: "https://www.monsterenergy.com/",
    },
  },
  {
    id: "marquee1-19",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/chipotle.png",
      name: "Chipotle",
      rotation: -10,
      websiteUrl: "https://www.chipotle.com/",
    },
  },
];
