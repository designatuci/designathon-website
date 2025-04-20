export type ItineraryItem = TimeMarker | Event;

export type TimeMarker = {
  type: "time-mark";
  time: string;
  title: string;
  note?: string;
};

export type Event = {
  type: "event";
  content: {
    title: string;
    location: string;
    timeStart: string;
    timeEnd: string;
  };
  description: React.ReactNode;
  extras?: Partial<{
    workshop: boolean;
    zoomURL: string;
  }>;
};

export const april18: ItineraryItem[] = [
  {
    type: "time-mark",
    time: "3:30 PM",
    title: "Check-In Starts",
  },
  {
    type: "event",
    content: {
      title: "Check-In",
      location: "DCE Courtyard (In-Person)",
      timeStart: "3:30 PM",
      timeEnd: "5:00 PM",
    },
    description: (
      <>
        <p>Please check in to confirm your attendance at DAUCI Designathon!</p>
        <p>
          If you are an <strong>in-person participant</strong>, check in at the
          DCE entrance. Please bring your government or student ID. You will be
          given a badge you must wear to each day of the event.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Opening Ceremony and Keynote Speaker + Panel",
      location: "DCE, Yosemite ABC (In-Person) + Zoom (Online)",
      timeStart: "4:30 PM",
      timeEnd: "5:30 PM",
    },
    description: (
      <>
        <p>
          Join us for the Opening Ceremony and official kickoff of the 2025
          DAUCI Designathon and hear our opening keynote from Robyn Young, the
          Founder of Young & Co. Following this, we will have a keynote speaker
          panel made up of Alex Park (UX Design Manager at Riot Games), Tyler
          Vickers (Senior TPM at Amazon), and Miles Seiden (Founder of Miles
          Seiden Creative).
        </p>
        <Host>
          Led by the DAUCI Designathon Directors Jasmine Wu and Laila Wafaie.
        </Host>
      </>
    ),
    extras: {
      zoomURL: "https://uci.zoom.us/s/92513036552",
    },
  },
  {
    type: "event",
    content: {
      title: "Dinner & Team Formation",
      location: "DCE Courtyard (In-Person)",
      timeStart: "5:30 PM",
      timeEnd: "6:30 PM",
    },
    description: (
      <>
        <p>
          Enjoy Panda Express (chow mein and fried rice) for dinner alongside
          some pocky and chips. Mingle, network, and meet fellow designers over
          dinner! Start forming teams and brainstorming your project ideas.
        </p>
      </>
    ),
  },
  {
    type: "time-mark",
    time: "6:30 PM",
    title: "Designing Begins",
  },
  {
    type: "event",
    content: {
      title: "Workshop: Basics of Figma & Prototyping with Commit the Change",
      location: "Yosemite ABC (In-Person) + Zoom (Online)",
      timeStart: "7:00 PM",
      timeEnd: "7:30 PM",
    },
    description: (
      <>
        <p>
          Learn about how to set up basic frames with a guide on the core tools
          and best practices when using Figma. We&apos;ll be going over how to
          organize your Figma workspace, useful plugins, and simple prototyping
          tips to get any beginner designer a head start on Figma&apos;s
          software.
        </p>
        <Host>Hosted by Commit the Change</Host>
      </>
    ),
    extras: {
      workshop: true,
      zoomURL: "https://uci.zoom.us/s/96116679159",
    },
  },
  {
    type: "time-mark",
    time: "7:30 PM",
    title: "Venue Closes",
  },
];

