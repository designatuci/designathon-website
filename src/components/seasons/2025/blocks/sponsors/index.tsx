import SponsorsMarquee from "@components/seasons/2025/blocks/sponsors/sponsors-marquee";

export interface Sponsor {
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
          <h2 className="absolute top-0 left-0 z-10">Sponsors</h2>
          <SponsorsMarquee
            reverse
            sponsors={[
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
            ]}
          />
        </div>
        <div className="-mt-20 sm:-mt-40 lg:-mt-64 2xl:-mt-[400px] 3xl:-mt-[400px]">
          <h2>Partners</h2>
          <SponsorsMarquee
            sponsors={[
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
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
