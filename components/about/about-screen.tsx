import React from "react";
import OurMission from "./our-mission";
import AboutHeader from "./about-header";
import OurStory from "./our-story";
import MeetTeam from "./meet-team";

export default function AboutScreen() {
  return (
    <div>
      <AboutHeader />
      <OurStory />
      <OurMission />
      <MeetTeam />
    </div>
  );
}
