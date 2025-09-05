import { icons } from "@/constants/icons";
import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";
import MissionOption from "./mission-option";

export default function OurMission() {
  return (
    <div className=" relative h-screen">
      <Image
        src={images.slantImage}
        alt="our mission image"
        className=" object-fill"
      />
      <div className=" absolute top-4 inset-x-0 flex items-center justify-center">
        <h1 className="  text-4xl">Our Mission and Vision</h1>
      </div>

      {/* <MissionOption /> */}

      <div className=" absolute w-2/3 right-0 top-24 px-6">
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

        <div className=" relative top-10 w-90 left-38 flex items-center justify-center gap-6">
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

        <div className=" relative top-20 w-90 left-78 flex items-center justify-center gap-6">
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
      </div>
    </div>
  );
}
