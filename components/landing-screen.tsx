import React from "react";
import Banner from "./banner";
import GlobalHealth from "./global-health";
import KeyInitiatives from "./key-initiative";

export default function LandingScreen() {
  return (
    <div>
      <Banner />
      <GlobalHealth />
      <KeyInitiatives />
    </div>
  );
}
