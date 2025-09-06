import React from "react";
import OurMission from "./our-mission";
import AboutHeader from "./about-header";
import OurStory from "./our-story";

export default function AboutScreen() {
  return (
    <div>
      <AboutHeader />
      <OurStory />
      <OurMission />
    </div>
  );
}
