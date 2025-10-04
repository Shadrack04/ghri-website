import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import Image, { StaticImageData } from "next/image";
import React from "react";

type ServiceCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
};

export default function TelemedCard({
  icon,
  title,
  description,
  className,
  iconClassName,
}: ServiceCardProps) {
  return (
    <Card
      className={cn(
        " relative flex flex-col items-center gap-2 py-6 px-6 bg-[#EDEFFF]",
        className
      )}
    >
      <div className={cn(" p-4 rounded-full mb-4", iconClassName)}>
        <Image src={icon} alt="" />
      </div>
      <h3 className=" text-2xl font-bold text-center">{title}</h3>
      <p className=" text-center">{description}</p>
    </Card>
  );
}
