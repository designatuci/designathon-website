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
      <JudgeSection title="Keynote Speakers" profiles={speakers} />
      <JudgeSection title="Judges" profiles={judges} />
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
      <div className="grid grid-cols-1 justify-items-center gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
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
    imageURL: "/images/seasons/2025/landing/judges/nicoleliangmai.jpg",
  },
  {
    name: "Michael Auld",
    position: "Product Illustrator at Anduril",
    linkedInURL: "https://www.linkedin.com/in/michaellauld/",
    imageURL: "/images/seasons/2025/landing/judges/michaellauld.jpg",
  },
  {
    name: "Sergio Harashyn",
    position: "Co-founder, Head of Product Design at AI2UX",
    linkedInURL: "https://www.linkedin.com/in/harashyn/",
    imageURL: "/images/seasons/2025/landing/judges/sergio-harashyn.jpg",
  },
  {
    name: "Sarina Chen",
    position: "Growth Product Designer & Manager at MoBagel",
    linkedInURL: "https://www.linkedin.com/in/yiwen-sarina-chen/",
    imageURL: "/images/seasons/2025/landing/judges/sarina-chen.png",
  },
  {
    name: "Agnes Tran",
    position: "Senior Designer at IBM iX",
    linkedInURL: "https://www.linkedin.com/in/agnestran/",
    imageURL: "/images/seasons/2025/landing/judges/agnes-tran.png",
  },
  {
    name: "Kyuha Jung",
    position: "PhD Student & HCI Researcher at UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/jkyuha/",
    imageURL: "/images/seasons/2025/landing/judges/jkyuha.jpg",
  },
  {
    name: "Yuko Shimura",
    position: "Product Designer at Centerfield",
    linkedInURL: "https://www.linkedin.com/in/yuko-shimura/",
    imageURL: "/images/seasons/2025/landing/judges/yuko-shimura.png",
  },
  {
    name: "Iris Spear",
    position: "Lead UX Designer at Alteryx",
    linkedInURL: "https://www.linkedin.com/in/iris-spear/",
    imageURL: "/images/seasons/2025/landing/judges/iris-spear.png",
  },
  {
    name: "Miles Seiden",
    position:
      "Fractional Creative Director & Consultant at Miles Seiden Creative",
    linkedInURL: "https://www.linkedin.com/in/milesseiden/",
    imageURL: "/images/seasons/2025/landing/judges/milesseiden.png",
  },
  {
    name: "Damjan Krajacic",
    position: "UX Strategist at ActiveColor",
    linkedInURL: "https://www.linkedin.com/in/damjankrajacic/",
    imageURL: "/images/seasons/2025/landing/judges/damjankrajacic.jpeg",
  },
  {
    name: "Lawrence Ntim",
    position: "Senior Product Designer at Dropbox",
    linkedInURL: "https://www.linkedin.com/in/damjankrajacic/",
    imageURL: "/images/seasons/2025/landing/judges/lawrence.png",
  },
];

const speakers: Judge[] = [
  {
    name: "Robyn Young",
    position:
      "Founder, Brand Strategist, and Author of Build Your Brand Universe",
    linkedInURL: "https://www.linkedin.com/in/robyn-young/",
    imageURL: "/images/seasons/2025/landing/judges/robyn-young.png",
  },
  {
    name: "Alex Park",
    position: "UX Design Manager at Riot Games",
    linkedInURL: "https://www.linkedin.com/in/alexpark5/",
    imageURL: "/images/seasons/2025/landing/judges/alexpark5.jpg",
  },
  {
    name: "Miles Seiden",
    position:
      "Fractional Creative Director & Consultant at Miles Seiden Creative",
    linkedInURL: "https://www.linkedin.com/in/milesseiden/",
    imageURL: "/images/seasons/2025/landing/judges/milesseiden.png",
  },
  {
    name: "Tyler Vickers",
    position: "Senior Product Manager at Amazon",
    linkedInURL: "https://www.linkedin.com/in/tyler-vickers-1128258/",
    imageURL: "/images/seasons/2025/landing/judges/tyler-vickers.jpeg",
  },
  {
    name: "Lawrence Ntim",
    position: "Senior Product Designer at Dropbox",
    linkedInURL: "https://www.linkedin.com/in/lawrencentim/",
    imageURL: "/images/seasons/2025/landing/judges/lawrence.png",
  },
];
