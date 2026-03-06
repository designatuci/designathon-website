export type EventType = "logistics" | "ceremony" | "workshop" | "food" | "design";

export interface ScheduleEvent {
  time: string;
  endTime: string;
  title: string;
  location: string;
  zoom: boolean;
  zoomURL?: string;
  description: string;
  type: EventType;
}

export interface ScheduleDay {
  date: string;
  label: string;
  events: ScheduleEvent[];
}

export const eventTypeStyles: Record<EventType, { color: string; bg: string; border: string }> = {
  logistics: { color: "#6b90ff", bg: "rgba(56,189,248,0.12)", border: "rgba(56,189,248,0.3)" },
  ceremony: { color: "#a182ff", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.3)" },
  workshop: { color: "#34d399", bg: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.3)" },
  food: { color: "#24fbf7", bg: "rgba(36, 251, 237, 0.12)", border: "rgba(251,191,36,0.3)" },
  design: { color: "#ff9eff", bg: "rgba(233, 114, 244, 0.12)", border: "rgba(244,114,182,0.3)" },
};

export const scheduleDays: ScheduleDay[] = [
  {
    date: "4/24",
    label: "Day 1",
    events: [
      {
        time: "05:00 PM",
        endTime: "05:30 PM",
        title: "Check-In",
        location: "DCE Courtyard",
        zoom: true,
        zoomURL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        description:
          "Please check in to confirm your attendance at DAUCI Designathon! If you are an in-person participant, check in at the DCE entrance. Please bring your government or student ID. You will be given a badge you must wear to each day of the event.",
        type: "logistics",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: true,
        description:
          "Join us as we kick off the DAUCI Designathon! Meet your fellow participants, learn about the theme, and get ready to design!",
        type: "ceremony",
      },
      {
        time: "06:30 PM",
        endTime: "07:00 PM",
        title: "Brainstorming Workshop",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "An interactive workshop to help you hit the ground running. Learn key design principles and tools you'll use throughout the designathon.",
        type: "workshop",
      },
      {
        time: "06:30 PM",
        endTime: "07:30 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description: "Fuel up! Dinner will be provided for all in-person participants.",
        type: "food",
      },
      {
        time: "07:30 PM",
        endTime: "08:00 PM",
        title: "Design Work Time",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Ready, set go! Design your best work.",
        type: "design",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Wrap up your first day of designathon.",
        type: "ceremony",
      },
    ],
  },
  {
    date: "4/25",
    label: "Day 2",
    events: [
      {
        time: "09:00 AM",
        endTime: "10:30 AM",
        title: "Morning Check-In",
        location: "DCE Courtyard",
        zoom: false,
        description: "Check back in for day 2. Grab some food from Yosemite and start designing!",
        type: "logistics",
      },
      {
        time: "10:30 AM",
        endTime: "11:00 AM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description: "Kick off day 2!",
        type: "ceremony",
      },
      {
        time: "11:30 AM",
        endTime: "11:30 AM",
        title: "Hack Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from Hack@UCI!",
        type: "workshop",
      },
      {
        time: "01:00 PM",
        endTime: "01:300 PM",
        title: "Lunch",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Take a break from designing and grab some fuel.",
        type: "food",
      },
      {
        time: "01:30 PM",
        endTime: "02:00 PM",
        title: "Figma Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from Figma!",
        type: "workshop",
      },
      {
        time: "03:00 PM",
        endTime: "04:00 PM",
        title: "Design@UCI Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from our very own Design@UCI club!",
        type: "workshop",
      },
      {
        time: "05:00 PM",
        endTime: "05:30 PM",
        title: "Commit the Change Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from UCI's Commit the Change!",
        type: "workshop",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Dinner",
        location: "DCE Yosemite",
        zoom: false,
        description: "Dinner provided for all in-person participants.",
        type: "food",
      },
      {
        time: "07:30 PM",
        endTime: "07:30 PM",
        title: "Product@UCI Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from Product@UCI!",
        type: "workshop",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Wrap up the second day of designathon.",
        type: "ceremony",
      },
    ],
  },
  {
    date: "4/26",
    label: "Day 3",
    events: [
      {
        time: "08:00 AM",
        endTime: "",
        title: "Submission Deadline",
        location: "Devpost",
        zoom: false,
        description:
          "All designs must be submitted by this time. No late submissions accepted.",
        type: "ceremony",
      },
      {
        
        time: "02:00 PM",
        endTime: "02:30 PM",
        title: "Final Check-In",
        location: "DCE Courtyard",
        zoom: false,
        description: "Last day! Check in and prepare your final submissions.",
        type: "logistics",
      },
      {
        time: "02:30 PM",
        endTime: "03:00 PM",
        title: "Opening Ceremoney",
        location: "DCE Yosemite",
        zoom: true,
        description:
          "Celebrate your achievement and prepare to start pitching!",
        type: "ceremony",
      },
      {
        time: "03:00 PM",
        endTime: "05:30 PM",
        title: "Judging",
        location: "DCE 2020, DCE 2030, Devpost",
        zoom: false,
        description:
          "Judges review all submitted designs. Top teams will be selected to present. Meanwhile, hangout in Yosemite for a fun social!",
        type: "workshop",
      },
      {
        time: "05:30 PM",
        endTime: "06:00 PM",
        title: "Top 10 Pitches",
        location: "DCE, Online",
        zoom: true,
        description:
          "Each top 10 team will give a 2-3 minute pitch of their product to a live panel of judges. Online teams will present to the judges on zoom at allotted times.",
        type: "ceremony",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Dinner",
        location: "DCE Courtyard",
        zoom: false,
        description:
          "Dinner provided for all in-person participants.",
        type: "food",
      },
      {
        time: "06:30 PM",
        endTime: "07:30 PM",
        title: "Speaker Panel",
        location: "DCE Yosemite, Online",
        zoom: true,
        description:
          "Join us for a speaker panel with industry professionals. Learn about innovation, storytelling through design, and navigating careers in tech",
        type: "logistics",
      },
      {
        time: "08:30 PM",
        endTime: "09:00 PM",
        title: "Closing Ceremony & Awards",
        location: "Main Hall",
        zoom: true,
        description:
          "Winners announced, awards presented. Celebrate an incredible weekend of design!",
        type: "ceremony",
      },
    ],
  },
];