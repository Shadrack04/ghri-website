import AppNav from "@/components/app-nav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" min-h-screen">
      <AppNav />
      {children}
    </div>
  );
}
