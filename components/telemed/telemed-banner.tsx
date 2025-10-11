import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import TelemedCard from "./telemed-card";
import { icons } from "@/constants/icons";

export default function TelemedBanner() {
  return (
    <div className=" custom-padding relative">
      <div className=" flex flex-col md:flex-row gap-4 md:gap-0 items-center">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-6xl text-foreground leading-20">
            Keep your doctors <span className=" font-bold">in the loop</span>
          </h1>
          <p className=" text-xl md:w-[32rem]">
            Securely share your comprehensive medical history with your doctors
            for better communication and care
          </p>
          <div>
            <Button className=" py-6 px-4 text-xl rounded-2xl">
              Book an appointment
            </Button>
          </div>
        </div>
        <Image
          src={images.telemedImg1}
          priority
          alt="telemed banner image of three doctors"
          className=" md:w-[80%]"
        />
      </div>
      <div className=" lg:w-[70%] mx-auto md:mt-8 lg:-mt-10 flex flex-col md:flex-row items-center">
        <TelemedCard
          icon={icons.ambulanceIcon}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" md:-mr-2"
          iconClassName=" bg-primary"
        />

        <TelemedCard
          icon={icons.pillIcon}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" bg-primary text-background py-12 px-10 z-10 card-shadow"
          iconClassName=" bg-background"
        />

        <TelemedCard
          icon={icons.worldCareIconRed}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" md:-ml-2"
          iconClassName=" bg-background"
        />
      </div>
      <Image
        src={icons.telemedEllipse}
        alt=""
        className=" absolute bottom-0 -left-16 md:left-16 size-28"
      />
    </div>
  );
}
