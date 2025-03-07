"use client";
import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { Sponsor } from "@components/seasons/2025/blocks/sponsors";

type SkillsMarqueeProps = {
  reverse?: boolean;
  className?: string;
  sponsors: Sponsor[];
};

const SkillsMarquee = ({
  reverse = false,
  className,
  sponsors,
}: SkillsMarqueeProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full items-center overflow-x-hidden overflow-y-hidden",
        className,
      )}
    >
      <DOTImage
        src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741305137/train-tracks_bsxccr.png"
        alt="Train Tracks"
        width={2388}
        height={1668}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-[60%] left-0 flex -translate-y-full overflow-y-visible">
        <ul
          className={cn(
            "relative flex h-fit animate-marquee overflow-y-visible [--duration:15s] data-[ui=disabled]:[animation-play-state:paused] motion-reduce:animate-none",
            { "direction-reverse": reverse },
          )}
          //   data-ui={marqueePaused && "disabled"}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <li
              key={`${sponsor.id}-${index}`}
              className="group/cart relative flex w-[30vw] flex-col overflow-y-visible 2xl:max-w-[400px] 3xl:max-w-[450px]"
            >
              <DOTImage
                src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741305137/cart-back_bxbecl.png"
                alt="Cart Back"
                width={1100}
                height={281}
                sizes="(min-width: 0px) 30vw"
                className="relative w-full"
              />
              {sponsor.content && (
                <div
                  style={
                    {
                      "--item-rotation": `${sponsor.content.rotation}deg`,
                    } as React.CSSProperties
                  }
                  className={cn(
                    "absolute top-1/2 left-1/2 h-full w-1/2 -translate-x-1/2 translate-y-[-70%] transition-transform duration-300 ease-out-back",
                    "not-motion-reduce:group-hover/cart:translate-y-[-100%] not-motion-reduce:group-hover/cart:scale-110 not-motion-reduce:group-hover/cart:rotate-[var(--item-rotation)]",
                  )}
                >
                  <label
                    htmlFor={`sponsor-${sponsor.id}-${index}`}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center text-sm font-semibold opacity-0 group-hover/cart:opacity-100"
                  >
                    {sponsor.content.name}
                  </label>
                  <DOTImage
                    id={`sponsor-${sponsor.id}-${index}`}
                    src={sponsor.content.imageURL}
                    alt=""
                    width={512}
                    height={512}
                    sizes="(min-width: 0px) 30vw"
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              <DOTImage
                src="https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1741305138/cart-front_kbhw3p.png"
                alt="Cart Front"
                width={1100}
                height={519}
                sizes="(min-width: 0px) 30vw"
                className="relative w-full"
              />
            </li>
          ))}
        </ul>
      </div>
      {/* <button
        className="text-opacity-50 absolute right-0 bottom-4 text-2xl text-zinc-500"
        onClick={() => setMarqueePaused(!marqueePaused)}
      >
        {marqueePaused ? <Play /> : <Pause />}
      </button> */}
    </div>
  );
};

export default SkillsMarquee;
