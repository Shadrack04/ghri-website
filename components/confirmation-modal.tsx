"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger> */}
      <DialogContent
        className=" relative sm:max-w-[425px] flex items-center justify-center flex-col py-14"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className=" underline underline-offset-8 decoration-primary text-2xl font-bold text-foreground">
            Congratulations
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="">
          <p className=" text-center">
            Your documents has been verified, you can now proceed to generating
            your doctor’s tag
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
