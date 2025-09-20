import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icons } from "@/constants/icons";

export default function SocialLinks() {
  return (
    <div className="absolute hidden md:flex bottom-18 left-6 md:left-20 z-10 flex-col items-center justify-center gap-2">
      <Image src={icons.longArrow} alt="a long arrow" className=" h-44" />
      <Link className="" href="#">
        <Image src={icons.linkedinIcon} alt="linkedin icon" />
      </Link>
      <Link href="#">
        <Image src={icons.xIcon} alt="x formerly twitter icon" />
      </Link>
      <Link href="#">
        <Image src={icons.facebookIon} alt="face icon" />
      </Link>
      <Link href="#">
        <Image src={icons.youtubeIon} alt="youtube icon" />
      </Link>
    </div>
  );
}
