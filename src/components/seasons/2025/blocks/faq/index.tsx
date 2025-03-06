import TriggerIcon from "@components/seasons/2025/blocks/faq/trigger-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

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
    <section className="flex justify-center bg-(--blue) px-4 py-8 text-white">
      <div className="flex flex-col">
        <h2>FAQ</h2>
        <Accordion type="single" collapsible className="w-full max-w-80">
          {faqItems.map((item, index) => (
            <FAQItem key={index} item={item} index={index} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  return (
    <AccordionItem value={`question-${index}`} className="border-none">
      <AccordionTrigger
        className="flex-row-reverse items-center justify-end font-bold tracking-wide [&[data-state=open]]:underline [&[data-state=open]>svg]:rotate-0"
        customIcon={<TriggerIcon />}
      >
        {item.question}
      </AccordionTrigger>
      <AccordionContent>{item.answer}</AccordionContent>
    </AccordionItem>
  );
}

export default FAQ;
