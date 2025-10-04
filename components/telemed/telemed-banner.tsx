import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import TelemedCard from "./telemed-card";
import { icons } from "@/constants/icons";

export default function TelemedBanner() {
  return (
    <div>
      <div className=" flex flex-col md:flex-row items-center">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-6xl text-foreground leading-20">
            Keep your doctors <span className=" font-bold">in the loop</span>
          </h1>
          <p className=" text-xl w-[32rem]">
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
          alt="telemed banner image of three doctors"
          className=" md:w-[80%]"
        />
      </div>
      <div className=" w-[70%] mx-auto -mt-10 flex items-center">
        <TelemedCard
          icon={icons.ambulanceIcon}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" -mr-2"
        />

        <TelemedCard
          icon={icons.ambulanceIcon}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" bg-primary text-background py-12 px-10 z-10 card-shadow"
        />

        <TelemedCard
          icon={icons.ambulanceIcon}
          title="Emergency Care"
          description="Must be the priority for any health care"
          className=" -ml-2"
        />
      </div>
    </div>
  );
}
