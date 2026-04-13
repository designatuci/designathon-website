"use client";
import { Field, Input } from "@components/seasons/2026/apply/form-fields";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./css/mailing.css";

export default function MailingList() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  const message = submitted ? "signal received!" : "psst...transmit your email";

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    let interval: ReturnType<typeof setInterval> | undefined;

    setTypedText("");

    const delay = setTimeout(
      () => {
        interval = setInterval(() => {
          index += 1;
          setTypedText(message.slice(0, index));

          if (index >= message.length && interval) {
            clearInterval(interval);
          }
        }, 50);
      },
      submitted ? 0 : 350,
    );

    return () => {
      clearTimeout(delay);
      if (interval) clearInterval(interval);
    };
  }, [isInView, message, submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const f = new FormData(form);
    const payload = f.get("email");

    if (!payload) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: payload }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Submission failed (${response.status})`);
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="mailing"
      ref={ref}
      className="px-4 pt-4 pb-16 md:pb-24 xl:pt-12"
    >
      <div className="container mx-auto flex w-full flex-col py-8 lg:py-0">
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Mailing List
        </h1>
      </div>

      <div className="relative mx-auto max-w-2xl py-48 pt-64">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-left-48 lg:translate-x-0 lg:-translate-y-1/2">
          <div className="relative">
            <Image
              src={
                submitted
                  ? "/images/seasons/2026/landing/mailing/alien-happy.png"
                  : "/images/seasons/2026/landing/mailing/alien-begging.png"
              }
              alt="alien mascot"
              draggable={false}
              width={180}
              height={180}
              className="alien-float pointer-events-none select-none"
            />
            <motion.div
              className="comic-bubble"
              initial={{ opacity: 0, scale: 0.75, y: 12, rotate: -8 }}
              animate={
                isInView ? { opacity: 1, scale: 1, y: 0, rotate: -4 } : {}
              }
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 16,
              }}
            >
              <span>{typedText}</span>
            </motion.div>
          </div>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <Field
            id="email"
            label={
              <span className="[font-family:var(--font-inria-sans)]">
                Sign up for notifications!
              </span>
            }
            required
          >
            <div className="flex max-w-2xl items-stretch gap-4 rounded-2xl">
              <div className="min-w-0 flex-1 text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] [&_input]:h-12 [&_input]:border-0 [&_input]:focus:ring-2 [&_input]:focus:ring-purple-500/30 [&_input]:focus:ring-inset">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group relative h-12 overflow-hidden rounded-lg border border-purple-500/30 bg-white/5 px-6 [font-family:var(--font-inria-sans)] text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] disabled:pointer-events-none disabled:opacity-60"
              >
                {submitted
                  ? "Submitted!"
                  : isSubmitting
                    ? "Submitting..."
                    : "Notify Me"}
              </button>
            </div>
          </Field>
        </form>
      </div>
    </section>
  );
}
