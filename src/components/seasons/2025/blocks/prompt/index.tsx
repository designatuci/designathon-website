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
          <div className="space-y-4 rounded-lg bg-white/20 p-8 lg:p-16">
            <h3 className="text-xl font-bold lg:text-3xl xl:text-4xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <PromptPoint>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              modi nobis consectetur repudiandae accusantium praesentium rem
              doloribus odit, fugiat illum.
            </PromptPoint>
            <PromptPoint>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              doloribus at dolor quae delectus, repellat vero tenetur odit
              distinctio amet.
            </PromptPoint>
            <PromptPoint>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium doloremque quisquam ipsum laboriosam porro quasi?
            </PromptPoint>
            <PromptPoint>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              provident voluptatum molestias velit, modi deserunt!
            </PromptPoint>
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
