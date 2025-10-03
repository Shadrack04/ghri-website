import React from "react";
import ServicesHeader from "./services-header";
import ServiceCard from "./service-card";

export default function ServicesScreen() {
  return (
    <div className=" relative">
      <ServicesHeader />
      <div className=" -mt-20 flex items-center justify-center gap-30 w-[80%] mx-auto">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
