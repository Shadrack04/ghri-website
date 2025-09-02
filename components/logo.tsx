import { icons } from "@/constants/icons";
import { paths } from "@/constants/paths";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  href,
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <Link href={href || paths.public.home}>
      <Image src={icons.Logo} className={cn("", className)} alt="Brand logo" />
    </Link>
  );
}
