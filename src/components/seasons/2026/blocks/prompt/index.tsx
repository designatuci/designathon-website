"use client";

export default function Prompt() {
  return (
    <section
      id="prompt"
      className="flex flex-col items-center justify-center gap-6 px-6 py-8"
    >
      <div className="relative w-full max-w-[290px] overflow-hidden rounded-[80px] p-6 md:max-w-7xl md:p-10">
        <div
          className="absolute inset-0 rounded-[80px]"
          style={{
            background:
              "linear-gradient(rgba(141,196,212,0.6) 30%, rgba(92,139,153,0.6) 59%, rgba(23,60,71,0.6) 100%)",
            mixBlendMode: "color-dodge",
          }}
        />
        <div className="relative z-10">
          <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-8xl xl:text-[7rem]">
            Prompt
          </h1>
          <p className="mt-4 px-4 pb-10 text-left text-sm text-white md:px-10 md:pb-16 md:text-2xl">
            A digital cosmos for the undiscovered and the forgotten. <br />
            <br />
            Like matter scattered across a nebula, valuable aspects of everyday
            life become forgotten and unrecognized. <br />
            <br />
            In a world where both objects and memories can slip into the void,
            this challenge asks you to bridge the cosmic gap between lost and
            found. Create a solution that not only helps people recover what’s
            missing, but also reveals what they didn’t realize was gone -
            transforming forgotten pieces into constellations of meaning.
          </p>
        </div>
      </div>
    </section>
  );
}
