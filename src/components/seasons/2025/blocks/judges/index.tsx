import ProfileCard from "@components/seasons/2025/blocks/judges/profile-card";
import { useInView } from "motion/react";
import { useRef } from "react";

export interface Judge {
  name: string;
  position: string;
  linkedInURL: string;
  imageURL: string;
}

function Judges() {
  return (
    <section className="noise flex flex-col items-center gap-4 bg-(--blue) pb-12 sm:gap-20 lg:pb-20">
      <JudgeSection title="Judges" profiles={judges} />
      <JudgeSection title="Keynote Speakers" profiles={speakers} />
    </section>
  );
}

type JudgeSectionProps = {
  title: string;
  profiles: Judge[];
};

function JudgeSection({ title, profiles }: JudgeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -300px 0px",
  });

  return (
    <div className="container text-white" ref={ref}>
      <h2 className="pb-8 text-center font-title text-3xl leading-loose font-bold sm:text-left sm:text-4xl lg:text-5xl xl:text-6xl">
        {title}
      </h2>
      <div className="flex flex-wrap items-stretch justify-center gap-x-8 gap-y-8">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            profile={profile}
            isInView={isInView}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Judges;

const judges: Judge[] = [
  {
    name: "Nicole Liang",
    position: "Senior UX Designer at Google",
    linkedInURL: "https://www.linkedin.com/in/nicoleliangmai",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744668341/2025/landing-page/assets/judges/IMG_1859_-_Mai_Liang.jpg",
  },
  {
    name: "Michael Auld",
    position: "Product Illustrator at Anduril",
    linkedInURL: "https://www.linkedin.com/in/michaellauld/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744668808/2025/landing-page/assets/judges/bwbackground_-_Michael_Auld.jpg",
  },
  {
    name: "Sergio Harashyn",
    position: "Co-founder, Head of Product Design at AI2UX",
    linkedInURL: "https://www.linkedin.com/in/harashyn/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744669080/2025/landing-page/assets/judges/sergio-harashyn.jpg",
  },
  {
    name: "Sarina Chen",
    position: "Growth Product Designer & Manager at MoBagel",
    linkedInURL: "https://www.linkedin.com/in/yiwen-sarina-chen/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744669962/2025/landing-page/assets/judges/sarina-chen.png",
  },
  {
    name: "Agnes Tran",
    position: "Senior Designer at IBM iX",
    linkedInURL: "https://www.linkedin.com/in/agnestran/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744670942/2025/landing-page/assets/judges/agnes-tran.png",
  },
  {
    name: "Kyuha Jung",
    position: "PhD Student & HCI Researcher at UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/jkyuha/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744671032/2025/landing-page/assets/judges/KyuhaJung_20241130_-_Kyuha_Jung.jpg",
  },
  {
    name: "Yuko Shimura",
    position: "Product Designer at Centerfield",
    linkedInURL: "https://www.linkedin.com/in/yuko-shimura/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744671249/2025/landing-page/assets/judges/yuko-shimura.png",
  },
  {
    name: "Iris Spear",
    position: "Lead UX Designer at Alteryx",
    linkedInURL: "https://www.linkedin.com/in/iris-spear/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744671472/2025/landing-page/assets/judges/iris-spear.png",
  },
];

const speakers: Judge[] = [
  {
    name: "Robyn Young",
    position: "",
    linkedInURL: "",
    imageURL: "",
  },
  {
    name: "Alex Park",
    position: "UX Design Manager at Riot Games",
    linkedInURL: "https://www.linkedin.com/in/alexpark5/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744674718/2025/landing-page/assets/judges/alex-me_-_Alex_Park.jpg",
  },
  {
    name: "Alex Park",
    position: "UX Design Manager at Riot Games",
    linkedInURL: "https://www.linkedin.com/in/alexpark5/",
    imageURL:
      "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto,w_512,h_512/v1744674718/2025/landing-page/assets/judges/alex-me_-_Alex_Park.jpg",
  },
];
