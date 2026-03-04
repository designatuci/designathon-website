"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex justify-center pt-28 pb-10 md:pt-40 md:pb-16">
      <div className="flex flex-col items-center">
        <Image
          src="/images/seasons/2026/landing/hero/ufo.png"
          alt=""
          width={200}
          height={200}
          className="h-auto w-full max-w-[200px] object-contain md:max-w-[280px]"
        />
        <Image
          src="/images/seasons/2026/landing/hero/1.png"
          alt=""
          width={400}
          height={200}
          className="-mt-6 h-auto w-full max-w-[200px] object-contain md:-mt-8 md:max-w-[280px]"
        />
        <Image
          src="/images/seasons/2026/landing/hero/2.png"
          alt=""
          width={400}
          height={200}
          className="-mt-25 h-auto w-full max-w-[120px] object-contain md:-mt-35 md:max-w-[160px]"
        />
      </div>
    </section>
  );
}
