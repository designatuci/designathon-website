"use client";

import { cn } from "@/lib/utils";
import TriggerIcon from "@components/seasons/2025/blocks/faq/trigger-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

function FAQ() {
  return (
    <section
      id="faq"
      className="noise flex justify-center bg-(--blue) py-8 text-white"
    >
      <div className="container flex w-full flex-col gap-8">
        <h2 className="font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <AccordionItem
      value={`question-${index}`}
      className="border-none"
      ref={ref}
    >
      <AccordionTrigger
        className={cn(
          "cursor-pointer flex-row-reverse items-center justify-end text-base font-bold tracking-wide sm:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl [&[data-state=open]]:underline [&[data-state=open]>svg]:rotate-0",
          "not-motion-reduce:scale-95 not-motion-reduce:opacity-0 not-motion-reduce:transition-all not-motion-reduce:duration-500",
          {
            "not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              isInView,
          },
        )}
        customIcon={<TriggerIcon />}
      >
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="pl-10 text-base leading-loose text-zinc-200 sm:text-lg lg:text-xl xl:max-w-[1024px] xl:text-2xl">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FAQ;
interface FAQItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: <span>Why should I join?</span>,
    answer: (
      <span>
        Creating an aesthetically pleasing, functional product is not only what
        a designer does; it is to listen to what our world needs, empathize
        people&apos;s gain and pain points, and produce a solution that
        specifically targets what our world is lacking. We hope that this event
        can be a platform where you can practice your design thinking — a
        process of ideation, research, analysis, developing, and testing — to
        provide a better means to our world.
      </span>
    ),
  },
  {
    question: <span>Who can attend?</span>,
    answer: (
      <span>
        Any undergraduate OR graduate student within the United States, with an
        associated institutional (.edu) email is able to{" "}
        <Link
          href="https://forms.gle/BNWnN8dSJR9kqwjC8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          sign up
        </Link>{" "}
        and attend. If you do not qualify, you will not be allowed to
        participate in the event.
      </span>
    ),
  },
  {
    question: <span>How do I sign up?</span>,
    answer: (
      <span>
        Apply through our{" "}
        <Link
          href="https://forms.gle/BNWnN8dSJR9kqwjC8"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Participant Sign-up Form.
        </Link>
      </span>
    ),
  },
  {
    question: (
      <span>
        I don&apos;t have prior knowledge in design. Can I still participate?
      </span>
    ),
    answer: (
      <span>
        Of course! Design is all around us. We will provide opportunities and
        resources for beginners to get started, such as workshops, mentor office
        hours, and more.
      </span>
    ),
  },
  {
    question: <span>How much does it cost?</span>,
    answer: (
      <span>
        Beyond Our Horizons requires no cost to participate. All you need is a
        working device with Zoom, Discord, and an open mind.
      </span>
    ),
  },
  {
    question: <span>When is the registration deadline?</span>,
    answer: <span>April 9th, 2025 11:59 PM</span>,
  },
  {
    question: <span>How do I prepare?</span>,
    answer: (
      <span>
        During the event, we will be hosting workshops for anyone new to design
        thinking or the design process. We highly encourage getting the hang of
        Figma, Sketch, Adobe XD, or the prototyping tool of your choice. You are
        also free to look through our Design at UCI Resources page for extra
        information.
      </span>
    ),
  },
  {
    question: <span>How do teams work?</span>,
    answer: (
      <span>
        You have the option to (1) go solo, or (2) form a team of up to 4 people
        total. We will consider your final team members to be the ones indicated
        when submitting your project.
      </span>
    ),
  },
  {
    question: <span>Where is the event located?</span>,
    answer: (
      <>
        <span>
          Beyond Our Horizons will be mainly held in-person at the Department of
          Continuing Education (DCE). We can also accommodate online
          participants if necessary. More info will be coming soon, so be sure
          to check your email for updates!
        </span>
      </>
    ),
  },
  {
    question: <span>What if I don&apos;t have a team?</span>,
    answer: (
      <span>
        We will be hosting a team finding event in person during Check-Ins! You
        can also find a team on our Discord. Solo participants are also allowed.
      </span>
    ),
  },
  {
    question: <span>Where do I submit my project?</span>,
    answer: (
      <span>
        You will submit your final, working prototype to the Submission Form
        (opens during the event). Only ONE (1) person on your team should submit
        a form, which will be on behalf of all contributors.
      </span>
    ),
  },
];
