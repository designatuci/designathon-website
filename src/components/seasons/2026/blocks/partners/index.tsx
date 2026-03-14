import DOTImage from "@components/common/dot-image";
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
      className="flex h-fit justify-center overflow-hidden bg-(--blue) py-12 pb-40 text-white xl:pb-96"
    >
      <div className="flex w-full flex-col gap-20 3xl:max-w-[1920px]">
        <div
          className="relative flex flex-col items-center gap-20 sm:gap-40 lg:gap-60"
          data-status="incomplete"
        >
          <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
            Partners
          </h1>
          <SponsorsMarquee reverse organizations={partners} />
          <div className="absolute right-0 bottom-0 w-1/2 translate-x-1/4 translate-y-1/2">
            <DOTImage
              width={1659}
              height={790}
              src="/images/seasons/2026/landing/partners/clouds-right.png"
              alt="clouds"
              className="animate-hover duration-[5s]"
              sizes="(min-width: 0px) 50vw"
            />
          </div>
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
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/copilot.png",
      rotation: 6,
      name: "Microsoft Copilot",
    },
  },
  {
    id: "marquee1-4",
    content: {
      imageURL: "/images/seasons/2026/landing/partners/logos/doordash.png",
      rotation: 3,
      name: "Doordash",
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
  },
  {
    id: "marquee1-10",
  },
];
