import { icons } from "@/constants/icons";
import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import SocialLinks from "./social-links";

export default function Banner() {
  return (
    <div className=" relative overflow-hidden h-screen">
      {/* <Image
        src={images.heroBg}
        fill
        alt="Hero image"
        className=" object-cover"
      /> */}

      <picture>
        <source
          srcSet="/images/herobg-mobile.webp"
          media="(max-width: 768px)"
        />

        <source srcSet="/images/herobg.webp" media="(min-width: 769px)" />
        <Image
          src="/images/herobg.webp"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </picture>

      <div className="hidden md:block absolute top-28 right-20 z-10 size-16 rounded-full">
        <Image src={icons.shortArrow} alt="a short arrow" />
      </div>

      <div className="absolute -right-10 -bottom-18 z-10">
        <Image src={icons.ellipseIon} alt="Dashed ellipse " />
      </div>

      <SocialLinks />

      <div className="absolute z-20 bottom-1/2 translate-y-1/2 md:translate-0 md:bottom-12 flex flex-col items-center justify-center w-full">
        <div className="mb-10 px-4 flex flex-col gap-10 items-center justify-center">
          <h1 className=" text-4xl md:text-6xl font-[400] md:leading-0.5 md:tracking-widest text-white text-center">
            Transforming Healthcare in <br className=" hidden md:flex" />
            <span className="font-bold">Nigeria</span>
            <span className=" hidden md:inline-block text-secondary mt-0 -ml-2 text-6xl md:text-8xl font-medium">
              .
            </span>
          </h1>
          <div className="">
            <Button className="rounded-xl px-12 py-7 text-lg font-bold">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
