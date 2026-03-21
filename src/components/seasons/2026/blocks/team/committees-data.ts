import { Committee } from "./committee-constellation";

export const COMMITTEES: Committee[] = [
  {
    id: "web",
    name: "Web Team",
    color: "rgba(100,200,255,1)",
    star: "/images/seasons/2026/landing/committees/blue.png",
    glow: "rgba(100,200,255,0.8)",
    pos: { x: 18, y: 20 },
    size: 150,
    fd: 4.2,
    fdelay: 0,
    description:
      "Building and maintaining the Design-a-thon digital experience.",
    constellationName: "Orion",
    constellation: {
      members: [
        [100, 170],
        [340, 170],
        [100, 265],
        [340, 265],
        [340, 355],
      ],
      dummies: [
        [220, 215],
        [220, 310],
        [100, 355],
      ],
      director: [220, 105],
      lines: [
        [
          [100, 170],
          [220, 105],
        ],
        [
          [340, 170],
          [220, 105],
        ],
        [
          [100, 170],
          [220, 215],
        ],
        [
          [340, 170],
          [220, 215],
        ],
        [
          [100, 265],
          [220, 215],
        ],
        [
          [340, 265],
          [220, 215],
        ],
        [
          [100, 265],
          [220, 310],
        ],
        [
          [340, 265],
          [220, 310],
        ],
        [
          [100, 355],
          [220, 310],
        ],
        [
          [340, 355],
          [220, 310],
        ],
        [
          [220, 215],
          [220, 310],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Jay Chan",
        role: "Director (Development)",
        year: "3rd Year",
        major: "Computer Science",
        funFact: "I was born with 11 fingers!",
      },
      {
        photo: "",
        name: "Anna Kwan",
        role: "Director (UI/UX)",
        year: "4th Year",
        major: "Business Information Management",
        funFact: "I've been to 11 countries!",
      },
      {
        photo: "",
        name: "Johnson Nguyen",
        role: "Committee (Development)",
        year: "3rd Year",
        major: "Computer Science",
        funFact: "My favorite Eevee evolution is Sylveon.",
      },
      {
        photo: "",
        name: "Abby Chang",
        role: "Committee (UI/UX)",
        year: "2nd Year",
        major: "Art & Digital Information Systems",
        funFact: "I love doing my nails!",
      },
      {
        photo: "",
        name: "Alice Ger",
        role: "Committee (UI/UX)",
        year: "3rd Year",
        major: "Data Science & Informatics",
        funFact: "I am a Kirby-holic for life!",
      },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Operations",
    color: "rgba(100,255,140,1)",
    star: "/images/seasons/2026/landing/committees/green.png",
    glow: "rgba(100,255,140,0.8)",
    pos: { x: 62, y: 5 },
    size: 120,
    fd: 3.8,
    fdelay: 0.5,
    description:
      "Coordinating venues, schedules, and supplies to keep the event running smoothly.",
    constellationName: "Little Dipper",
    constellation: {
      members: [
        [120, 360],
        [240, 370],
        [250, 270],
        [140, 250],
      ],
      dummies: [[200, 200]],
      director: [290, 150],
      lines: [
        [
          [120, 360],
          [240, 370],
        ],
        [
          [240, 370],
          [250, 270],
        ],
        [
          [250, 270],
          [140, 250],
        ],
        [
          [140, 250],
          [120, 360],
        ],
        [
          [140, 250],
          [200, 200],
        ],
        [
          [200, 200],
          [290, 150],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Allison Huang",
        role: "Director",
        year: "2nd Year",
        major: "Computer Science",
        funFact: "I prefer tea over coffee.",
      },
      {
        photo: "",
        name: "Evie Ngo",
        role: "Director",
        year: "3rd Year",
        major: "Business Information Management",
        funFact: "I've hosted a matcha pop-up I built by hand!",
      },
      {
        photo: "",
        name: "Heidi Tran",
        role: "Committee",
        year: "4th Year",
        major: "Business Information Management",
        funFact:
          "I love SpongeBob and have been collecting SpongeBob trinkets since I was a kid!",
      },
      {
        photo: "",
        name: "Queena Liu",
        role: "Committee",
        year: "3rd Year",
        major: "Business Administration",
        funFact: "I used to be a ceramics teacher!",
      },
    ],
  },
  {
    id: "finance",
    name: "Finance & Budgeting",
    color: "rgba(255,170,60,1)",
    star: "/images/seasons/2026/landing/committees/orange.png",
    glow: "rgba(255,170,60,0.8)",
    pos: { x: 13, y: 74 },
    size: 110,
    fd: 4.5,
    fdelay: 0.8,
    description:
      "Managing budgets and financial planning to keep the event on track.",
    constellationName: "Triangulum",
    constellation: {
      members: [
        [120, 310],
        [320, 310],
        [220, 340],
      ],
      dummies: [
        [170, 210],
        [270, 210],
      ],
      director: [220, 120],
      lines: [
        [
          [220, 120],
          [170, 210],
        ],
        [
          [220, 120],
          [270, 210],
        ],
        [
          [170, 210],
          [120, 310],
        ],
        [
          [270, 210],
          [320, 310],
        ],
        [
          [120, 310],
          [220, 340],
        ],
        [
          [320, 310],
          [220, 340],
        ],
        [
          [170, 210],
          [270, 210],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Sahana Iyer",
        role: "Director",
        year: "3rd Year",
        major: "Business Administration & Criminology",
        funFact: "My favorite type of cheese is pepperjack!",
      },
      {
        photo: "",
        name: "Gabrielle Neve Landavora",
        role: "Committee",
        year: "3rd Year",
        major: "Informatics & Health Informatics",
        funFact: "I currently have a collection of around 20 perfumes!",
      },
      {
        photo: "",
        name: "Emily Ono",
        role: "Committee",
        year: "2nd Year",
        major: "Business Administration",
        funFact: "I like to rock climb!",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Outreach",
    star: "/images/seasons/2026/landing/committees/pink.png",
    color: "rgba(255,140,200,1)",
    glow: "rgba(255,140,200,0.8)",
    pos: { x: 48, y: 82 },
    size: 145,
    fd: 3.6,
    fdelay: 0.3,
    description:
      "Spreading the word and building excitement around Design-a-thon.",
    constellationName: "Corvus",
    constellation: {
      members: [
        [220, 330],
        [360, 210],
        [280, 170],
        [180, 140],
      ],
      dummies: [
        [120, 260],
        [140, 200],
      ],
      director: [190, 70],
      lines: [
        [
          [220, 330],
          [120, 260],
        ],
        [
          [120, 260],
          [140, 200],
        ],
        [
          [140, 200],
          [180, 140],
        ],
        [
          [180, 140],
          [280, 170],
        ],
        [
          [280, 170],
          [360, 210],
        ],
        [
          [190, 70],
          [180, 140],
        ],
        [
          [190, 70],
          [140, 200],
        ],
        [
          [220, 330],
          [280, 170],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Julia Tjia",
        role: "Director",
        year: "4th Year",
        major: "Computer Science & Innovation and Entrepreneurship",
        funFact:
          "I've been in an episode of Girl Meets World as a background actor!",
      },
      {
        photo: "",
        name: "Paolo Brinas",
        role: "Committee",
        year: "4th Year",
        major: "Business Economics",
        funFact: "I longboard dance!",
      },
      {
        photo: "",
        name: "Vanessa Chok",
        role: "Committee",
        year: "3rd Year",
        major: "Business Information Management",
        funFact:
          "I'm obsessed with collecting random paper scraps to put in my zines!",
      },
      {
        photo: "",
        name: "Audrey Zheng",
        role: "Committee",
        year: "1st Year",
        major: "Undeclared",
        funFact: "I really like collecting smiskis!",
      },
    ],
  },
  {
    id: "creative",
    name: "Creative & Branding",
    color: "rgba(180,80,255,1)",
    star: "/images/seasons/2026/landing/committees/purple.png",
    glow: "rgba(180,80,255,0.8)",
    pos: { x: 87, y: 28 },
    size: 125,
    fd: 4.8,
    fdelay: 1.2,
    description:
      "Crafting the visual identity that brings the cosmic theme to life.",
    constellationName: "Triangulum Australe",
    constellation: {
      members: [
        [80, 300],
        [220, 180],
        [360, 300],
      ],
      dummies: [
        [150, 240],
        [290, 240],
      ],
      director: [220, 280],
      lines: [
        [
          [80, 300],
          [150, 240],
        ],
        [
          [150, 240],
          [220, 180],
        ],
        [
          [220, 180],
          [290, 240],
        ],
        [
          [290, 240],
          [360, 300],
        ],
        [
          [150, 240],
          [220, 280],
        ],
        [
          [290, 240],
          [220, 280],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Julianna Nacorda",
        role: "Director",
        year: "3rd Year",
        major: "Software Engineering & Health Informatics",
        funFact:
          "I went camping, kayaking and hiking at Channel Islands National Park over the summer!",
      },
      {
        photo: "",
        name: "Candice Li",
        role: "Committee",
        year: "2nd Year",
        major: "Art",
        funFact: "I am a smiski addict...",
      },
      {
        photo: "",
        name: "Sherry Tram",
        role: "Committee",
        year: "2nd Year",
        major: "Informatics & Digital Arts",
        funFact: "I've never had gum before.",
      },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Relations",
    color: "rgba(255,230,80,1)",
    star: "/images/seasons/2026/landing/committees/yellow.png",
    glow: "rgba(255,230,80,0.8)",
    pos: { x: 78, y: 76 },
    size: 130,
    fd: 5,
    fdelay: 1,
    description: "Securing sponsorships and building industry partnerships.",
    constellationName: "Gemini",
    constellation: {
      members: [
        [40, 310],
        [150, 370],
        [290, 370],
        [400, 310],
      ],
      dummies: [
        [160, 230],
        [280, 230],
      ],
      director: [220, 100],
      lines: [
        [
          [40, 310],
          [160, 230],
        ],
        [
          [160, 230],
          [220, 100],
        ],
        [
          [150, 370],
          [160, 230],
        ],
        [
          [290, 370],
          [280, 230],
        ],
        [
          [280, 230],
          [220, 100],
        ],
        [
          [400, 310],
          [280, 230],
        ],
        [
          [160, 230],
          [280, 230],
        ],
      ],
    },
    members: [
      {
        photo: "",
        name: "Chloe Chun",
        role: "Director of Corporate Relations",
        year: "2nd Year",
        major: "Business Economics & Informatics",
        funFact: "I have a fear of birds.",
      },
      {
        photo: "",
        name: "Bharathi Kaliraj",
        role: "Committee",
        year: "2nd Year",
        major: "Computer Science & Engineering",
        funFact: "I've moved 17 times!",
      },
      {
        photo: "",
        name: "Tiffany Ng",
        role: "Committee",
        year: "3rd Year",
        major: "Psychological Science",
        funFact: "I have a huge fear of birds!",
      },
      {
        photo: "",
        name: "William Vo",
        role: "Committee",
        year: "3rd Year",
        major: "Business Economics",
        funFact: "I share my birthday with a member of BTS!",
      },
    ],
  },
];

const xs = COMMITTEES.map((c) => c.pos.x);
const ys = COMMITTEES.map((c) => c.pos.y);

export const COMMITTEE_CENTER = {
  cx: (Math.min(...xs) + Math.max(...xs)) / 2,
  cy: (Math.min(...ys) + Math.max(...ys)) / 2,
  rx: (Math.max(...xs) - Math.min(...xs)) / 2 + 8,
  ry: (Math.max(...ys) - Math.min(...ys)) / 2 + 8,
};

export const CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [2, 5],
  [1, 4],
];
