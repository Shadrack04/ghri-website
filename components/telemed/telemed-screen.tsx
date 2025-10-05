import React from "react";
import TelemedBanner from "./telemed-banner";
import HowItWork from "./how-it-work";
import NewsLetter from "../news-letter";

export default function TelemedScreen() {
  return (
    <div className="">
      <TelemedBanner />
      <HowItWork />
      <NewsLetter />
    </div>
  );
}
