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
        endTime: "05:30 PM",
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
        title: "Brainstorming Workshop",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "An interactive workshop to help you hit the ground running. Learn key design principles and tools you'll use throughout the designathon.",
      },
      {
        time: "06:30 PM",
        endTime: "07:30 PM",
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
        time: "10:30 AM",
        endTime: "11:00 AM",
        title: "Opening Ceremony",
        location: "DCE Yosemite",
        zoom: false,
        description: "Kick off day 2!",
      },
      {
        time: "11:30 AM",
        endTime: "11:30 AM",
        title: "Hack Workshop",
        location: "Room 2030",
        zoom: false,
        description: "Collaborate with mentors from Hack@UCI!",
      },
      {
        time: "01:00 PM",
        endTime: "01:300 PM",
        title: "Lunch",
        location: "DCE Yosemite",
        zoom: false,
        description: "Take a break from designing and grab some fuel.",
      },
      {
        time: "01:30 PM",
        endTime: "02:00 PM",
        title: "Figma Workshop",
        location: "Room 2030",
        zoom: false,
        description: "Collaborate with mentors from Figma!",
      },
      {
        time: "03:00 PM",
        endTime: "04:00 PM",
        title: "Design@UCI Workshop",
        location: "Room 2030",
        zoom: false,
        description:
          "Collaborate with mentors from our very own Design@UCI club!",
      },
      {
        time: "05:00 PM",
        endTime: "05:30 PM",
        title: "Commit the Change Workshop",
        location: "Room 2030",
        zoom: false,
        description: "Collaborate with mentors from UCI's Commit the Change!",
      },
      {
        time: "06:00 PM",
        endTime: "06:30 PM",
        title: "Dinner",
        location: "DCE Yosemite",
        zoom: false,
        description: "Dinner provided for all in-person participants.",
      },
      {
        time: "07:30 PM",
        endTime: "07:30 PM",
        title: "Product@UCI Workshop",
        location: "Room 2030",
        zoom: false,
        description: "Collaborate with mentors from Product@UCI!",
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
        endTime: "10:00 AM",
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
        title: "Opening Ceremoney",
        location: "DCE Yosemite",
        zoom: false,
        description:
          "Celebrate your achievement and prepare to start pitching!",
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
        time: "06:30 PM",
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
