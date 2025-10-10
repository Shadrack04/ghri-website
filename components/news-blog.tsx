import React from "react";
import Blogs from "./blogs";
import News from "./news";

export default function NewsBlogSection() {
  return (
    <div className="md:px-4 lg:px-0 py-20">
      <div className="mb-18 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl">Latest News/Blogs</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <News />
        <Blogs />
      </div>
    </div>
  );
}
