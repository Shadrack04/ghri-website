"use client";
import Image from "next/image";

import React from "react";
import { Input } from "./ui/input";
import { icons } from "@/constants/icons";

export default function NewsLetter() {
  return (
    <div className=" custom-padding bg-[#C9E6FE] my-[3rem] flex flex-col md:flex-row justify-between gap-4 md:gap-0 items-center py-[3.2rem]">
      <div className=" flex flex-col gap-4">
        <h3 className=" font-[650] text-center md:text-left text-4xl text-foreground ">
          Join our Newsletter
        </h3>
        <p className=" text-xl">
          our newsletter helps to keep everyone in the loop
        </p>
      </div>

      <div className=" flex items-center gap-2">
        <Input
          placeholder="enter your email address"
          className="rounded-[15px] border-[1px] border-muted md:w-[30rem] bg-transparent py-6 z-10"
        />
        <button className="bg-primary text-background px-5 w-48 md:w-auto font-bold py-3 rounded-xl ">
          Learn More
        </button>
      </div>

      <Image
        className="absolute left-[44.5%] rotate-y-180 md:rotate-y-0 bottom-[13%] object-cover"
        src={icons.kiteIcon}
        width={170}
        height={170}
        alt="img"
      />
      <Image
        src={icons.dottedLine}
        alt=""
        className="hidden md:flex absolute left-105 bottom-5.5 "
      />
    </div>
  );
}
