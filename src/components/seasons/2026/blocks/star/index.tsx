"use client";

import Image from "next/image";

export default function Star() {
  return (
    <section id="star" className="flex justify-center md:py-16">
      <div className="flex w-full items-center justify-center">
        <Image
          src="/images/seasons/2026/landing/star/star.png"
          alt=""
          width={1113}
          height={671}
          className="h-auto w-full max-w-[300px] object-contain md:max-w-[1200px]"
        />
      </div>
    </section>
  );
}
