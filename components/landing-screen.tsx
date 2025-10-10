import React from "react";
import Banner from "./banner";
import GlobalHealth from "./global-health";
import KeyInitiatives from "./key-initiative";
import GetInvolved from "./get-involved";
import NewsBlogSection from "./news-blog";
import BannerCarousel from "./banner-carousel";

export default function LandingScreen() {
  return (
    <div>
      {/* <BannerCarousel /> */}
      <Banner />
      <GlobalHealth />
      <KeyInitiatives />
      <GetInvolved />
      <NewsBlogSection />
    </div>
  );
}
