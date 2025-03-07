import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavigationLink {
  name: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { name: "About", href: "#" },
  {
    name: "Past Projects",
    href: "#",
  },
];

export default function LandingNavigation() {
  return (
    <div className="sticky top-0 z-50 h-0 lg:mx-auto lg:max-w-7xl 3xl:max-w-[1920px]">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8 lg:pt-6">
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
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-(--tan) hover:text-(--tan)"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function LandingNavigationDesktop() {
  return (
    <div className="mx-auto hidden gap-8 lg:flex">
      {navigationLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-xl font-medium text-(--tan) hover:text-(--tan)"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
