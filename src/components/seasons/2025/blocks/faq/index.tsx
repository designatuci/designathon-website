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
import { useRef } from "react";

interface FAQItem {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: <span>Why should I join?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>Who can attend?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>How do I sign up?</span>,
    answer: <span>:)</span>,
  },
  {
    question: (
      <span>
        I don&apos;t have prior knowledge in design. Can I participate?
      </span>
    ),
    answer: <span>:)</span>,
  },
  {
    question: <span>How much does it cost?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>When is the registration deadline?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>How do I prepare?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>How do teams work?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>What if I don&apos;t have a team?</span>,
    answer: <span>:)</span>,
  },
  {
    question: <span>Where do I submit my project?</span>,
    answer: <span>:)</span>,
  },
];

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
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-80 lg:max-w-[550px] 3xl:max-w-[600px]"
        >
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
      data-status="incomplete"
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
      <AccordionContent className="text-base sm:text-lg lg:text-xl xl:text-2xl">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export default FAQ;
