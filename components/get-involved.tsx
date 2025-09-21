import React from "react";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { images } from "@/constants/image";

export default function GetInvolved() {
  return (
    <div className="relative my-20 md:min-h-screen">
      <Image
        src={images.getInvolvedImage}
        alt="Get involved background image"
      />
      <div className="absolute hidden md:block top-30 right-0 z-10 w-[50%] bg-white/50 px-12 py-16 backdrop-blur-xl">
        <h2 className="mb-8 flex items-center gap-2 text-4xl">
          Get Involved
          <Image
            src={icons.mIcon}
            height={30}
            width={30}
            alt="couple holding hand"
            className="mb-6"
          />
        </h2>
        <p className="w-[65%] text-xl">
          We have different Information on how to support GHRI through
          donations, volunteering, or partnerships.
        </p>
      </div>
      <div className=" static md:absolute md:right-24 md:bottom-10 border-2 border-background z-10 flex flex-wrap md:flex-nowrap w-full md:w-[80%] gap-2 rounded-xl bg-white/50">
        <Image
          src={images.volunter}
          alt="volunteer doctor and a patient"
          className="rounded-tl-lg rounded-bl-lg "
        />
        <Image
          src={images.donate}
          alt="A donation jar"
          className="rounded-bl-2xl"
        />
        <Image
          src={images.partner}
          alt=" Partner image"
          className="rounded-tr-lg rounded-br-lg"
        />
      </div>
    </div>
  );
}
