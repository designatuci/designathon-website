"use client";

import { cn } from "@/lib/utils";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
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

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      if (cachedImages[index - 1]) {
        ctx.drawImage(cachedImages[index - 1], 0, 0, 1920, 2500);
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
      className="flex items-start justify-center overflow-hidden bg-(--blue)"
      ref={sectionRef}
    >
      <div
        className={cn(
          "relative flex w-full flex-grow items-center justify-center overflow-hidden mask-top",
        )}
      >
        <canvas
          className="h-full w-full object-cover object-bottom 3xl:!h-[2500px] 3xl:object-top"
          width={1920}
          height={2500}
          ref={canvasRef}
        />
        <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-2 px-4 pb-12 text-center">
          <div className="flex gap-1 text-lg font-bold text-(--blue) [&_a]:underline">
            {/* TODO: add URL */}
            <Link
              href="https://forms.gle/BNWnN8dSJR9kqwjC8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </Link>
            <span>·</span>
            {/* TODO: add URL */}
            <Link href="#undefined">Sponsor Us</Link>
          </div>
          <div>
            {socialItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block *:size-6">{item.icon}</span>
              </Link>
            ))}
          </div>
          <div className="flex font-bold text-(--blue)">
            <p>
              &copy; 2025 Design at UCI • Made with &#128149; by UCI Designathon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

interface SocialItem {
  icon: React.ReactNode;
  href: string;
}

const socialItems: SocialItem[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
      >
        <path
          d="M12.0833 0.166016H29.5833C36.25 0.166016 41.6667 5.58268 41.6667 12.2493V29.7493C41.6667 32.954 40.3936 36.0275 38.1275 38.2936C35.8615 40.5596 32.788 41.8327 29.5833 41.8327H12.0833C5.41667 41.8327 0 36.416 0 29.7493V12.2493C0 9.04465 1.27306 5.97121 3.53913 3.70514C5.80519 1.43908 8.87863 0.166016 12.0833 0.166016ZM11.6667 4.33268C9.67754 4.33268 7.76989 5.12286 6.36337 6.52938C4.95684 7.9359 4.16667 9.84356 4.16667 11.8327V30.166C4.16667 34.3118 7.52083 37.666 11.6667 37.666H30C31.9891 37.666 33.8968 36.8758 35.3033 35.4693C36.7098 34.0628 37.5 32.1551 37.5 30.166V11.8327C37.5 7.68685 34.1458 4.33268 30 4.33268H11.6667ZM31.7708 7.45768C32.4615 7.45768 33.1239 7.73205 33.6123 8.22042C34.1006 8.7088 34.375 9.37118 34.375 10.0618C34.375 10.7525 34.1006 11.4149 33.6123 11.9033C33.1239 12.3916 32.4615 12.666 31.7708 12.666C31.0802 12.666 30.4178 12.3916 29.9294 11.9033C29.441 11.4149 29.1667 10.7525 29.1667 10.0618C29.1667 9.37118 29.441 8.7088 29.9294 8.22042C30.4178 7.73205 31.0802 7.45768 31.7708 7.45768ZM20.8333 10.5827C23.596 10.5827 26.2455 11.6801 28.199 13.6337C30.1525 15.5872 31.25 18.2367 31.25 20.9993C31.25 23.762 30.1525 26.4115 28.199 28.365C26.2455 30.3185 23.596 31.416 20.8333 31.416C18.0707 31.416 15.4211 30.3185 13.4676 28.365C11.5141 26.4115 10.4167 23.762 10.4167 20.9993C10.4167 18.2367 11.5141 15.5872 13.4676 13.6337C15.4211 11.6801 18.0707 10.5827 20.8333 10.5827ZM20.8333 14.7493C19.1757 14.7493 17.586 15.4078 16.4139 16.5799C15.2418 17.752 14.5833 19.3417 14.5833 20.9993C14.5833 22.657 15.2418 24.2467 16.4139 25.4188C17.586 26.5909 19.1757 27.2493 20.8333 27.2493C22.4909 27.2493 24.0806 26.5909 25.2528 25.4188C26.4249 24.2467 27.0833 22.657 27.0833 20.9993C27.0833 19.3417 26.4249 17.752 25.2528 16.5799C24.0806 15.4078 22.4909 14.7493 20.8333 14.7493Z"
          fill="#354F99"
        />
      </svg>
    ),
    href: "https://www.instagram.com/ucidesignathon/",
  },
];
