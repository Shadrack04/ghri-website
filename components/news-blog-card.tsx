import Image, { StaticImageData } from "next/image";
import { images } from "@/constants/image";
import { ArrowDownRight, Eye, ThumbsUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

type NewsBlogCardProps = {
  title: string;
  author: string;
  date: string;
  description?: string;
  likes?: number;
  views?: number;
  image?: StaticImageData;
};

export function NewsBlogCard({
  title,
  author,
  date,
  description,
  likes,
  views,
  image,
}: NewsBlogCardProps) {
  return (
    <Card className="w-full max-w-xs gap-1 overflow-hidden rounded-lg border-0 py-0 shadow-none">
      <CardHeader className="px-0 py-0">
        <div>
          <Image src={images.blogImage} alt="Blog image" />
        </div>
        <div className="text-custom-gray-300 flex items-center justify-between text-xs">
          <p>{author}</p>
          <p>{date}</p>
        </div>
      </CardHeader>
      <CardContent className="px-0 py-0">
        <div>
          <h2 className="text-lg/tight font-bold">{title}</h2>
          <p className="text-custom-gray-400 w-[75%] text-sm/tight">
            {description}
          </p>
          <button className="mt-2 flex cursor-pointer items-center gap-1">
            Read more
            <ArrowDownRight className="size-4" />
          </button>
        </div>
      </CardContent>
      <CardFooter className="flex items-end justify-end px-1 py-0">
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1 text-sm">
            <Eye className="size-4" />
            <span>{views}</span>
          </p>
          <p className="flex items-center gap-1 text-sm">
            <ThumbsUp className="size-4" />
            <span>{likes}</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

// return (
//   <Card className="w-full max-w-sm gap-1 overflow-hidden rounded-lg border-0 py-0 shadow-none hover:shadow-xl">
//     <CardHeader className="h-1/2 px-0 py-0">
//       <div>
//         <Image src={images.blogImage} alt="Blog image" />
//       </div>
//       <div className="text-custom-gray-300 flex items-center justify-between text-xs">
//         <p>By James Johnson</p>
//         <p>July 15, 2024</p>
//       </div>
//     </CardHeader>
//     <CardContent className="px-0 py-0">
//       <div>
//         <h2 className="text-lg/tight font-bold">
//           GHRI has helped so many communities in term...
//         </h2>
//         <p className="text-custom-gray-400 w-[75%] text-sm/tight">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas
//           urna eu mauris ultricies, ac fa..{" "}
//         </p>
//         <button className="mt-2 flex cursor-pointer items-center gap-1">
//           Read more
//           <ArrowDownRight className="size-4" />
//         </button>
//       </div>
//     </CardContent>
//     <CardFooter className="flex items-end justify-end px-1 py-0">
//       <div className="flex items-center gap-3">
//         <p className="flex items-center gap-1 text-sm">
//           <Eye className="size-4" />
//           <span>5k</span>
//         </p>
//         <p className="flex items-center gap-1 text-sm">
//           <ThumbsUp className="size-4" />
//           <span>20k</span>
//         </p>
//       </div>
//     </CardFooter>
//   </Card>
// )
