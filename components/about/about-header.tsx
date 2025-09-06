import { images } from "@/constants/image";
import Image from "next/image";
import React from "react";

export default function AboutHeader() {
  return (
    <div>
      <Image src={images.aboutHeaderImage} alt="header" />
    </div>
  );
}
