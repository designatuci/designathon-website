"use client";

import Card from "@components/seasons/2026/blocks/tracks/card";

export default function Tracks() {
  return (
    <section id="tracks" className="mb-50 flex flex-col items-center md:py-16">
      <div className="relative w-full text-center">
        <h1 className="my-0 py-0 [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Tracks
        </h1>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
