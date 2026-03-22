import SponsorsMarquee from "@components/seasons/2026/blocks/partners/sponsors-marquee";

export interface Organization {
  id: string;
  content?: {
    imageURL: string;
    rotation: number;
    name: string;
  };
}

function Partners() {
  return (
    <section
      id="partners"
      className="flex h-fit justify-center overflow-hidden bg-(--blue) py-12 pb-10 text-white xl:pb-0"
    >
      <div className="flex w-full flex-col 3xl:max-w-[1920px]">
        <div
          className="relative flex flex-col sm:gap-8"
          data-status="incomplete"
        >
          <h1 className="container [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
            Partners
          </h1>
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
      imageURL: "/images/seasons/2026/landing/partners/logos/auntea_jenny.png",
      name: "Auntea Jenny",
      rotation: -5,
    },
  },
  {
    id: "marquee1-2",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/canes.png",
      name: "Raising Cane's",
      rotation: -3,
    },
  },
  {
    id: "marquee1-3",
  },
  {
    id: "marquee1-4",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/postmates.png",
      rotation: -10,
      name: "Postmates",
    },
  },
  {
    id: "marquee1-5",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/drg.jpg",
      rotation: 3,
      name: "Dr. G",
    },
  },
  {
    id: "marquee1-6",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/bluety.jpg",
      rotation: 3,
      name: "Bluety",
    },
  },
  {
    id: "marquee1-7",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/hero.jpg",
      rotation: 3,
      name: "Hero Cosmetics",
    },
  },
  {
    id: "marquee1-8",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/spfb.png",
      rotation: -3,
      name: "UCI SPFB",
    },
  },
  {
    id: "marquee1-9",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/copilot.png",
      name: "Microsoft Copilot",
      rotation: 20,
    },
  },
  {
    id: "marquee1-10",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/chartmetric.png",
      name: "Chartmetric",
      rotation: 3,
    },
  },
  {
    id: "marquee1-11",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/google.png",
      name: "Google",
      rotation: -2,
    },
  },
  {
    id: "marquee1-12",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/im.png",
      name: "Ingram Micro",
      rotation: -20,
    },
  },
  {
    id: "marquee1-13",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/lovable.png",
      name: "Lovable",
      rotation: 0,
    },
  },
  {
    id: "marquee1-14",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/monsters.png",
      name: "Monster",
      rotation: 10,
    },
  },
  {
    id: "marquee1-15",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/og.jpg",
      name: "Olive Garden",
      rotation: 0,
    },
  },
  {
    id: "marquee1-16",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/Ryan Yang.png",
      name: "Ryan Yang",
      rotation: 5,
    },
  },
  {
    id: "marquee1-17",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/tabi.png",
      name: "Tabi",
      rotation: 7,
    },
  },
  {
    id: "marquee1-18",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/tigawok.jpg",
      name: "Tigawok",
      rotation: -10,
    },
  },
];
