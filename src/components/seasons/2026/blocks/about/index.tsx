import Image from "next/image";

function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center px-6 py-16"
    >
      <h2 className="py-48 text-center [font-family:var(--font-luxurious-script)] text-6xl font-bold text-white drop-shadow-lg [text-shadow:0_0_10px_rgba(255,255,255,0.5)] md:py-12 md:text-7xl">
        About
      </h2>
      <div className="absolute top-1/2 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-[60px] md:px-[104px]">
        <p className="text-center text-sm font-bold text-white italic md:text-lg">
          We hope that this experience can help you acquire and grow both your
          soft and hard skills in empathizing with your users, defining a set of
          goals and needs, developing your product, and improving your
          confidence and creativity as a human-centric designer.
        </p>
      </div>
      {/* Circles */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 md:h-[26rem] md:w-[26rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 md:h-[31rem] md:w-[31rem]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 md:h-[36rem] md:w-[36rem]" />

      {/* Planets */}
      <Image
        src="/images/seasons/2026/landing/about/navy.png"
        alt=""
        width={325}
        height={373}
        className="pointer-events-none absolute top-1/2 left-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 object-contain md:h-[22rem] md:w-[22rem]"
      />

      <Image
        src="/images/seasons/2026/landing/about/rose.png"
        alt=""
        width={70}
        height={70}
        className="pointer-events-none absolute top-[32%] left-[70%] h-[2rem] w-[2rem] -translate-x-1/2 -translate-y-1/2 object-contain md:top-[12%] md:left-[57%] md:h-[3rem] md:w-[3rem]"
      />

      <Image
        src="/images/seasons/2026/landing/about/purple.png"
        alt=""
        width={100}
        height={100}
        className="pointer-events-none absolute top-[42%] left-[20%] h-[3rem] w-[3rem] -translate-x-1/2 -translate-y-1/2 object-contain md:top-[29%] md:left-[37%] md:h-[4rem] md:w-[4rem]"
      />

      <Image
        src="/images/seasons/2026/landing/about/blue.png"
        alt=""
        width={100}
        height={100}
        className="pointer-events-none absolute top-[60%] left-[11%] h-[3rem] w-[3rem] -translate-x-1/2 -translate-y-1/2 object-contain md:top-[70%] md:left-[33%] md:h-[4rem] md:w-[4rem]"
      />

      <Image
        src="/images/seasons/2026/landing/about/magneta.png"
        alt=""
        width={100}
        height={100}
        className="pointer-events-none absolute top-[65%] left-[80%] h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 object-contain md:top-[80%] md:left-[63%] md:h-[8rem] md:w-[8rem]"
      />
    </section>
  );
}

export default About;
