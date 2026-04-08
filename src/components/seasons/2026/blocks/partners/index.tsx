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
      imageURL: "/images/seasons/2026/landing/partners/logos/auntea_jenny.png",
      name: "Auntea Jenny",
      rotation: 6,
    },
  },
  {
    id: "marquee1-2",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/bluety.jpg",
      name: "Bluety",
      rotation: -10,
    },
  },
    {
    id: "marquee1-3",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/canes.png",
      name: "Raising Cane's",
      rotation: -10,
    },
  },
  {
    id: "marquee1-4",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/amazon.png",
      name: "Amazon",
      rotation: 0,
    },
  },
    {
    id: "marquee1-5",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/eat.jpg",
      name: "Eat Studio",
      rotation: 6,
    },
  },
    {
    id: "marquee1-6",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/copilot.png",
      name: "Microsoft Copilot",
      rotation: -10,
    },
  },
  {
    id: "marquee1-7",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/doordash.webp",
      name: "Doordash",
      rotation: 8,
    },
  },
  {
    id: "marquee1-8",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/menya.jpg",
      name: "Menya Hanabi",
      rotation: 20,
    },
  },
  {
    id: "marquee1-9",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/og.jpg",
      name: "Olive Garden",
      rotation: 6,
    },
  },
  {
    id: "marquee1-10",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/postmates.png",
      name: "Postmates",
      rotation: -10,
    },
  },
  {
    id: "marquee1-11",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/spfb.png",
      name: "UCI SPFB",
      rotation: 6,
    },
  },
  {
    id: "marquee1-12",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/notability.png",
      name: "Notability",
      rotation: 10,
    },
  },
    {
    id: "marquee1-13",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/monsters.png",
      name: "Monster Energy",
      rotation: -15,
    },
  },

  {
    id: "marquee1-14",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/tigawok.jpg",
      name: "Tigawok",
      rotation: 8,
    },
  },
  {
    id: "marquee1-15",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/Ryan Yang.png",
      name: "Ryan Yang",
      rotation: 0,
    },
  },
    {
    id: "marquee1-16",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/tabi.png",
      name: "Tabi",
      rotation: 6,
    },
  },
    {
    id: "marquee1-18",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/uber_eats.webp",
      name: "Uber Eats",
      rotation: 6,
    },
  },

];
