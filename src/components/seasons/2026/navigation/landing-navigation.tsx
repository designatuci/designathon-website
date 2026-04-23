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
  { name: "Itinerary", scrollTo: "schedule" },
  { name: "FAQ", scrollTo: "faq" },
  { name: "Prizes", scrollTo: "prizes" },
  { name: "Partners", scrollTo: "partners" },
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
            "text-white lg:bg-black/30 lg:backdrop-blur-sm": backgroundVisible,
          },
        )}
      >
        <Link href="/">
          <Image
            src="/images/seasons/2026/landing/designathon-logo.png"
            alt="Designathon logo"
            width={40}
            height={40}
            priority
          />
        </Link>
        <div>
          <LandingNavigationMobile />
          <LandingNavigationDesktop />
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
          className="size-fit !p-0 text-white hover:bg-transparent hover:text-white lg:hidden"
        >
          <Menu className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent data-theme="2025" className="w-full border-0 bg-black">
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
                className="text-xl font-medium text-white hover:bg-transparent hover:text-white"
              >
                {link.name}
              </Button>
            ))}
            <Button
              asChild
              className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-black transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
            >
              <Link
                href="https://ucidesignathon26.devpost.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="z-50 rounded bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-200"
              >
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

function LandingNavigationDesktop() {
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
          className="h-fit text-xl font-medium text-white transition-colors duration-300 ease-in-out"
        >
          {link.name}
        </button>
      ))}
      <Button
        className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-black transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
        asChild
      >
        <Link
          href="https://ucidesignathon26.devpost.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 rounded bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-200"
        >
          Devpost
        </Link>
      </Button>
    </div>
  );
}
