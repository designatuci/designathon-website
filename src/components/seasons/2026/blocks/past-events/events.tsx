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
}

export const eventsList: PlanetConfig[] = [
  {
    src: "/images/seasons/2026/landing/about/magneta.png",
    alt: "Designathon 2021 planet",
    title: "2021 DOT",
    className: "rotate-[-18deg] text-lg md:text-xl",
    position: "top-[4%] left-1/2 -translate-x-1/2",
    positionTablet: "md:top-[8%] md:left-[62%]",
    positionDesktop: "lg:top-[10%] lg:left-[8%]",
    sizeMobile: "h-32 w-32",
    sizeTablet: "md:h-[14rem] md:w-[14rem]",
    sizeDesktop: "lg:h-[20rem] lg:w-[20rem]",
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
  },
  {
    src: "/images/seasons/2026/landing/about/blue.png",
    alt: "Designathon 2022 planet",
    title: "2022 Impact",
    className: "rotate-[-22deg] text-xl md:text-2xl",
    position: "top-[20%] left-[10%]",
    positionTablet: "md:top-[20%] md:left-[10%]",
    positionDesktop: "lg:top-[5%] lg:left-[21%]",
    sizeMobile: "h-40 w-40",
    sizeTablet: "md:h-[18rem] md:w-[18rem]",
    sizeDesktop: "lg:h-[22rem] lg:w-[22rem]",
    modalContent: {
      title: "Design-a-thon 2022",
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
  },
  {
    src: "/images/seasons/2026/landing/about/yellow.png",
    alt: "Designathon 2023 planet",
    title: "2023 You Belong Here",
    className: "rotate-[-16deg] text-xl md:text-3xl",
    position: "top-[38%] right-[10%]",
    positionTablet: "md:top-[50%] md:left-[8%]",
    positionDesktop: "lg:top-[8%] lg:left-[46%]",
    sizeMobile: "h-48 w-48",
    sizeTablet: "md:h-[22rem] md:w-[22rem]",
    sizeDesktop: "lg:h-[34rem] lg:w-[34rem]",
    modalContent: {
      title: "Design-a-thon 2023",
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
  },
  {
    src: "/images/seasons/2026/landing/about/rose.png",
    alt: "Designathon 2024 planet",
    title: "2024 True To You",
    className: "rotate-[10deg] text-2xl md:text-4xl",
    position: "top-[58%] left-[8%]",
    positionTablet: "md:top-[30%] md:left-[60%]",
    positionDesktop: "lg:top-[47%] lg:left-[46%] lg:translate-x-1/2",
    sizeMobile: "h-56 w-56",
    sizeTablet: "md:h-[24rem] md:w-[24rem]",
    sizeDesktop: "lg:h-[44rem] lg:w-[44rem]",
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
  },
  {
    src: "/images/seasons/2026/landing/about/purple.png",
    alt: "Designathon 2025 planet",
    title: "2025 Beyond Our Horizons",
    className: "rotate-[-10deg] text-2xl md:text-4xl",
    position: "top-[80%] left-1/2 -translate-x-1/2",
    positionTablet: "md:top-[68%] md:left-[35%]",
    positionDesktop: "lg:top-[71%] lg:left-[42%]",
    sizeMobile: "h-60 w-60",
    sizeTablet: "md:h-[26rem] md:w-[26rem]",
    sizeDesktop: "lg:h-[38rem] lg:w-[38rem]",
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
