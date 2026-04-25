"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import Link from "next/link";

function PromptCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full rounded-2xl border border-l-[3px] border-[rgba(88,63,247,0.75)] border-l-[rgba(26,64,231,0.45)] bg-[rgba(12,8,32,0.88)] p-6 backdrop-blur-[12px] lg:p-10",
        className,
      )}
    >
      <div className="absolute top-0 right-8 left-8 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(111,252,226,0.82),rgba(167,139,250,0.5),transparent)]" />
      {children}
    </div>
  );
}

export default function Prompt() {
  return (
    <section
      id="prompt"
      className="relative overflow-hidden pt-1 pb-0 sm:pt-2 xl:py-4"
    >
      <style>{`
        @keyframes floatPromptBuddy {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50%       { transform: translateY(-18px) rotate(2deg); }
        }
        .prompt-floating-bob {
          animation: floatPromptBuddy 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .prompt-floating-bob {
            animation: none;
          }
        }
      `}</style>
      <div className="pointer-events-none relative z-0 select-none">
        <div className="relative container mx-auto">
          <div className="mt-20 max-w-[1000px] -translate-x-[35%] sm:mt-12 sm:-translate-x-[35%] md:mt-32 md:-translate-x-[32%] lg:max-w-[760px] lg:-translate-x-[31%] xl:max-w-[800px] xl:-translate-x-[39%] 2xl:mt-0 2xl:-translate-x-[56%] 3xl:-translate-x-[46%]">
            <DOTImage
              src="/images/seasons/2026/landing/prompt/saturn.webp"
              alt=""
              width={1000}
              height={1000}
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="absolute top-0 right-[4%] mt-20 hidden max-w-[95px] translate-y-[220px] sm:right-[6%] sm:mt-12 sm:max-w-[110px] sm:translate-y-[250px] md:right-[8%] md:mt-32 md:block md:max-w-[120px] md:translate-y-[320px] lg:right-[10%] lg:max-w-[140px] lg:translate-y-[360px] xl:right-[12%] xl:max-w-[160px] xl:translate-y-[420px] 2xl:right-[14%] 2xl:mt-0 2xl:translate-y-[420px] 3xl:right-[14%] 3xl:translate-y-[460px]">
            <div className="prompt-floating-bob">
              <DOTImage
                src="/images/seasons/2026/landing/prompt/floating.png"
                alt=""
                width={565}
                height={565}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto -mt-[350px] md:-mt-[650px] lg:-mt-[775px] 2xl:-mt-[800px]">
        <div className="flex flex-col justify-center gap-8 pt-[350px] md:pt-[650px] lg:pt-[775px] 2xl:pt-[800px]">
          <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal md:text-8xl xl:text-[7rem]">
            Prompts
          </h1>
          <p className="mt-1 text-sm tracking-wide text-white/40 md:mt-2 md:text-base">
            Click on track titles to see the judging rubrics.
          </p>
          <div className="grid gap-12 lg:grid-cols-2">
            <PromptCard>
              <h2 className="mb-4 text-center [font-family:var(--font-luxurious-script)] text-5xl font-bold font-normal text-white sm:mb-8 md:text-6xl">
                General Track
              </h2>
              <h3 className="mb-2 [font-family:var(--font-inria-sans)] text-2xl font-bold text-teal-200 underline hover:text-purple-400 lg:text-3xl">
                <Link
                  href="https://docs.google.com/document/d/1SII6ROtsOYz5-IwK792cB8LspOzqxtCY_FYzCRiwPSU/edit?tab=t.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-85"
                >
                  Chaos into Clarity
                </Link>
              </h3>
              <p className="text-sm text-white sm:text-sm lg:text-base xl:text-lg">
                Notability empowers people to capture ideas, organize thoughts,
                and express creativity — whether through notes, sketches, or
                multimedia. In a world full of information, ideas, and
                distractions, finding clarity can be a challenge. Thoughts come
                in fragments, inspiration arrives all at once, and meaning can
                easily get lost in the noise. From classrooms to creative
                spaces, Notability helps{" "}
                <strong>
                  turn scattered thoughts into something clear and
                  meaningful.{" "}
                </strong>
                <br />
                <br />
                Inspired by Google Gemini, we reimagine how technology and
                design can work together to organize ideas, spark creativity,
                and bring clarity to complexity. While Google gives us access to
                endless information, tools like Gemini help bring it together
                into clarity. This track invites participants of all backgrounds
                to explore{" "}
                <strong>
                  how design can help transform chaos into clarity
                </strong>{" "}
                — shaping experiences that make sense of the overwhelming, the
                messy, and the undefined. <br />
                <br />
                Rather than focusing on perfect solutions, this track emphasizes
                exploration, process, and perspective. How can design create
                moments of understanding? How can it guide someone from
                confusion to confidence, from noise to meaning? Whether
                you&apos;re an artist, engineer, writer, or just someone with an
                idea, this track is about{" "}
                <strong>making design approachable and meaningful.</strong>
                <br />
                <br />
                <span className="text-red-500">*</span> All participants of this
                track <strong>must use</strong> Notability and Gemini as tools
                to ideate.
              </p>
            </PromptCard>
            <PromptCard>
              <h2 className="mb-4 text-center [font-family:var(--font-luxurious-script)] text-5xl font-bold font-normal text-white sm:mb-8 md:text-6xl">
                Professional Track
              </h2>
              <h3 className="mb-2 [font-family:var(--font-inria-sans)] text-2xl font-bold text-teal-200 underline hover:text-purple-400 lg:text-3xl">
                <Link
                  href="https://docs.google.com/document/d/1TSBmhWT85qSURjU2ZNt1lvYL6Je6I0B_VagHZOkevcc/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-85"
                >
                  Constellations of Possibility
                </Link>
              </h3>
              <p className="text-sm text-white sm:text-sm lg:text-base xl:text-lg">
                EAT Studio helps brands shape bold identities and meaningful
                design experiences, working with companies like Amazon, Netflix,
                Adidas, Red Bull, Activision, Warner Bros., NBCUniversal,
                Samsung, and Twitch. <br />
                <br />
                Some of the most meaningful ideas begin as fragments — an early
                concept, a bold vision, or a new way of seeing the world. This
                track explores{" "}
                <strong>how design can bring those ideas to life</strong> while
                staying rooted in real communities and cultural experiences.{" "}
                <br />
                <br />
                Inspired by Irvine staples, Menya Hanabi and Auntea Jenny,
                brands rooted in flavor, culture, and community, participants
                will design products, identities, or experiences that not only
                feel compelling as brands, but also{" "}
                <strong>
                  resonate deeply with the people they serve.
                </strong>{" "}
                Like a memorable meal or a go-to neighborhood spot, the
                strongest brands create connection, evoke emotion, and become
                part of everyday rituals.
                <br />
                <br />
                Consider how design can translate culture, memory, and
                experience into something tangible. Whether it&apos;s designing
                community-driven experiences or launching a concept that bridges
                culture, memory, and identity through thoughtful design,
                participants are{" "}
                <strong>
                  encouraged to turn creative sparks into constellations of
                  possibility.
                </strong>{" "}
              </p>
            </PromptCard>
          </div>
        </div>
      </div>
    </section>
  );
}
