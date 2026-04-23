export interface ScheduleEvent {
  time: string;
  endTime: string;
  title: string;
  location: string;
  zoom: boolean;
  zoomURL?: string;
  description: string;
}

export interface ScheduleDay {
  date: string;
  label: string;
  events: ScheduleEvent[];
}

export const scheduleDays: ScheduleDay[] = [
  {
    date: "FRI",
    label: "Day 1",
    events: [
      {
        time: "05:00 PM",
        endTime: "06:00 PM",
        title: "Check-In",
        location: "DCE Courtyard",
        zoom: true,
        zoomURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description:
          "Please check in to confirm your attendance at DAUCI Designathon! If you are an in-person participant, check in at the DCE entrance. Please bring your government or student ID. You will be given a badge you must wear to each day of the event.",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Join us as we kick off the DAUCI Designathon! Meet your fellow participants, learn about the theme, and get ready to design!",
      },
      {
        time: "06:30 PM",
        endTime: "07:00 PM",
        title: "Workshop: Designing at Hackathon Speed",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Learn how to design effectively under hackathon constraints through rapid ideation, prioritization, and collaboration strategies to move from idea to execution fast. Presented by Hack@UCI.",
      },
      {
        time: "07:00 PM",
        endTime: "08:00 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Fuel up! Dinner will be provided for all in-person participants.",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description: "Wrap up your first day of designathon.",
      },
    ],
  },
  {
    date: "SAT",
    label: "Day 2",
    events: [
      {
        time: "09:00 AM",
        endTime: "10:30 AM",
        title: "Morning Check-In",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Check back in for day 2. Grab some food from Yosemite and start designing!",
      },
      {
        time: "10:00 AM",
        endTime: "11:00 AM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description: "Kick off day 2!",
      },
      {
        time: "12:00 PM",
        endTime: "1:00 PM",
        title: "Workshop: Ideation and Brainstorming",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "A guided session on brainstorming techniques to help teams generate, refine, and select strong solution ideas during the early stages of the design process. Presented by Commit the Change.",
      },
      {
        time: "01:30 PM",
        endTime: "02:00 PM",
        title: "Lunch",
        location: "DCE Courtyard",
        zoom: false,
        description: "Take a break from designing and grab some fuel.",
      },
      {
        time: "03:00 PM",
        endTime: "04:00 PM",
        title: "Workshop: From 0 to 1 - Figma Crash Course",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "A beginner-to-intermediate crash course covering essential Figma tools and workflows to help participants quickly start designing their solutions. Presented by Figma.",
      },
      {
        time: "05:00 PM",
        endTime: "64:00 PM",
        title: "Workshop: Hi-Fi to Prototyping",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Explore how to turn high-fidelity designs into interactive prototypes, with best practices for preparing polished, testable, and presentation-ready work. Presented by Design at UCI.",
      },
      {
        time: "05:00 PM",
        endTime: "06:00 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Wrap up a long day of hard work! Dinner provided for all in-person participants.",
      },
      {
        time: "07:00 PM",
        endTime: "08:00 PM",
        title: "Workshop: Design to Demo - Pitching and Storytelling",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Learn how to transform your solution into a compelling demo through effective storytelling, structured presentations, and strong product pitching techniques.",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description: "Wrap up the second day of designathon.",
      },
    ],
  },
  {
    date: "SUN",
    label: "Day 3",
    events: [
      {
        time: "08:00 AM",
        endTime: "08:00 AM",
        title: "Submission Deadline",
        location: "Devpost",
        zoom: false,
        description:
          "All designs must be submitted by this time. No late submissions accepted.",
      },
      {
        time: "02:00 PM",
        endTime: "02:30 PM",
        title: "Final Check-In",
        location: "DCE Courtyard",
        zoom: false,
        description: "Last day! Check in and prepare your final submissions.",
      },
      {
        time: "02:30 PM",
        endTime: "03:00 PM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Celebrate your achievement and prepare to start pitching!",
      },
      {
        time: "02:30 PM",
        endTime: "03:00 PM",
        title: "Lunch",
        location: "DCE Courtyard",
        zoom: false,
        description: "Grab a quick bite and get ready to present your work!",
      },
      {
        time: "03:00 PM",
        endTime: "05:30 PM",
        title: "Judging",
        location: "DCE 2020, DCE 2030, Devpost",
        zoom: false,
        description:
          "Judges review all submitted designs. Top teams will be selected to present. Meanwhile, hangout in Yosemite for a fun social!",
      },
      {
        time: "05:30 PM",
        endTime: "06:00 PM",
        title: "Top 10 Pitches",
        location: "DCE, Online",
        zoom: false,
        description:
          "Each top 10 team will give a 2-3 minute pitch of their product to a live panel of judges. Online teams will present to the judges on zoom at allotted times.",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description: "Dinner provided for all in-person participants.",
      },
      {
        time: "06:45 PM",
        endTime: "07:30 PM",
        title: "Speaker Panel",
        location: "DCE Yosemite, Online",
        zoom: false,
        description:
          "Join us for a speaker panel with industry professionals. Learn about innovation, storytelling through design, and navigating careers in tech",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony & Awards",
        location: "Main Hall",
        zoom: false,
        description:
          "Winners announced, awards presented. Celebrate an incredible weekend of design!",
      },
    ],
  },
];
