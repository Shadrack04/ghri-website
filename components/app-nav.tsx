import React from "react";
import Logo from "./logo";
import { Button } from "./ui/button";

import Navigation from "./navigation-menu";
import { SideBar } from "./side-bar";

export default function AppNav() {
  return (
    <header className="custom-padding h-22 bg-primary/10 z-50 backdrop-blur-xl fixed top-0 w-full flex items-center justify-between">
      <Logo />
      <div className="hidden w-[80%] md:flex items-center justify-between">
        <Navigation />
        <Button className=" px-6 py-6 font-bold text-md">Contact Us</Button>
      </div>
      <SideBar />
    </header>
  );
}
