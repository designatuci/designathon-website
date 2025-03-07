"use client";

import DOTImage from "@components/common/dot-image";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="flex justify-center bg-(--sky) xl:bg-gradient-to-b xl:from-(--sky) xl:to-(--tan) 2xl:min-h-[1500px]">
      <div className="relative flex h-svh max-h-[800px] min-h-[640px] w-full justify-center overflow-hidden pt-14 font-primary sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1200px] xl:h-fit xl:max-h-none xl:min-h-[1200px] 3xl:min-h-[1600px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          className="absolute top-14 left-0 z-10 flex w-full items-center justify-center"
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
            className="relative inline-block h-[300px] w-[400px] overflow-hidden sm:-top-8 sm:h-[400px] sm:w-[500px] md:-top-16 md:h-[500px] md:w-[800px] lg:left-12 lg:h-[600px] lg:w-[900px] xl:-top-24 xl:h-[700px] xl:w-[1000px] 3xl:-top-12 3xl:left-24"
          >
            <DOTImage
              src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1740975343/header_tlucgg.gif"
              alt="Designathon 2025: Beyond Our Horizons"
              className="object-contain"
              sizes="(min-width: 0px) 100vw, (min-width: 768px) 50vw, 33vw"
              priority
              fill
            />
          </motion.span>
        </motion.div>
        <div className="relative mt-32 flex w-full flex-grow items-center justify-center overflow-hidden xl:mt-16 2xl:mt-0 3xl:-mt-16">
          <video
            className="h-full w-full object-cover object-bottom"
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0, 0, 0, 1.0) 0%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)",
            }}
            src="https://res.cloudinary.com/ucidesignathon/video/upload/f_auto,q_auto/v1740974663/ROLLERCOASTER2_outhyj.mp4"
            poster="https://res.cloudinary.com/ucidesignathon/video/upload/f_auto,q_auto,so_0/v1740974663/ROLLERCOASTER2_outhyj.jpg"
            preload="auto"
            autoPlay
            playsInline
            muted
          ></video>
          {/* TODO: add video scrolling */}
          {/* <canvas className="h-full w-full object-cover object-bottom" /> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
