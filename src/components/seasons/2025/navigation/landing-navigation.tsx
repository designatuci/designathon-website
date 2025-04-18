"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "@components/ui/button";
import { Menu, XIcon } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface NavigationLink {
  name: string;
  scrollTo: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "About", scrollTo: "about" },
  {
    name: "Past Events",
    scrollTo: "past-events",
  },
  { name: "FAQ", scrollTo: "faq" },
  { name: "Prizes", scrollTo: "prizes" },
  { name: "Partners", scrollTo: "sponsors" },
  { name: "Team", scrollTo: "team" },
  { name: "Rules", scrollTo: "rules" },
];

export default function LandingNavigation() {
  const { scrollY } = useScroll();

  const [backgroundVisible, setBackgroundVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !backgroundVisible) {
      setBackgroundVisible(true);
    } else if (latest === 0 && backgroundVisible) {
      setBackgroundVisible(false);
    }
  });

  return (
    <div className="sticky top-2 z-50 container mx-auto h-0 lg:top-4">
      <div
        className={cn(
          "flex items-center justify-between py-2 lg:rounded-xl lg:px-4 lg:transition-colors lg:duration-200 lg:ease-in-out",
          {
            "lg:bg-white/50 lg:backdrop-blur-sm": backgroundVisible,
          },
        )}
      >
        <Link href="/">
          <Image
            src="/images/seasons/2025/landing/designathon-logo.png"
            alt="Designathon logo"
            width={40}
            height={40}
          />
        </Link>
        <div>
          <LandingNavigationMobile />
          <LandingNavigationDesktop backgroundVisible={backgroundVisible} />
        </div>
      </div>
    </div>
  );
}

function LandingNavigationMobile() {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="size-fit !p-0 text-(--tan) hover:bg-transparent hover:text-(--tan) lg:hidden"
        >
          <Menu className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent data-theme="2025" className="w-full border-0 bg-(--blue)">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
        <div className="grid h-full place-items-center">
          <div className="flex flex-col items-center gap-4">
            {navigationLinks.map((link) => (
              <Button
                variant="ghost"
                key={link.name}
                onClick={() => {
                  const element = document.getElementById(link.scrollTo);

                  if (element && closeButtonRef.current) {
                    element.scrollIntoView({ behavior: "smooth" });
                    closeButtonRef.current.click();
                  }
                }}
                className="text-xl font-medium text-(--tan) hover:bg-transparent hover:text-(--tan)"
              >
                {link.name}
              </Button>
            ))}
            <Button
              asChild
              className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-white transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
            >
              <Link href="https://ucidesignathon.devpost.com/" target="_blank">
                Devpost
              </Link>
            </Button>
          </div>
        </div>
        <SheetClose
          ref={closeButtonRef}
          className="absolute top-4 right-4 rounded-xs ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary"
        >
          <XIcon className="size-8 text-zinc-100" />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

function LandingNavigationDesktop({
  backgroundVisible,
}: {
  backgroundVisible: boolean;
}) {
  return (
    <div className="mx-auto hidden items-center gap-8 lg:flex">
      {navigationLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => {
            const element = document.getElementById(link.scrollTo);

            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className={cn(
            "h-fit text-xl font-medium text-(--tan) transition-colors duration-300 ease-in-out hover:text-(--tan)",
            { "text-(--blue) hover:text-(--blue)": backgroundVisible },
          )}
        >
          {link.name}
        </button>
      ))}
      <Button
        className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-white transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
        asChild
      >
        <Link
          href="https://ucidesignathon.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devpost
        </Link>
      </Button>
    </div>
  );
}