export const april19: ItineraryItem[] = [
  {
    type: "time-mark",
    time: "8:00 AM",
    title: "Check-In Starts",
  },
  {
    type: "event",
    content: {
      title: "Check-In & Breakfast",
      location: "DCE Courtyard (In-Person)",
      timeStart: "8:00 AM",
      timeEnd: "9:30 AM",
    },
    description: (
      <>
        <p>
          <strong>In person:</strong> Check in and grab a light breakfast of
          muffins and bagels to kick off your morning before a focused day of
          designing! Remember to bring your Badges.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Hiking Social",
      location: "Aldrich Park (In-Person)",
      timeStart: "10:00 AM",
      timeEnd: "11:00 AM",
    },
    description: (
      <>
        <p>
          Start your day with a hike around a beautiful nature scene in Aldrich
          Park!
        </p>
        <Host>Led by Director Jerry Nguyen</Host>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Workshop: Notion for Building Design Portfolios",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "11:00 AM",
      timeEnd: "12:00 PM",
    },
    description: (
      <>
        <p>
          Join us for a hands-on workshop designed to help you turn your design
          work into a compelling, professional story.
        </p>
        <Host>Hosted by Ella Chung, Notion Campus Ambassador</Host>
      </>
    ),
    extras: {
      workshop: true,
      zoomURL: "https://uci.zoom.us/s/94897604899",
    },
  },
  {
    type: "event",
    content: {
      title: "Lunch (with Notion)",
      location: "DCE Courtyard (In-Person)",
      timeStart: "12:00 PM",
      timeEnd: "1:30 PM",
    },
    description: (
      <>
        <p>
          Enjoy Mendicino sandwiches and In-N-Out Burgers with Notion and take a
          well-deserved design break! Mingle with other designers or continue
          working on your project with the team.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title:
        "Workshop: AI by Design: An Approach to Strategic, Human-Centered AI",
      location: "DCE,  3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "1:30 PM",
      timeEnd: "2:15 PM",
    },
    description: (
      <>
        <p>
          As designers and product owners, we have a choice—when, where, how,
          and at what cost AI shows up in our work and lives. This &quot;AI By
          Design&quot; session explores foundational AI concepts and enhanced
          design processes to create AI initiatives that truly add value—and
          keep you in the conversation.
        </p>
        <Host>Led by Erin from FourbyNorth</Host>
      </>
    ),
    extras: {
      workshop: true,
      zoomURL: "https://uci.zoom.us/s/92750957032",
    },
  },
  {
    type: "event",
    content: {
      title: "Workshop: UX Principles",
      location: "DCE,  3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "2:15 PM",
      timeEnd: "3:15 PM",
    },
    description: (
      <>
        <p>
          Whether you&apos;re new to design or looking to refresh your
          fundamentals, this interactive session will walk you through the core
          principles of user experience design. Learn how to create intuitive,
          accessible, and user-centered products by applying key concepts like
          usability, hierarchy, feedback, and consistency.
        </p>
      </>
    ),
    extras: {
      workshop: true,
      zoomURL: "https://uci.zoom.us/j/3018853834",
    },
  },
  {
    type: "event",
    content: {
      title: "Workshop: Project Pitching with TEDxUCIrvine",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "3:15 PM",
      timeEnd: "4:15 PM",
    },
    description: (
      <>
        <p>
          You&apos;ve built something great—now it&apos;s time to tell the
          story. In this workshop, learn how to pitch your project with clarity,
          confidence, and impact. We&apos;ll cover how to frame your problem,
          highlight user insights, and communicate your solution in a way that
          resonates with judges and stakeholders.
        </p>
        <Host>Led by Tristan Rallos from TEDxUCIrvine</Host>
      </>
    ),
    extras: {
      workshop: true,
      zoomURL: "https://uci.zoom.us/j/3018853834",
    },
  },
  {
    type: "event",
    content: {
      title: "Mentoring Hours",
      location: "DCE + Zoom (Online)",
      timeStart: "4:30 PM",
      timeEnd: "5:30 PM",
    },
    description: (
      <>
        <p>
          Need a second opinion? Want help refining your idea or feedback on
          your prototype? During this hour, mentors from a range of design
          backgrounds will be available to chat.
        </p>
      </>
    ),
    extras: {
      zoomURL: "https://uci.zoom.us/s/95918899660",
    },
  },
  {
    type: "event",
    content: {
      title: "Dinner",
      location: "DCE Courtyard (In-Person)",
      timeStart: "6:00 PM",
      timeEnd: "7:30 PM",
    },
    description: (
      <>
        <p>
          Fuel up for the last stretch with a hearty pizza dinner and take a
          breather with your team.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Karaoke",
      location: "DCE, Yosemite ABC (In-Person)",
      timeStart: "7:30 PM",
      timeEnd: "8:30 PM",
    },
    description: (
      <>
        <p>Wind down with karaoke with 2020s bangers!</p>
        <Host>
          Hosted by Designathon Directors Jerry Nguyen and John Daniel
          Norombaba.
        </Host>
      </>
    ),
  },
  {
    type: "time-mark",
    time: "8:30 PM",
    title: "Venue Closes",
  },
];

export const april20: ItineraryItem[] = [
  {
    type: "time-mark",
    time: "8:00 AM",
    title: "Check-In Starts",
  },
  {
    type: "event",
    content: {
      title: "Check-In and Breakfast",
      location: "ISEB Patio (In-Person)",
      timeStart: "8:00 AM",
      timeEnd: "9:00 AM",
    },
    description: (
      <>
        <p>
          <strong>In-person:</strong> Einstein Bagels will be served at the ISEB
          patio. Please have your badges ready to check off!
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Final Submissions Due on Devpost",
      location: "Devpost (Online)",
      timeStart: "9:00 AM",
      timeEnd: "9:00 AM",
    },
    description: (
      <>
        <p>
          All teams must submit their project to Devpost by this time and follow
          the instructions. This includes submitting the Figma Prototype,
          indication of online/in-person, writeup, team member names, and
          optionally a video submission. We will not accept any submissions
          after this time.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Judging Fair",
      location: "ISEB Patio (In-Person) + Devpost (Online)",
      timeStart: "10:00 AM",
      timeEnd: "12:00 PM",
    },
    description: (
      <>
        <p>
          <strong>In-person:</strong> Present your work science-fair style at
          assigned tables to our judges from IBM, Anduril, and Google.
        </p>
        <p>
          <strong>Online:</strong> Judges will review your Devpost
          asynchronously and evaluate based on rubric criteria. Make sure you
          submit a high quality video beforehand!
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Top 10 Finalist Pitches on Stage",
      location: "Antrepreneur Center (In-Person) + Zoom (Online)",
      timeStart: "2:30 PM",
      timeEnd: "3:30 PM",
    },
    description: (
      <>
        <p>
          Each top 10 team will give a 2-3 minute pitch of their product to a
          live panel of judges. Online teams will present to the judges on zoom
          at allotted times.
        </p>
      </>
    ),
  },
  {
    type: "event",
    content: {
      title: "Closing Ceremony & Winners Announced",
      location: "Antrepreneur Center (In-Person) + Zoom (Online)",
      timeStart: "4:00 PM",
      timeEnd: "5:30 PM",
    },
    description: (
      <>
        <p>Prizes will be announced for all participants.</p>
        <Host>Led by Directors Jasmine Wu and Laila Wafaie</Host>
      </>
    ),
    extras: {
      zoomURL: "https://uci.zoom.us/s/98256770100",
    },
  },
  {
    type: "time-mark",
    time: "3:30 PM",
    title: "Design-a-thon Ends",
    note: "we will ship prizes to online winners through an online form",
  },
];

function Host({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-(--peach)">{children}</span>;
}
