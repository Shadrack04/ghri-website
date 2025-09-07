import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";

export default function StaffCircleCard() {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex items-center justify-center p-10">
        <Image
          src={images.staffImage}
          alt=""
          className=" aspect-square rounded-full"
        />
      </div>
      <div className=" flex flex-col gap-3 text-center">
        <div>
          <p className=" text-foreground text-2xl font-bold">James Johnson</p>
          <h3 className=" text-xl text-primary">Founder, of GHRI</h3>
        </div>
        <p>
          Envision, create, and lead a company from inception, setting its
          strategic direction.
        </p>
      </div>
    </div>
  );
}
