import { icons } from "@/constants/icons";
import Image from "next/image";
import React from "react";

export default function MissionOption() {
  return (
    <div className=" relative top-0 w-90 left-4 flex items-center justify-center gap-6">
      <div className=" bg-primary p-2 flex items-center justify-center rounded-full">
        <Image
          src={icons.dartIcon}
          height={50}
          width={50}
          alt=""
          className="rounded-full  bg-amber-300`"
        />
      </div>
      <div>
        <h2 className=" text-2xl text-primary font-bold">Mission</h2>
        <p>
          To improve healthcare Nigerian through strategic initiative,
          partnership and community engagement
        </p>
      </div>
    </div>
  );
}
