import { Committee } from "./committee-constellation";

export const COMMITTEES: Committee[] = [
  {
    id: "web",
    name: "Web Team",
    color: "rgba(100,200,255,1)",
    star: "/images/seasons/2026/landing/team/committees/blue.png",
    glow: "rgba(100,200,255,0.8)",
    pos: { x: 18, y: 20 },
    size: 150,
    fd: 4.2,
    fdelay: 0,
    description:
      "Building and maintaining the Design-a-thon digital experience.",
    constellationName: "Dorado",
    constellation: {
      members: [
        [357, 124], // Jay
        [193, 187], // Anna
        [107, 261], // Johnson
        [65, 276], // Abby
        [82, 325], // Alice
      ],
      dummies: [],
      director: [286, 170],
      lines: [
        [
          [193, 187],
          [286, 170],
        ],
        [
          [286, 170],
          [357, 124],
        ],
        [
          [193, 187],
          [107, 261],
        ],
        [
          [286, 170],
          [107, 261],
        ],
        [
          [107, 261],
          [65, 276],
        ],
        [
          [107, 261],
          [82, 325],
        ],
        [
          [82, 325],
          [65, 276],
        ],
      ],
    },
    members: [
      {
        photo: "/images/seasons/2026/landing/team/directors/jay-chan.png",
        name: "Jay Chan",
        role: "Director (Development)",
        year: "3rd Year",
        major: "Computer Science",
        funFact: "I was born with 11 fingers!",
      },
      {
        photo: "/images/seasons/2026/landing/team/directors/anna-kwan.png",
        name: "Anna Kwan",
        role: "Director (UI/UX)",
        year: "4th Year",
        major: "Business Information Management",
        funFact: "I've been to 11 countries!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/johnson-nguyen.jpg",
        name: "Johnson Nguyen",
        role: "Committee (Development)",
        year: "3rd Year",
        major: "Computer Science",
        funFact: "My favorite Eevee evolution is Sylveon.",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/abby-chang.jpg",
        name: "Abby Chang",
        role: "Committee (UI/UX)",
        year: "2nd Year",
        major: "Art & Digital Information Systems",
        funFact: "I love doing my nails!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/alice-ger.png",
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
    star: "/images/seasons/2026/landing/team/committees/green.png",
    glow: "rgba(100,255,140,0.8)",
    pos: { x: 62, y: 5 },
    size: 120,
    fd: 3.8,
    fdelay: 0.5,
    description:
      "Coordinating venues, schedules, and supplies to keep the event running smoothly.",
    constellationName: "Ursa Minor",
    constellation: {
      members: [
        [197, 146], // Allison
        [174, 205], // Evie
        [190, 271], // Heidi
        [230, 325], // Queena
      ],
      dummies: [
        [157, 290],
        [199, 356],
      ],
      director: [221, 98],
      lines: [
        [
          [221, 98],
          [197, 146],
        ],
        [
          [197, 146],
          [174, 205],
        ],
        [
          [174, 205],
          [190, 271],
        ],
        [
          [190, 271],
          [157, 290],
        ],
        [
          [190, 271],
          [230, 325],
        ],
        [
          [157, 290],
          [199, 356],
        ],
        [
          [230, 325],
          [199, 356],
        ],
      ],
    },
    members: [
      {
        photo: "/images/seasons/2026/landing/team/directors/allison-huang.jpg",
        name: "Allison Huang",
        role: "Director",
        year: "2nd Year",
        major: "Computer Science",
        funFact: "I prefer tea over coffee.",
      },
      {
        photo: "/images/seasons/2026/landing/team/directors/evie-ngo.png",
        name: "Evie Ngo",
        role: "Director",
        year: "3rd Year",
        major: "Business Information Management",
        funFact: "I've hosted a matcha pop-up I built by hand!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/heidi-tran.JPG",
        name: "Heidi Tran",
        role: "Committee",
        year: "4th Year",
        major: "Business Information Management",
        funFact:
          "I love SpongeBob and have been collecting SpongeBob trinkets since I was a kid!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/queena-liu.jpg",
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
    star: "/images/seasons/2026/landing/team/committees/orange.png",
    glow: "rgba(255,170,60,0.8)",
    pos: { x: 13, y: 74 },
    size: 110,
    fd: 4.5,
    fdelay: 0.8,
    description:
      "Managing budgets and financial planning to keep the event on track.",
    constellationName: "Apus",
    constellation: {
      members: [
        [136, 211], // Sahana
        [110, 156], // Gabrielle
        [184, 190], // Emily
      ],
      dummies: [],
      director: [352, 248],
      lines: [
        [
          [352, 248],
          [136, 211],
        ],
        [
          [136, 211],
          [110, 156],
        ],
        [
          [110, 156],
          [184, 190],
        ],
      ],
    },
    members: [
      {
        photo: "/images/seasons/2026/landing/team/directors/sahana-iyer.JPG",
        name: "Sahana Iyer",
        role: "Director",
        year: "3rd Year",
        major: "Business Administration & Criminology",
        funFact: "My favorite type of cheese is pepperjack!",
      },
      {
        photo:
          "/images/seasons/2026/landing/team/imported/gabrielle-landavora.jpg",
        name: "Gabrielle Neve Landavora",
        role: "Committee",
        year: "3rd Year",
        major: "Informatics & Health Informatics",
        funFact: "I currently have a collection of around 20 perfumes!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/emily-ono.jpeg",
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
    star: "/images/seasons/2026/landing/team/committees/pink.png",
    color: "rgba(255,140,200,1)",
    glow: "rgba(255,140,200,0.8)",
    pos: { x: 48, y: 82 },
    size: 145,
    fd: 3.6,
    fdelay: 0.3,
    description:
      "Spreading the word and building excitement around Design-a-thon.",
    constellationName: "Serpens",
    constellation: {
      members: [
        [83, 291], // Julia
        [250, 218], // Paolo
        [275, 167], // Vanessa
        [297, 123], // Audrey
      ],
      dummies: [
        [157, 228],
        [259, 127],
      ],
      director: [190, 229],
      lines: [
        [
          [83, 291],
          [157, 228],
        ],
        [
          [157, 228],
          [190, 229],
        ],
        [
          [190, 229],
          [250, 218],
        ],
        [
          [250, 218],
          [275, 162],
        ],
        [
          [275, 162],
          [297, 123],
        ],
        [
          [275, 162],
          [259, 127],
        ],
        [
          [297, 123],
          [259, 127],
        ],
      ],
    },
    members: [
      {
        photo: "/images/seasons/2026/landing/team/directors/julia-tjia.jpg",
        name: "Julia Tjia",
        role: "Director",
        year: "4th Year",
        major: "Computer Science & Innovation and Entrepreneurship",
        funFact:
          "I've been in an episode of Girl Meets World as a background actor!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/paolo-brinas.jpg",
        name: "Paolo Brinas",
        role: "Committee",
        year: "4th Year",
        major: "Business Economics",
        funFact: "I longboard dance!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/vanessa-chok.jpg",
        name: "Vanessa Chok",
        role: "Committee",
        year: "3rd Year",
        major: "Business Information Management",
        funFact:
          "I'm obsessed with collecting random paper scraps to put in my zines!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/audrey-zheng.jpg",
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
    star: "/images/seasons/2026/landing/team/committees/purple.png",
    glow: "rgba(180,80,255,0.8)",
    pos: { x: 87, y: 28 },
    size: 125,
    fd: 4.8,
    fdelay: 1.2,
    description:
      "Crafting the visual identity that brings the cosmic theme to life.",
    constellationName: "Corona Borealis",
    constellation: {
      members: [
        [298, 136], // Julianna
        [184, 314], // Candice
        [99, 191], // Sherry
      ],
      dummies: [
        [126, 288],
        [238, 306],
        [340, 206],
      ],
      director: [296, 286],
      lines: [
        [
          [99, 191],
          [126, 288],
        ],
        [
          [126, 288],
          [184, 314],
        ],
        [
          [184, 314],
          [238, 306],
        ],
        [
          [238, 306],
          [296, 286],
        ],
        [
          [296, 286],
          [340, 206],
        ],
        [
          [340, 206],
          [298, 136],
        ],
      ],
    },
    members: [
      {
        photo:
          "/images/seasons/2026/landing/team/directors/julianna-nacorda.jpg",
        name: "Julianna Nacorda",
        role: "Director",
        year: "3rd Year",
        major: "Software Engineering & Health Informatics",
        funFact:
          "I went camping, kayaking and hiking at Channel Islands National Park over the summer!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/candice-li.png",
        name: "Candice Li",
        role: "Committee",
        year: "2nd Year",
        major: "Art",
        funFact: "I am a smiski addict...",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/sherry-tram.jpg",
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
    star: "/images/seasons/2026/landing/team/committees/yellow.png",
    glow: "rgba(255,230,80,0.8)",
    pos: { x: 78, y: 76 },
    size: 130,
    fd: 5,
    fdelay: 1,
    description: "Securing sponsorships and building industry partnerships.",
    constellationName: "Cassiopeia",
    constellation: {
      members: [
        [113, 169], // Chloe
        [197, 139], // Bharathi
        [276, 233], // Tiffany
        [297, 307], // William
      ],
      dummies: [],
      director: [209, 219],
      lines: [
        [
          [113, 169],
          [197, 139],
        ],
        [
          [197, 139],
          [209, 219],
        ],
        [
          [209, 219],
          [276, 233],
        ],
        [
          [276, 233],
          [297, 307],
        ],
      ],
    },
    members: [
      {
        photo: "/images/seasons/2026/landing/team/directors/chloe-chun.jpg",
        name: "Chloe Chun",
        role: "Director",
        year: "2nd Year",
        major: "Business Economics & Informatics",
        funFact: "I have a fear of birds.",
      },
      {
        photo:
          "/images/seasons/2026/landing/team/imported/bharathi-kaliraj.png",
        name: "Bharathi Kaliraj",
        role: "Committee",
        year: "2nd Year",
        major: "Computer Science & Engineering",
        funFact: "I've moved 17 times!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/tiffany-ng.jpg",
        name: "Tiffany Ng",
        role: "Committee",
        year: "3rd Year",
        major: "Psychological Science",
        funFact: "I have a huge fear of birds!",
      },
      {
        photo: "/images/seasons/2026/landing/team/imported/william-vo.jpg",
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
