import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <div className=" my-30 grid grid-cols-2 place-items-center gap-4">
      <Image src={images.ourStoryImage} alt="" />
      <div className=" flex flex-col gap-8">
        <h2 className=" text-4xl text-foreground">Our Story</h2>
        <p className=" w-[31rem] text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
          urna eu mauris ultricies, ac facilisis nunc viverra. Nullam a volutpat
          turpis. Suspendisse potenti. Cras in ante a metus ornare cursus.
          Integer quis leo dolor. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Nam sed purus non nisi
          faucibus vestibulum
        </p>
      </div>
    </div>
  );
}
