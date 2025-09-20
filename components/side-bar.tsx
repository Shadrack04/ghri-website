"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function SideBar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className=" md:hidden">
        <Button variant="outline">
          <Menu className=" size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className=" flex flex-col items-center gap-2">
          <Link href="/" onClick={handleLinkClick}>
            Home
          </Link>

          <Link href="/" onClick={handleLinkClick}>
            About us
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="services">
              <AccordionTrigger>
                Services <ChevronDown />
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4">
                  <Link href="#" onClick={handleLinkClick}>
                    Projects
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Our Services
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter>
          <Button type="button">Contact us</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
