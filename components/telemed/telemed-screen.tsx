import React from "react";
import TelemedBanner from "./telemed-banner";
import HowItWork from "./how-it-work";
import NewsLetter from "../news-letter";
import DoctorCard from "./doctor-card";
import TelemedStep3 from "./telemed-step-3";

export default function TelemedScreen() {
  return (
    <div className="">
      <TelemedBanner />
      <HowItWork />
      <TelemedStep3 />
      <div className=" relative">
        <NewsLetter />
      </div>
    </div>
  );
}
