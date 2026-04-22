"use client";

import { cn } from "@/lib/utils";
import TriggerIcon from "@components/seasons/2026/blocks/faq/trigger-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { useInView } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "Why should I join?",
    answer:
      "Creating an aesthetically pleasing, functional product is not only what a designer does; it is to listen to what our world needs, empathize people's gain and pain points, and produce a solution that specifically targets what our world is lacking. We hope that this event can be a platform where you can practice your design thinking — a process of ideation, research, analysis, developing, and testing — to provide a better means to our world.",
  },
  {
    question: "Who can attend?",
    answer:
      "Any undergraduate OR graduate student within the United States, with an associated institutional (.edu) email is able to sign up and attend. If you do not qualify, you will not be allowed to participate in the event.",
  },
  {
    question: "How do I sign up?",
    answer: (
      <span>
        Apply through our{" "}
        <Link
          href="https://ucidesignathon.com/apply"
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
    question:
      "Can team participation be split (i.e. some participants in-person, some online)?",
    answer:
      "No, all team members must be either in-person or online. We will not be able to accommodate split team participation, so please make sure all team members are available to participate in-person or online. Please note that there will be no differences in judging between in-person and online participants.",
  },
  {
    question:
      "I don't have prior knowledge in design. Can I still participate?",
    answer:
      "Of course! Design is all around us. We will provide opportunities and resources for beginners to get started, such as workshops, mentor office hours, and more.",
  },
  {
    question: "How much does it cost?",
    answer:
      "  Lost and Found requires no cost to participate. All you need is a working device with Zoom, Discord, and an open mind.",
  },
  {
    question: "When is the registration deadline?",
    answer: "April 10th, 2025 11:59 PM PST",
  },
  {
    question: "How do I prepare?",
    answer:
      "During the event, we will be hosting workshops for anyone new to design thinking or the design process. We highly encourage getting the hang of Figma, Sketch, Adobe XD, or the prototyping tool of your choice. You are also free to look through our Design at UCI Resources page for extra information.",
  },
  {
    question: "How do teams work?",
    answer:
      "You have the option to (1) go solo, or (2) form a team of up to 4 people total. We will consider your final team members to be the ones indicated when submitting your project.",
  },
  {
    question: "What if I don't have a team?",
    answer:
      "We will be hosting a team finding event in person during Check-Ins! You can also find a team on our Discord. Solo participants are also allowed.",
  },
  {
    question: "Where is the event located?",
    answer:
      "Lost and Found will be mainly held in-person at the Division of Continuing Education (DCE). We can also accommodate online participants if necessary. More info will be coming soon, so be sure to check your email for updates!",
  },
  {
    question: "Where do I submit my project?",
    answer:
      "You will submit your final, working prototype to the Devpost (opens during the event). Only ONE (1) person on your team should submit a form, which will be on behalf of all contributors.",
  },
];

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
          "cursor-pointer flex-row-reverse items-center justify-end [font-family:var(--font-inria-sans)] font-bold tracking-wide text-zinc-200 sm:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl [&[data-state=open]]:drop-shadow-[0_0_8px_rgba(255,255,255,1.0)] [&[data-state=open]>svg]:rotate-90",
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
      <AccordionContent className="pb-4 pl-10">
        <div
          style={{
            padding: "1rem 1.25rem",
            borderRadius: "0.75rem",
            background: "rgba(12, 8, 32, 0.88)",
            border: "1px solid rgba(88, 63, 247, 0.75)",
            backdropFilter: "blur(14px)",
            borderLeft: "3px solid rgba(26, 64, 231, 0.45)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glare streak */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "2rem",
              right: "2rem",
              height: "2px",
              borderRadius: "999px",
              background:
                "linear-gradient(90deg, transparent, rgba(111, 252, 226, 0.82), rgba(167,139,250,0.5), transparent)",
            }}
          />
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.6",
              margin: 0,
            }}
            className="text-base sm:text-base lg:text-lg xl:text-xl"
          >
            {item.answer}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="flex justify-center px-4 py-4">
      <div className="container flex w-full flex-col">
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Faq
        </h1>
        <Accordion type="multiple" className="mt-8 w-full">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}
