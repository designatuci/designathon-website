"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@components/ui/button";
import { Menu, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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
  { name: "Sponsors", scrollTo: "sponsors" },
];

export default function LandingNavigation() {
  return (
    <div className="sticky top-0 z-50 container mx-auto h-0">
      <div className="flex items-center justify-between py-3 lg:pt-6">
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
          className="size-fit !p-0 text-(--tan) hover:bg-transparent hover:text-(--tan) lg:hidden"
        >
          <Menu className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent data-theme="2025" className="w-full border-0 bg-(--blue)">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SheetDescription className="sr-only">Navigation Menu</SheetDescription>
        <div className="grid h-full place-items-center">
          {/* TODO: remove debug class  */}
          <div className="__debug flex flex-col items-center gap-4">
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
            {/* TODO: add url */}
            <Button
              asChild
              className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-white transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
            >
              <Link href="#undefined">Apply Now!</Link>
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
    <div className="mx-auto hidden gap-8 lg:flex">
      {navigationLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => {
            const element = document.getElementById(link.scrollTo);

            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-xl font-medium text-(--tan) hover:text-(--tan)"
        >
          {link.name}
        </button>
      ))}
      {/* TODO: add url */}
      <Button
        className="rounded-xl bg-(--pink) px-6 py-5 text-lg font-bold text-white transition-transform duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink)"
        asChild
      >
        <Link href="#undefined">Apply Now!</Link>
      </Button>
    </div>
  );
}
