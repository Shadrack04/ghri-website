import { Card } from "@/components/ui/card";
import { icons } from "@/constants/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ServiceCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className=" relative flex flex-col items-center py-12 px-8 bg-primary">
      <div className=" absolute p-3 bg-primary rounded-2xl -top-20 translate-y-1/2">
        <Image src={icons.ambulanceIcon} alt="" />
      </div>
      <h3 className=" text-2xl font-bold text-center">
        Emergency Care Contact
      </h3>
      <p className=" text-center text-muted">
        Must be the priority for any health care
      </p>
    </Card>
  );
}
