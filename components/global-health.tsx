import { images } from "@/constants/image";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function GlobalHealth() {
  return (
    <div className=" py-20">
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:mb-18">
        <h1 className="text-4xl">About Us</h1>
        <p className="text-xl">A little bit about what and who we are</p>
      </div>
      <div className=" flex flex-col-reverse md:flex-row gap-4 items-center">
        <Image src={images.aboutHelp} alt="" className=" flex-1" />

        <div className="mb-8 flex w-full flex-col justify-center px-2 md:mb-0 md:px-12 flex-1">
          <h2 className="text-primary mb-6 text-3xl md:text-4xl/snug w-[30rem]">
            Welcome to Global Health Reform Initiatives
          </h2>

          <p className="mb-6 text-lg/relaxed w-[29rem]">
            We are dedicated to improving health care in Nigeria by raising
            awareness, gathering resources, and building better healthcare
            facilities...
          </p>

          <button className="flex cursor-pointer items-center gap-1 font-bold md:font-normal">
            Read more <ArrowDownRight />
          </button>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Image from "next/image";
// import { icons } from "@/constants/icons";
// import { images } from "@/constants/image";
// import { ArrowDownRight } from "lucide-react";

// export default function AboutSection() {
//   return (
//     <div className="relative py-6 md:py-20">
//       <div className="mb-6 flex flex-col items-center justify-center gap-4 md:mb-18">
//         <h1 className="text-4xl">About Us</h1>
//         <p className="text-xl">A little bit about what and who we are</p>
//       </div>
//       <div className="flex flex-col-reverse md:grid md:h-screen md:grid-cols-2">
//         <div className="relative">
//           <div className="absolute top-0 left-0 hidden md:flex">
//             <Image src={images.rectangleTop} width={350} alt="blue rectangle" />
//           </div>
//           <div className="relative flex h-full items-center justify-center">
//             <div className="z-10 h-[77%] md:w-[70%]">
//               <Image src={images.aboutHelp} alt=" the local begging for alm" />
//             </div>
//             <div className="absolute right-0 bottom-0 hidden md:flex">
//               <Image
//                 src={images.rectangleBottom}
//                 alt=" blue rectangle"
//                 className=""
//               />
//               <Image
//                 src={icons.arrowBottomRight}
//                 alt=" blue rectangle"
//                 className="absolute right-0 bottom-0 z-20 size-8"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="mb-8 flex w-full flex-col justify-center px-2 md:mb-0 md:w-[80%] md:px-12">
//           <h2 className="text-primary mb-6 text-3xl md:text-4xl/snug">
//             Welcome to Global Health Reform Initiatives
//           </h2>
//           <p className="mb-6 text-lg/relaxed">
//             We are dedicated to improving health care in Nigeria by raising
//             awareness, gathering resources, and building better healthcare
//             facilities...
//           </p>
//           <button className="flex cursor-pointer items-center gap-1 font-bold md:font-normal">
//             Read more
//             <ArrowDownRight />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
