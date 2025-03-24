import SponsorsMarquee from "@components/seasons/2025/blocks/sponsors/sponsors-marquee";

export interface Organization {
  id: string;
  content?: {
    imageURL: string;
    rotation: number;
    name: string;
  };
}

function Sponsors() {
  return (
    <section className="flex justify-center bg-(--blue) py-12 text-white">
      <div className="flex w-full flex-col 3xl:max-w-[1920px]">
        <div className="relative">
          <div className="absolute top-0 left-0 z-10 flex w-full justify-center">
            <h2 className="container font-title text-3xl font-bold">
              Sponsors
            </h2>
          </div>
          <SponsorsMarquee reverse organizations={sponsors} />
        </div>
        <div className="relative sm:-mt-32 lg:-mt-64 2xl:-mt-[400px] 3xl:-mt-[400px]">
          <div className="absolute top-0 left-0 z-10 flex w-full justify-center px-8">
            <h2 className="container font-title text-3xl font-bold">
              Partners
            </h2>
          </div>
          <SponsorsMarquee organizations={partners} />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;

const sponsors: Organization[] = [
  {
    id: "marquee1-1",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741308839/notion-logo_hyoxvt_c_fill_w_512_h_512_o5osth.png",
      name: "Notion",
      rotation: -5,
    },
  },
  {
    id: "marquee1-2",
  },
  {
    id: "marquee1-3",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741308720/figma-logo_foz50r.png",
      rotation: 3,
      name: "Figma",
    },
  },
  {
    id: "marquee1-4",
  },
];

const partners: Organization[] = [
  {
    id: "marquee2-1",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741309283/vgdc-logo_izm9xo.jpg",
      name: "VGDC",
      rotation: -5,
    },
  },
  {
    id: "marquee2-2",
  },
  {
    id: "marquee2-3",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741309283/ctc-logo_khwqua.png",
      rotation: 3,
      name: "CTC",
    },
  },
  {
    id: "marquee2-4",
  },
];
