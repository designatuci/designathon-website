"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { Button } from "@components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 50%"],
  });

  const [cachedImages, setCachedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    let numImagesLoaded = 0;

    for (let i = 1; i <= 60; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `/images/seasons/2025/landing/hero/video/${i}.webp`;

      loadedImages.push(img);

      img.onload = () => {
        numImagesLoaded++;

        if (numImagesLoaded === 60) {
          setCachedImages(loadedImages);
        }
      };
    }
  }, []);

  const renderFrame = useCallback(
    (index: number) => {
      if (!canvasRef.current) return;

      const ctx = canvasRef.current.getContext("2d");

      if (!ctx) return;

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (cachedImages[index - 1]) {
        ctx.drawImage(cachedImages[index - 1], 0, 0, 1920, 1800);
      }
    },
    [cachedImages],
  );

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 50,
  });

  const currentIndex = useTransform(scrollYSpring, [0, 1], [3, 60]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    renderFrame(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (!cachedImages.length) return;

    renderFrame(3);
  }, [cachedImages.length, renderFrame]);

  return (
    <section
      className="z-10 flex justify-center bg-(--sky) xl:bg-gradient-to-b xl:from-(--sky) xl:to-(--tan) 2xl:min-h-[1500px]"
      ref={sectionRef}
    >
      <div className="relative flex h-svh max-h-[800px] min-h-[640px] w-full justify-center overflow-hidden pt-14 font-primary sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1200px] xl:h-fit xl:max-h-none xl:min-h-[1200px] 3xl:min-h-[1600px]">
        <div
          className={cn(
            "absolute top-14 left-0 z-10 flex w-full flex-col items-center justify-center",
            "not-motion-reduce:translate-y-24 not-motion-reduce:scale-50 not-motion-reduce:opacity-0 not-motion-reduce:transition-all not-motion-reduce:duration-1000 not-motion-reduce:ease-out-quart",
            "3xl:left-1/2 3xl:max-w-[1920px] 3xl:-translate-x-1/2",
            {
              "not-motion-reduce:translate-y-0 not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
                cachedImages.length > 0,
            },
          )}
        >
          <span className="relative block h-[300px] w-[400px] sm:-top-8 sm:h-[400px] sm:w-[500px] md:-top-16 md:h-[500px] md:w-[800px] lg:left-12 lg:h-[600px] lg:w-[900px] xl:-top-24 xl:h-[700px] xl:w-[1000px] 3xl:-top-12 3xl:left-24">
            {/* Not Motion reduce */}
            <DOTImage
              src="/images/seasons/2025/landing/hero/header.gif"
              alt="Designathon 2025: Beyond Our Horizons"
              className="hidden object-contain not-motion-reduce:block"
              sizes="(min-width: 0px) 100vw"
              fill
            />
            {/*  Motion reduce */}
            <DOTImage
              src="/images/seasons/2025/landing/hero/header.gif"
              alt="Designathon 2025: Beyond Our Horizons"
              className="object-contain not-motion-reduce:hidden"
              sizes="(min-width: 0px) 100vw"
              fill
            />
            {/* TODO: take this bandaid off */}
            <div className="absolute top-full left-1/2 flex w-fit translate-x-[-45%] -translate-y-1/2 flex-col gap-2 rounded-md bg-(--tan)/80 px-4 py-4 font-cursive text-sm tracking-wider sm:translate-y-[-80%] sm:px-12 lg:translate-y-[-150%] lg:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 shrink-0 text-(--pink)" />
                <p className="font-bold text-(--pink) sm:bottom-0">
                  April 18 - 20, 2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0 text-(--pink)" />
                <p className="font-bold whitespace-nowrap text-(--pink) sm:bottom-0">
                  UC Irvine DCE
                </p>
              </div>
              <Button
                asChild
                className="rounded-xl bg-(--pink) px-6 py-5 font-sans text-lg font-bold text-white transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
              >
                <Link
                  href="https://forms.gle/BNWnN8dSJR9kqwjC8"
                  target="_blank"
                >
                  Apply Now!
                </Link>
              </Button>
            </div>
          </span>
        </div>
        <div
          className={cn(
            "relative mt-32 flex w-full flex-grow items-center justify-center overflow-hidden opacity-0 transition-all duration-1000 ease-out-quart mask-top xl:mt-16 2xl:mt-0 3xl:-mt-[5vw]",
            "not-motion-reduce:translate-y-24 not-motion-reduce:scale-105",
            {
              "opacity-100 not-motion-reduce:translate-y-0 not-motion-reduce:scale-100":
                cachedImages.length > 0,
            },
          )}
        >
          <canvas
            className="h-full w-full object-cover object-bottom"
            width={1920}
            height={1800}
            ref={canvasRef}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
