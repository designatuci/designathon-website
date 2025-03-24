"use client";

import { cn } from "@/lib/utils";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const NUM_FRAMES = 26;

function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["20% end", "70% end"],
  });

  const [cachedImages, setCachedImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    let numImagesLoaded = 0;

    for (let i = 1; i <= NUM_FRAMES; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/2025/landing-page/assets/footer/${i}.webp`;

      loadedImages.push(img);

      img.onload = () => {
        numImagesLoaded++;

        if (numImagesLoaded === NUM_FRAMES) {
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

      ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (cachedImages[index - 1]) {
        ctx?.drawImage(cachedImages[index - 1], 0, 0, 1920, 2500);
      }
    },
    [cachedImages],
  );

  const scrollYSpring = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 50,
  });

  const currentIndex = useTransform(scrollYSpring, [0, 1], [13, NUM_FRAMES]);

  useMotionValueEvent(currentIndex, "change", (latest) => {
    renderFrame(Number(latest.toFixed()));
  });

  useEffect(() => {
    if (!cachedImages.length) return;

    renderFrame(13);
  }, [cachedImages.length, renderFrame]);

  return (
    <section
      className="flex justify-center overflow-hidden bg-(--sky) xl:bg-gradient-to-b xl:from-(--sky) xl:to-(--tan)"
      ref={sectionRef}
    >
      <div
        className={cn(
          "relative flex w-full flex-grow items-center justify-center overflow-hidden",
        )}
      >
        <canvas
          className="h-full w-full object-cover object-bottom"
          width={1920}
          height={2500}
          ref={canvasRef}
        />
      </div>
    </section>
  );
}

export default Footer;
