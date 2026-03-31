interface EventModalContent {
  title: string;
  theme: string;
  participants: string;
  entries: AwardEntry[];
}

interface AwardEntry {
  imageURL: string;
  placement: string;
  title: string;
  description: string;
}

export interface PlanetConfig {
  src: string;
  alt: string;
  title: string;
  className: string;
  position: string;
  positionTablet?: string;
  positionDesktop?: string;
  sizeMobile: string;
  sizeTablet?: string;
  sizeDesktop?: string;
  modalContent: EventModalContent;
  modalGradient?: {
    fromColor: string; // hex, with leading '#'
    fromStopPct: number;
    toColor: string; // hex, with leading '#'
    toStopPct: number;
  };
}

export const eventsList: PlanetConfig[] = [
  {
    src: "/images/seasons/2026/landing/about/magneta.png",
    alt: "Designathon 2021 planet",
    title: "2021 DOT",
    className: "rotate-[-18deg] text-lg md:text-xl",
    position: "top-[4%] left-1/2 -translate-x-1/2",
    positionTablet: "md:top-[5%] md:left-[10%] lg:top-[1%] lg:left-[15%]",
    positionDesktop: "xl:top-[10%] xl:left-[8%]",
    sizeMobile: "h-28 w-28",
    sizeTablet: "md:h-[11rem] md:w-[11rem] lg:h-[12rem] lg:w-[12rem]",
    sizeDesktop: "xl:h-[16rem] xl:w-[16rem]",
    modalContent: {
      title: "Design-a-thon 2021",
      theme: "Mindfulness & Productivity",
      participants: "100+",
      entries: [
        {
          imageURL: "/images/winners/motivator.png",
          placement: "Best Overall",
          title: "Motivator",
          description: "Created by Allison Yick, Jonathan Lum, Stephanie Chang",
        },
        {
          imageURL: "/images/winners/orin.png",
          placement: "Honorable Mention",
          title: "Orin",
          description: "Created by Isha Godara",
        },
      ],
    },
    modalGradient: {
      fromColor: "#001AFF",
      fromStopPct: 0,
      toColor: "#B200A3",
      toStopPct: 100,
    },
  },
  {
    src: "/images/seasons/2026/landing/about/blue.png",
    alt: "Designathon 2022 planet",
    title: "2022 Impact",
    className: "rotate-[-22deg] text-xl md:text-2xl",
    position: "top-[20%] left-[10%]",
    positionTablet: "md:top-[3%] md:left-[25%] lg:top-[1%] lg:left-[30%]",
    positionDesktop: "xl:top-[5%] xl:left-[21%]",
    sizeMobile: "h-36 w-36",
    sizeTablet: "md:h-[12rem] md:w-[12rem] lg:h-[15rem] lg:w-[15rem]",
    sizeDesktop: "xl:h-[18rem] xl:w-[18rem]",
    modalContent: {
      title: "Impact 2022",
      theme: "Impact",
      participants: "100+",
      entries: [
        {
          imageURL: "/images/winners/ratatouille.jpg",
          placement: "1st Place",
          title: "Ratatouille",
          description: "Created by Stephanie Chang, Michelle Kou",
        },
        {
          imageURL: "/images/winners/carbonology.jpg",
          placement: "2nd Place",
          title: "Carbonology",
          description:
            "Created by Ashley Chang, An Nguyen, Ryan Yang, Angel Yim",
        },
      ],
    },
    modalGradient: {
      fromColor: "#B0E5C4",
      fromStopPct: 0,
      toColor: "#C1BAF0",
      toStopPct: 100,
    },
  },
  {
    src: "/images/seasons/2026/landing/about/yellow.png",
    alt: "Designathon 2023 planet",
    title: "2023 You Belong Here",
    className: "rotate-[-16deg] text-xl md:text-3xl",
    position: "top-[38%] right-[10%]",
    positionTablet: "md:top-[5%] md:left-[55%] lg:top-[10%] lg:left-[60%]",
    positionDesktop: "xl:top-[8%] xl:left-[46%]",
    sizeMobile: "h-40 w-40",
    sizeTablet: "md:h-[18rem] md:w-[18rem] lg:h-[18rem] lg:w-[18rem]",
    sizeDesktop: "xl:h-[28rem] xl:w-[28rem]",
    modalContent: {
      title: "You Belong Here 2023",
      theme: "Community & Inclusivity",
      participants: "300+",
      entries: [
        {
          imageURL: "/images/winners/colorful.png",
          placement: "1st Place",
          title: "Colorful",
          description: "Created by William Han, Megan Phi, Jayden Kang, Amy La",
        },
        {
          imageURL: "/images/winners/honeycomb.png",
          placement: "2nd Place",
          title: "Honeycomb",
          description: "Created by Mandy Wu, Lea Hidaka",
        },
      ],
    },
    modalGradient: {
      fromColor: "#FFE988",
      fromStopPct: 31,
      toColor: "#447BF3",
      toStopPct: 86,
    },
  },
  {
    src: "/images/seasons/2026/landing/about/rose.png",
    alt: "Designathon 2024 planet",
    title: "2024 True To You",
    className: "rotate-[10deg] text-2xl md:text-4xl",
    position: "top-[58%] left-[8%]",
    positionTablet: "md:top-[35%] md:left-[55%] lg:top-[50%] lg:left-[50%]",
    positionDesktop: "xl:top-[47%] xl:left-[87%] xl:-translate-x-1/2",
    sizeMobile: "h-48 w-48",
    sizeTablet: "md:h-[22rem] md:w-[22rem] lg:h-[22rem] lg:w-[22rem]",
    sizeDesktop: "xl:h-[34rem] xl:w-[34rem]",
    modalContent: {
      title: "True to You 2024",
      theme: "Authenticity & Creativity",
      participants: "200+",
      entries: [
        {
          imageURL: "/images/winners/daily-doodle.png",
          placement: "1st Place",
          title: "Daily Doodle",
          description:
            "Created by Lazim Jarif, Sia Harisingani, Lucy Yang, and Jade Nguyen",
        },
        {
          imageURL: "/images/winners/flair.png",
          placement: "2nd Place",
          title: "Flair",
          description:
            "Created by Kaiwen Tang, Alexis Chew, and Richie Sarinana",
        },
        {
          imageURL: "/images/winners/quilted.png",
          placement: "3rd Place",
          title: "Quilted",
          description:
            "Created by Sun Graham, Jocelyn Le, Ethan Zhao, and Sasha Shor",
        },
      ],
    },
    modalGradient: {
      fromColor: "#FFFCED",
      fromStopPct: 19,
      toColor: "#F0C3BA",
      toStopPct: 86,
    },
  },
  {
    src: "/images/seasons/2026/landing/about/purple.png",
    alt: "Designathon 2025 planet",
    title: "2025 Beyond Our Horizons",
    className: "rotate-[-10deg] text-2xl md:text-4xl",
    position: "top-[80%] left-1/2 -translate-x-1/2",
    positionTablet: "md:top-[40%] md:left-[25%] lg:top-[55%] lg:left-[25%]",
    positionDesktop: "xl:top-[71%] xl:left-[42%]",
    sizeMobile: "h-52 w-52",
    sizeTablet: "md:h-[22rem] md:w-[22rem] lg:h-[23rem] lg:w-[23rem]",
    sizeDesktop: "xl:h-[40rem] xl:w-[40rem]",
    modalContent: {
      title: "Beyond Our Horizons 2025",
      theme: "Innovation & Change",
      participants: "250+",
      entries: [
        {
          imageURL: "/images/winners/echo.jpg",
          placement: "1st Place",
          title: "Echo",
          description:
            "Created by Neera Kulkarni, Giovanna Kim-Van Manicelli, Mikaela Reyes, and Cortney Ngo",
        },
        {
          imageURL: "/images/winners/pilly.jpg",
          placement: "2nd Place",
          title: "Pilly",
          description:
            "Created by Bill Susanto, Nicholar Chairnando, and Josephine Ligatsyah",
        },
        {
          imageURL: "/images/winners/claro.jpg",
          placement: "3rd Place",
          title: "Claro",
          description:
            "Created by Ruhin Gharai, Vivian Nguyen, Hailie Atkinson, and Beatrice Ramos",
        },
      ],
    },
  },
];
