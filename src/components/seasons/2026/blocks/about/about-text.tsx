"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type ChallengeListItemDesktopProps = {
  children: string;
};

const ChallengeListItemDesktop = ({
  children,
}: ChallengeListItemDesktopProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["0% 170%", "0% 100%"],
  });

  const revealProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const springRevealProgress = useSpring(revealProgress, {
    stiffness: 250,
    damping: 40,
  });

  const backgroundSize = useMotionTemplate`${springRevealProgress}% 100%`;

  return (
    <div className="relative" ref={rootRef}>
      <motion.span
        style={{ backgroundSize: backgroundSize }}
        className="inline w-fit bg-gradient-to-r from-(--blue) to-(--blue) bg-clip-text bg-no-repeat pb-1 text-[hsl(0_0%_100%/0)] motion-reduce:!bg-[length:100%_100%]"
      >
        {children}
      </motion.span>
    </div>
  );
};

export default ChallengeListItemDesktop;
