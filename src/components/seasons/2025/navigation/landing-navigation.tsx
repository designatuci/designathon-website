import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
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
    <div className="sticky top-0 z-50 mx-auto h-0 max-w-1920">
      <div className="flex items-center justify-between px-4 py-3">
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4"></div>
      </SheetContent>
    </Sheet>
  );
}

function LandingNavigationDesktop() {
  return (
    <div className="hidden gap-8 lg:flex">
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
