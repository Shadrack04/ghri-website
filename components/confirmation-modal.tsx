"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons } from "@/constants/icons";
import { images } from "@/constants/image";

import Image from "next/image";
import { useState } from "react";

export function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger> */}
      <DialogContent
        className="  sm:max-w-[425px] py-0 overflow-hidden "
        showCloseButton={false}
      >
        <div className=" relative flex items-center justify-center gap-4 flex-col py-18">
          <DialogHeader>
            <DialogTitle className=" underline underline-offset-8 decoration-primary text-2xl font-bold text-foreground">
              Congratulations
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="">
            <p className=" text-center">
              Your documents has been verified, you can now proceed to
              generating your doctor’s tag
            </p>
          </div>
          <Image
            src={icons.confirmationVector2}
            alt=""
            className=" absolute top-12 right-[10%]"
          />
          <Image
            src={icons.confirmationVector3}
            alt=""
            className=" absolute bottom-12 left-[10%]"
          />
          <Image
            src={icons.confirmationEllipse}
            alt=""
            className=" absolute bottom-0 -right-5 size-24"
          />
          <Image
            src={images.dottedGrid}
            alt=""
            className=" absolute -bottom-5 -right-5"
          />
          <Image
            src={images.dottedGrid}
            alt=""
            className=" absolute -top-5 -left-5"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
