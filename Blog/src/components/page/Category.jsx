import React, { useEffect } from "react";
import { BlogCard } from "../../ui/BlogCard";
import { useSelector } from "react-redux";

export function Category() {
  const { categorywise } = useSelector((state) => state.blog);
  console.log(categorywise);
  return (
    <div className="w-full h-full flex justify-center items-center bg-white">
      <div className="h-full container mx-auto flex flex-wrap">
        {categorywise.map((categoryGroup) => (
          <div
            key={categoryGroup._id}
            className="w-full mb-4 flex flex-col flex-wrap"
          >
            <h2 className="text-xl font-bold mb-2">{categoryGroup._id}</h2>
            <div
              key={categoryGroup._id}
              className="w-full mb-4 flex flex-wrap"
            >
              {categoryGroup.blogs.map((blog) => (
                <BlogCard
                  key={blog.title}
                  title={blog.title}
                  author={blog.author}
                  date={blog.createdAt}
                  category={blog.category}
                  content={blog.content}
                  image={blog.ref}
                  data={blog}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
