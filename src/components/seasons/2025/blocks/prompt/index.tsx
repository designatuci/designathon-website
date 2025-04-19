function Prompt() {
  return (
    <section
      id="prompt"
      className="noise flex flex-col items-center gap-4 bg-(--blue)"
    >
      <div className="container text-white">
        <h2 className="mb-4 font-title text-3xl leading-tight font-bold sm:text-left sm:text-4xl lg:mb-8 lg:text-5xl xl:text-6xl">
          Prompt
        </h2>
        <div className="space-y-2 lg:space-y-4">
          <div className="space-y-6 rounded-lg bg-white/20 p-8 lg:p-16">
            <h3 className="text-xl font-bold lg:text-3xl xl:text-4xl">
              Reimagining How We Interface with the World.
            </h3>
            <hr className="w-20 border-white/50" />
            <div className="space-y-4">
              <PromptPoint>
                We&apos;re living in a time where new technologies—AI, AR/VR,
                spatial computing—are rapidly reshaping how we live, work, and
                connect. But many of these systems are still hard to use,
                confusing, or not designed for everyone.
              </PromptPoint>
              <PromptPoint>
                This year&apos;s challenge is to design for the unknown: create
                a solution that helps people navigate uncertainty. That could
                mean supporting new users, edge cases, or entirely new systems.
              </PromptPoint>
              <PromptPoint>
                Start by choosing a space where tech is evolving or difficult to
                use—emergency response, elderly care, extreme environments, or
                unfamiliar digital tools. Then, identify a real user
                problem—confusion, inaccessibility, complexity—and design an
                intuitive, bold solution using any medium: AI agents, voice,
                gesture, haptics, AR, or something new.
              </PromptPoint>
              <PromptPoint>
                Your goal is to make the future less overwhelming and more
                human. Design for what doesn&apos;t exist yet.
              </PromptPoint>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prompt;

function PromptPoint({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[400px] font-medium lg:max-w-[800px] lg:text-lg">
      {children}
    </p>
  );
}
