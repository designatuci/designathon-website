function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center px-6 py-16"
    >
      <h2 className="text-center text-6xl font-bold text-white md:text-7xl py-48 md:py-12 [font-family:var(--font-luxurious-script)] drop-shadow-lg [text-shadow:0_0_10px_rgba(255,255,255,0.5)]">
          About
      </h2>
      <div className="absolute left-1/2 top-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-15 md:px-26 z-10">
        <p className="text-center text-sm font-bold italic text-white md:text-lg">
          We hope that this experience can help you acquire and grow both your
          soft and hard skills in empathizing with your users, defining a set
          of goals and needs, developing your product, and improving your
          confidence and creativity as a human-centric designer.
        </p>
      </div>
      {/* Below text */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[12rem] w-[12rem] md:h-[26rem] md:w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[17rem] w-[17rem] md:h-[31rem] md:w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[21rem] w-[21rem] md:h-[36rem] md:w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
    </section>
  );
}

export default About;
