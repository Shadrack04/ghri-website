import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function TelemedStep2() {
  return (
    <div>
      <div className=" flex flex-col lg:flex-row items-center gap-12 lg:gap-0 md:justify-between">
        <div className=" flex flex-col gap-6">
          <div className=" flex items-center gap-4">
            <div className=" size-8 flex items-center justify-center text-xl font-bold rounded-full bg-primary text-background">
              2
            </div>
            <h3 className=" text-4xl text-foreground leading-12 font-medium w-[22rem] ">
              Find the doctor that resonates with you
            </h3>
          </div>
          <div className=" flex flex-col gap-6">
            <p className=" text-xl md:w-[30rem]">
              Good Health is mental, physical and social wellbeing, not just the
              absence of diseases. It includes strong connection and quick
              access to support
            </p>
            <div>
              <Button className=" py-6 px-4 text-xl rounded-2xl">
                Search doctor
              </Button>
            </div>
          </div>
        </div>
        <Image
          src={images.aboutHelp}
          alt=""
          className=" md:w-[80%] lg::w-[50%]"
        />
      </div>
    </div>
  );
}
