import React from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

type InitiativeCardProps = {
  item: {
    title: string;
    description: string;
    icon: string;
    color: string;
  };
};

export default function InitiativeCard({ item }: InitiativeCardProps) {
  return (
    <div className="w-[18rem] rounded-xl bg-background px-5 py-6 shadow-2xl">
      <Image
        src={item.icon}
        height={40}
        width={40}
        alt="key initiative card 1 icon"
        className={`${item.color} rounded-full size-10 p-2`}
      />

      <h2 className="mt-4 mb-2 text-2xl">{item.title}</h2>
      <p className="text-sm/normal">{item.description}</p>
      <button className="mt-6 mb-8 flex cursor-pointer items-center gap-1 text-xl">
        Read more
        <ArrowDownRight />
      </button>
    </div>
  );
}
