import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";

export default function StaffCard() {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" relative border">
        <Image
          src={images.staffImage}
          alt=""
          className=" w-full object-contain"
        />
        <div className="  bg-primary/50 p-2.5">
          <p className=" text-background text-2xl font-bold">James Johnson</p>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <h3 className=" text-xl text-primary">Founder, of GHRI</h3>
        <p>
          Envision, create, and lead a company from inception, setting its
          strategic direction and building its culture.
        </p>
      </div>
    </div>
  );
}
