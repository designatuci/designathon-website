import JudgeCard from "@components/seasons/2025/blocks/judges/judge-card";

export interface Judge {
  name: string;
  position: string;
  websiteURL: string;
  linkedInURL: string;
  imageURL: string;
}

function Judges() {
  return (
    <section className="noise flex justify-center bg-(--blue) pb-12 lg:pb-20">
      <div className="container text-white">
        <h2 className="font-title text-3xl leading-loose font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          Judges
        </h2>
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {judges.map((judge, index) => (
            <JudgeCard key={index} judge={judge} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Judges;

const judges: Judge[] = [
  {
    name: "Charithra Sathyanarayan",
    position: "UX Design Lead @ SAP",
    websiteURL: "#undefined",
    linkedInURL: "#undefined",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1742792000/2025/landing-page/assets/judges/Charithra_Sathyanarayan.png",
  },
  {
    name: "Jacky Dittkowski",
    position: "UX Design Lead @ SAP",
    websiteURL: "#undefined",
    linkedInURL: "#undefined",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1742792000/2025/landing-page/assets/judges/Jacky_Dittkowski.png",
  },
  {
    name: "Shana Sanford",
    position: "Product Designer @ Uber",
    websiteURL: "#undefined",
    linkedInURL: "#undefined",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1742792000/2025/landing-page/assets/judges/Shana_Sanford.png",
  },
  {
    name: "Nikhil Mehrotra",
    position: "UX Designer @ Indeed",
    websiteURL: "#undefined",
    linkedInURL: "#undefined",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1742792000/2025/landing-page/assets/judges/Nikhil_Mehrotra.png",
  },
];
