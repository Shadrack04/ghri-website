import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import TelemedStep2 from "./telemed-step-2";

export default function HowItWork() {
  return (
    <div className=" custom-padding relative py-16 flex flex-col gap-10 lg:gap-30 overflow-hidden">
      <div className=" w-full flex flex-col items-center justify-center gap-4 mb-10 lg:mb-22">
        <h2 className=" text-4xl text-foreground font-medium">How it Works!</h2>
        <p className=" text-xl text-center text-foreground md:w-[36rem]">
          Discover, book and experience personified healthcare effortlessly with
          our user-friendly Doctor Appointment Website
        </p>
      </div>
      <Image
        src={images.bgEllipse}
        alt=""
        className=" absolute -right-25 top-0 object-cover"
      />
      <div className=" flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0 md:justify-between">
        <Image
          src={images.telemedImg2}
          alt=""
          className=" md:w-[80%] lg:w-[50%]"
        />
        <div className=" flex flex-col gap-6">
          <div className=" flex items-center gap-4">
            <div className=" size-8 flex items-center justify-center text-xl font-bold rounded-full bg-primary text-background">
              1
            </div>
            <h3 className=" text-4xl text-foreground leading-12 font-medium w-[22rem] ">
              Find the doctor that resonates with you
            </h3>
          </div>
          <div className=" flex flex-col gap-6">
            <p className=" text-xl md:w-[40rem] lg:w-[30rem]">
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
      </div>
      <TelemedStep2 />
    </div>
  );
}
