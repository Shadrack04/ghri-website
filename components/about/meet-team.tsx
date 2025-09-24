import React from "react";
import StaffCard from "./staff-card";
import StaffCircleCard from "./staff-circle-card";

export default function MeetTeam() {
  return (
    <div className="custom-padding my-30">
      <div className=" w-full flex flex-col items-center justify-center gap-4 mb-22">
        <h2 className=" text-4xl text-foreground font-medium">Meet the team</h2>
        <p className=" text-xl text-foreground">
          Meet our exceptional medical team on the job
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaffCard />
        <StaffCard />
        <StaffCard />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <StaffCircleCard />
        <StaffCircleCard />
        <StaffCircleCard />
      </div>
    </div>
  );
}
