import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { images } from "@/constants/image";

export default function DoctorCard() {
  return (
    <Card className=" flex-row w-[16rem] gap-3 py-2 justify-center doctor-card-shadow border-0">
      <Image
        src={images.doctorProfilePicture}
        alt=""
        className="size-18 object-cover"
      />
      <div className=" flex gap-4">
        <div>
          <p className=" text-foreground text-lg">Dr. James</p>
          <p className=" text-foreground text-2xl font-bold">Johnson</p>
          <p>Gynecologist</p>
        </div>
        <div className=" flex items-end">⭐ 4.5</div>
      </div>
    </Card>
  );
}
