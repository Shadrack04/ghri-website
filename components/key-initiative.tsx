import React from "react";

import { icons } from "@/constants/icons";

import InitiativeCard from "./initiative-card";

export default function KeyInitiatives() {
  const data = [
    {
      title: "Building Hospitals",
      description:
        "We are committed to constructing modern healthcare facilities equipped with the latest medical technology",
      icon: icons.ki1.src,
      color: "bg-primary",
    },
    {
      title: "Training Programs",
      description:
        "Our training programs ensure that health care professionals are well equipped to provide the best care",
      icon: icons.ki2.src,
      color: "bg-[#F44336]",
    },
    {
      title: "Awareness Campaigns",
      description:
        "We run campaigns to educate the public on health care issues and promote preventive measures",
      icon: icons.ki3.src,
      color: "bg-[#00D038]",
    },
  ];

  return (
    <div className="py-20">
      <div className="mb-18 flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-4xl">Key Initiatives</h1>
        <p className="text-center md:text-xl">
          We thrive at impacting lives because are into things that{" "}
          <br className="hidden md:block" /> actually impact
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-28">
        {data?.map((item) => (
          <InitiativeCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
