import DOTImage from "@components/common/dot-image";
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
    <section
      id="sponsors"
      className="noise flex h-fit justify-center overflow-hidden bg-(--blue) py-12 pb-40 text-white xl:pb-96"
    >
      <div className="flex w-full flex-col gap-20 3xl:max-w-[1920px]">
        <div
          className="relative flex flex-col items-center gap-20 sm:gap-40 lg:gap-60"
          data-status="incomplete"
        >
          <h2 className="relative z-10 container font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            Sponsors
          </h2>
          <SponsorsMarquee reverse organizations={sponsors} />
          <div className="absolute right-0 bottom-0 w-1/2 translate-x-1/4 translate-y-1/2">
            <DOTImage
              width={1659}
              height={790}
              src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741305138/clouds-right_atevno.png"
              alt="clouds"
              className="animate-hover duration-[5s]"
              sizes="(min-width: 0px) 50vw"
            />
          </div>
        </div>
        {/* <div
          className="relative flex flex-col items-center gap-20 sm:gap-40 lg:gap-60"
          data-status="incomplete"
        >
          <h2 className="relative z-10 container font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            Partners
          </h2>
          <SponsorsMarquee organizations={partners} />
          <div className="absolute bottom-0 left-0 w-1/2 -translate-x-1/4 translate-y-1/2">
            <DOTImage
              width={1659}
              height={790}
              src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741305136/clouds-left_diyuid.png"
              alt="clouds"
              className="animate-hover delay-[-2s] duration-[5s]"
              sizes="(min-width: 0px) 50vw"
            />
          </div>
        </div> */}
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
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1744214567/2025/landing-page/assets/sponsors/logos/odit.png",
      rotation: -3,
      name: "UCI ODIT",
    },
  },
  {
    id: "marquee1-4",
  },
  {
    id: "marquee1-5",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1743630292/2025/landing-page/assets/sponsors/logos/designliLogo.webp",
      rotation: 3,
      name: "Designli",
    },
  },
  {
    id: "marquee1-6",
  },
  {
    id: "marquee1-7",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1743630291/2025/landing-page/assets/sponsors/logos/antrepreneurshipCenter.jpg",
      rotation: 3,
      name: "ANTpreneur Center",
    },
  },
  {
    id: "marquee1-8",
  },
  {
    id: "marquee1-9",
    content: {
      imageURL:
        "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1744214271/2025/landing-page/assets/sponsors/logos/poppi.jpg",
      rotation: 3,
      name: "poppi",
    },
  },
  {
    id: "marquee1-10",
  },
];

// const partners: Organization[] = [
//   {
//     id: "marquee2-1",
//     content: {
//       imageURL:
//         "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741309283/vgdc-logo_izm9xo.jpg",
//       name: "VGDC",
//       rotation: -5,
//     },
//   },
//   {
//     id: "marquee2-2",
//   },
//   {
//     id: "marquee2-3",
//     content: {
//       imageURL:
//         "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1741309283/ctc-logo_khwqua.png",
//       rotation: 3,
//       name: "CTC",
//     },
//   },
//   {
//     id: "marquee2-4",
//   },
//   {
//     id: "marquee2-5",
//     content: {
//       imageURL:
//         "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512/v1743631210/2025/landing-page/assets/sponsors/logos/balsamiq.png",
//       rotation: 3,
//       name: "balsamiq",
//     },
//   },
//   {
//     id: "marquee2-6",
//   },
// ];
