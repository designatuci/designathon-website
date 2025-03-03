import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingNavigation() {
  return (
    <div className="sticky top-0 h-0">
      <div className="py-3 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/seasons/2025/landing/designathon-logo.png"
            alt="Designathon logo"
            width={40}
            height={40}
          />
        </Link>
        <LandingNavigationMobile />
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
          className="hover:bg-transparent text-(--tan) hover:text-(--tan) size-fit !p-0"
        >
          <Menu className="size-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
