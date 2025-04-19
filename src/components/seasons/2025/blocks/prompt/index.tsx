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
                What lies beyond what we know, not just personally, but in how
                we interact with the world?
              </PromptPoint>
              <PromptPoint>
                This year&apos;s theme challenges you to solve real, emerging
                product problems by designing for uncertainty: new users, edge
                cases, or systems that don&apos;t yet exist.
              </PromptPoint>
              <PromptPoint>
                Build tools, experiences, or interfaces that explore new
                modalities of interaction — whether it&apos;s through spatial
                computing, voice, haptics, AI, VR/AR, conversational interfaces,
                or environments still underserved by today&apos;s design norms.
              </PromptPoint>
              <PromptPoint>
                What would it take to create intuitive, bold design for the
                problems we haven&apos;t solved yet?
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
