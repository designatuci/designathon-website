"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { Calendar, MapPin } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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

    for (let i = 1; i <= 120; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/${i}.webp`;

      loadedImages.push(img);

      img.onload = () => {
        numImagesLoaded++;

        if (numImagesLoaded === 120) {
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

  const currentIndex = useTransform(scrollYSpring, [0, 1], [3, 120]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

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
          <motion.span
            initial={{ rotate: 5 }}
            animate={{ rotate: [5, 10] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
              ease: "easeInOut",
            }}
            style={{ opacity: headerOpacity }}
            className="relative block h-[300px] w-[400px] sm:-top-8 sm:h-[400px] sm:w-[500px] md:-top-16 md:h-[500px] md:w-[800px] lg:left-12 lg:h-[600px] lg:w-[900px] xl:-top-24 xl:h-[700px] xl:w-[1000px] 3xl:-top-12 3xl:left-24"
          >
            {/* Motion reduce */}
            <DOTImage
              src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1740975343/header_tlucgg.gif"
              alt="Designathon 2025: Beyond Our Horizons"
              className="hidden object-contain not-motion-reduce:block"
              sizes="(min-width: 0px) 100vw; (min-width: 768px) 50vw, 33vw"
              priority
              fill
            />
            {/* Not motion reduce */}
            <DOTImage
              src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1740975343/header_tlucgg.jpg"
              alt="Designathon 2025: Beyond Our Horizons"
              className="object-contain not-motion-reduce:hidden"
              sizes="(min-width: 0px) 100vw; (min-width: 768px) 50vw, 33vw"
              priority
              fill
            />
            {/* <span className="absolute bottom-2 left-1/2 h-16 w-full -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:h-20 lg:bottom-12 lg:left-2/3 lg:w-64">
              <DOTImage
                src="https://res.cloudinary.com/ucidesignathon/image/upload/v1743636472/2025/landing-page/assets/hero/curve_text.png"
                alt="April 18 - 20, 2025"
                className="-rotate-12 object-contain lg:-rotate-6"
                fill
              />
            </span> */}
            {/* TODO: take this bandaid off */}
            <div className="absolute top-full left-1/2 flex w-fit translate-x-[-45%] -translate-y-1/2 -rotate-6 flex-col gap-2 rounded-md bg-(--tan)/80 p-4 font-cursive text-sm tracking-wider sm:translate-y-[-80%] lg:translate-y-[-150%] lg:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 shrink-0 text-(--pink)" />
                <p className="font-bold text-(--pink) sm:bottom-0">
                  April 18 - 20, 2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0 text-(--pink)" />
                <p className="font-bold whitespace-nowrap text-(--pink) sm:bottom-0">
                  Department of Continuing Education
                </p>
              </div>
            </div>
          </motion.span>
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
