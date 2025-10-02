import { icons } from "@/constants/icons";
import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";

export default function OurMission() {
  return (
    <div className=" relative md:h-screen">
      <div className=" hidden md:flex">
        <Image
          src={images.slantImage}
          alt="our mission image"
          width={1160}
          className=" "
        />
      </div>
      <div className=" static md:absolute mb-6 md:mb-0 top-4 inset-x-0 flex items-center justify-center">
        <h1 className="  text-4xl">Our Mission and Vision</h1>
      </div>

      {/* <MissionOption /> */}

      <div className=" md:absolute w-2/3 right-0 top-24 px-6">
        <div className=" relative top-0 w-90 left-0 flex items-center justify-center gap-6">
          <div className=" bg-primary p-2.5 flex items-center justify-center rounded-full">
            <Image
              src={icons.dartIcon}
              height={70}
              width={70}
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

        <div className=" relative top-10 w-90 md:left-34 flex items-center justify-center gap-6">
          <div className=" bg-primary p-2.5 flex items-center justify-center rounded-full">
            <Image
              src={icons.dartIcon}
              height={70}
              width={70}
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

        <div className=" relative top-20 w-90 md:left-70 flex items-center justify-center gap-6">
          <div className=" bg-primary p-2.5 flex items-center justify-center rounded-full">
            <Image
              src={icons.dartIcon}
              height={70}
              width={70}
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
