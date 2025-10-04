import React from "react";
import ServicesHeader from "./services-header";
import ServiceCard from "./service-card";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { images } from "@/constants/image";

export default function ServicesScreen() {
  return (
    <div className=" relative">
      <ServicesHeader />
      <div className=" -mt-20 flex items-center justify-center gap-30 w-[80%] mx-auto">
        <ServiceCard
          icon={icons.ambulanceIcon}
          title="Emergency Care contact"
          description="Must be the priority for any health care"
        />
        <ServiceCard
          icon={icons.worldCareIcon}
          title="Telemed"
          description="Book sessions with a medical practitioner"
        />
        <ServiceCard
          icon={icons.systemsIcon}
          title="Hospitality and health care"
          description="Clinical excellence
must be the priority"
        />
      </div>
      <div>
        <Image src={images.serviceImg2} alt="" />
      </div>
    </div>
  );
}
