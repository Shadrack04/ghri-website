import Image from "next/image";
import React from "react";

export default function ServicesHeader() {
  return (
    <div className=" relative overflow-hidden h-screen">
      <picture>
        <source
          srcSet="/images/services-header.webp"
          media="(max-width: 768px)"
        />

        <source
          srcSet="/images/services-header.webp"
          media="(min-width: 769px)"
        />
        <Image
          src="/images/services-header.webp"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </picture>
    </div>
  );
}
