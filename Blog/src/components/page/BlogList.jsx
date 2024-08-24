import React from "react";
import { useSelector } from "react-redux";
import { BlogCard } from "../../ui/BlogCard";
import { selectFilteredBlogs } from "../../redux/slice/blogSelectors";

export default function BlogList() {
  const filteredBlogs = useSelector(selectFilteredBlogs);

  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="h-full container mx-auto flex flex-wrap">
        {filteredBlogs.map((d) => (
          <BlogCard
            key={d._id}
            title={d.title}
            author={d.author}
            date={d.createdAt}
            category={d.category}
            content={d.content}
            image={d.ref}
            data={d}
          />
        ))}
      </div>
    </div>
  );
}
