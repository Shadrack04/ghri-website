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
      <SheetContent className=" ">
        <div className=" flex flex-col pt-20 px-8 gap-4 overflow-y-auto ">
          <Link
            href="/"
            onClick={handleLinkClick}
            className=" text-[100%] font-bold"
          >
            Home
          </Link>

          <Link
            href="/"
            onClick={handleLinkClick}
            className=" text-[100%] font-bold"
          >
            About us
          </Link>

          <Accordion type="single" collapsible className="">
            <AccordionItem value="services" className="">
              <AccordionTrigger className=" py-0 flex-none font-bold text-[100%]">
                Services
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4 pt-2">
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

          <Accordion type="single" collapsible className="">
            <AccordionItem value="emergency">
              <AccordionTrigger className=" py-0 flex-none font-bold text-[100%]">
                Emergency
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4 pt-2">
                  <Link href="#" onClick={handleLinkClick}>
                    General Emergency
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Cholera
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Covid 19
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Ebola
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Chicken Pox
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Mpox
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="#"
            onClick={handleLinkClick}
            className=" text-[100%] font-bold"
          >
            Get Involve
          </Link>

          <Link
            href="#"
            onClick={handleLinkClick}
            className=" text-[100%] font-bold"
          >
            Telemed
          </Link>

          <Accordion type="single" collapsible className="">
            <AccordionItem value="more">
              <AccordionTrigger className=" py-0 flex-none font-bold text-[100%]">
                More
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pl-4 pt-2">
                  <Link href="#" onClick={handleLinkClick}>
                    Blog
                  </Link>
                  <Link href="#" onClick={handleLinkClick}>
                    Podcast
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
