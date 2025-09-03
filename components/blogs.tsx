import React from "react"
import { images } from "@/constants/image"
import { NewsBlogCard } from "./news-blog-card"

export default function Blogs() {
  const blogs = [
    {
      title: "GHRI has helped so many communities in term...",
      author: "By James Johnson",
      date: "July 15, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas urna eu mauris ultricies, ac fa..",
      views: 200,
      likes: 12,
      image: images.blogImage.src,
    },
    {
      title: "GHRI has helped so many communities in term...",
      author: "By James Johnson",
      date: "July 15, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas urna eu mauris ultricies, ac fa..",
      views: 200,
      likes: 12,
      image: images.blogImage.src,
    },
    {
      title: "GHRI has helped so many communities in term...",
      author: "By James Johnson",
      date: "July 15, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas urna eu mauris ultricies, ac fa..",
      views: 200,
      likes: 12,
      image: images.blogImage.src,
    },
  ]
  return (
    <div>
      <div>
        <h3 className="mb-4 text-2xl font-medium">Blogs</h3>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {blogs.map((item, index) => (
          <NewsBlogCard
            key={index}
            title={item.title}
            author={item.author}
            date={item.date}
            image={item.image}
            views={item.views}
            likes={item.likes}
          />
        ))}
      </div>
    </div>
  )
}
