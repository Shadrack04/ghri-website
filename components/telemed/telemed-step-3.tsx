import React from "react";
import DoctorCard from "./doctor-card";
import { Button } from "../ui/button";

export default function TelemedStep3() {
  return (
    <div className=" custom-padding flex items-center md:justify-center lg:justify-between gap-8">
      <div className=" hidden lg:grid grid-cols-2 gap-8">
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </div>
      <div className=" flex flex-col gap-6">
        <div className=" flex items-center gap-4">
          <div className=" size-8 flex items-center justify-center text-xl font-bold rounded-full bg-primary text-background">
            3
          </div>
          <h3 className=" text-4xl text-foreground leading-12 font-medium w-[22rem] ">
            Get the best
          </h3>
        </div>
        <div className=" flex flex-col gap-6">
          <p className=" text-xl md:w-[30rem]">
            Get the best, receive top-notch medical care from the finest doctors
            available
          </p>
          <div>
            <Button className=" py-6 px-4 text-xl rounded-2xl">
              Search doctor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
