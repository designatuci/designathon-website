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
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Please check in to confirm your attendance at DAUCI Designathon! If you are an in-person participant, check in at the DCE entrance. Please bring your government or student ID. You will be given a badge you must wear to each day of the event.",
      },
      {
        time: "06:00 PM",
        endTime: "07:00 PM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Join us as we kick off the DAUCI Designathon! Meet your fellow participants, learn about the theme, and get ready to design!",
      },
      {
        time: "07:00 PM",
        endTime: "08:00 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Fuel up! Dinner will be provided for all in-person participants. Tigawok and Panda Express!",
      },
      {
        time: "07:30 PM",
        endTime: "08:00 PM",
        title: "Workshop: Designing at Hackathon Speed [Hack @ UCI]",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Learn how to design effectively under hackathon constraints through rapid ideation, prioritization, and collaboration strategies to move from idea to execution fast. Presented by Hack@UCI.",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Session",
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
        time: "10:00 AM",
        endTime: "10:30 AM",
        title: "Check-In",
        location: "DCE Courtyard",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Check back in for day 2. Make sure you bring your badges!",
      },
      {
        time: "10:30 AM",
        endTime: "11:00 AM",
        title: "Opening Session",
        location: "DCE Yosemite",
        zoom: false,
        description: "Kick off day 2!",
      },
      {
        time: "11:00 AM",
        endTime: "12:00 PM",
        title: "Brunch",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Welcome back! Take a break from designing and grab some fuel. Today's menu: muffins, croissants, and more!",
      },
      {
        time: "12:00 PM",
        endTime: "1:00 PM",
        title: "Workshop: Ideation and Brainstorming [Commit the Change]",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "A guided session on brainstorming techniques to help teams generate, refine, and select strong solution ideas during the early stages of the design process. Presented by Commit the Change.",
      },
      {
        time: "03:00 PM",
        endTime: "04:00 PM",
        title: "Workshop: From 0 → 1 Figma Crash Course [Figma]",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "A beginner-to-intermediate crash course covering essential Figma tools and workflows to help participants quickly start designing their solutions. Presented by Figma.",
      },
      {
        time: "05:00 PM",
        endTime: "06:00 PM",
        title: "Workshop: Hi-fidelity to Prototype [Design @ UCI]",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Explore how to turn high-fidelity designs into interactive prototypes, with best practices for preparing polished, testable, and presentation-ready work. Presented by Design at UCI.",
      },
      {
        time: "06:00 PM",
        endTime: "07:00 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Wrap up a long day of hard work! Raising Cane's dinner provided for all in-person participants.",
      },
      {
        time: "07:00 PM",
        endTime: "08:00 PM",
        title:
          "Workshop: Design to Demo: Pitching & Storytelling [Product @ UCI]",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Learn how to transform your solution into a compelling demo through effective storytelling, structured presentations, and strong product pitching techniques. Presented by Product at UCI.",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Session",
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
        endTime: "8:00 AM",
        title: "Submission Deadline",
        location: "Devpost",
        zoom: false,
        description:
          "All designs must be submitted by this time. No late submissions accepted.",
      },
      {
        time: "02:00 PM",
        endTime: "03:00 PM",
        title: "Check-In",
        location: "DCE Courtyard",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description: "Last day! Check in and prepare your final submissions.",
      },
      {
        time: "02:30 PM",
        endTime: "03:00 PM",
        title: "Opening Session",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Celebrate your achievement and prepare to start pitching!",
      },
      {
        time: "03:00 PM",
        endTime: "05:30 PM",
        title: "Round 1 Judging",
        location: "DCE 2030, DCE 2040",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "All participants will have 10 minutes to present to their assigned judge(s). Please arrive a few minutes early with your full team and check in at the proctor table outside the room, or in the Zoom call if attending online.",
      },
      {
        time: "05:50 PM",
        endTime: "08:00 PM",
        title: "Round 2 Judging",
        location: "DCE 2030, DCE 2040",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Top teams will be selected to present their full case study and prototype demonstration during a 10-minute session. Please arrive a few minutes early with your full team and check in with the proctors.",
      },
      {
        time: "06:00 PM",
        endTime: "06:45 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Dinner provided for all in-person participants. Olive Garden: Build your own pasta bowl!",
      },
      {
        time: "06:45 PM",
        endTime: "08:00 PM",
        title: "Speaker Panel",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Join us for a speaker panel with industry professionals. Learn about innovation, storytelling through design, and navigating careers in tech.",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony & Awards",
        location: "DCE Yosemite",
        zoom: true,
        zoomURL: "https://uci.zoom.us/j/91795525081",
        description:
          "Winners announced, awards presented. Celebrate an incredible weekend of design!",
      },
    ],
  },
];
