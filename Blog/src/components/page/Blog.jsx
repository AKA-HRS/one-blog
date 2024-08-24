import React from "react";
import { BlogCard } from "../../ui/BlogCard";
import right from "../../assets/right.svg";
import { BlogForm } from "./BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { setBlogPanel } from "../../redux/slice/blogSlice";
// import { selectFilteredBlogs } from "../../redux/slice/blogSelectors"; // Import selector
import { setNav } from "../../redux/slice/navSlice";

export function BlogPage() {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(setBlogPanel(true));
  };
  const handleMore = (path) => {
    dispatch(setNav(path));
  };
  const { panel, data, categorywise } = useSelector((state) => state.blog);
  return (
    <div className="w-full h-full flex-col bg-white">
      <div className="flex-col justify-center items-center container mx-auto py-4">
        <div>
          <div className="flex w-full justify-between">
            <h1 className="text-4xl font-bold">Blogs</h1>
            <button
              onClick={handleOpen}
              className="border text-xl p-2 bg-blue-500 text-white rounded-md shadow-md"
            >
              Add Blog+
            </button>
          </div>
          <div className="border border-cyan-500 my-5"></div>
          <div className="flex w-f justify-between">
            <h1 className="text-4xl font-bold">Featured Post</h1>
            <button
              onClick={() => handleMore("/blog-list")}
              className="text-xl group p-2 flex items-center justify-center text-blue-400"
            >
              <span className="group-hover:mr-2 transition-all duration-500 ease-in-out">
                More
              </span>
              <span>
                <img
                  src={right}
                  alt=""
                  className="w-6 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="h-full container mx-auto justify-center flex flex-wrap">
          {data.slice(0, 2).map((d) => (
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

        <div className="w-full flex justify-center my-10">
          <div className="border-2 w-[5%] border-cyan-500 "></div>
        </div>
        <div className="flex w-f justify-between">
          <h1 className="text-4xl font-bold">Category</h1>
          <button
            onClick={() => handleMore("/post-by-category")}
            className="text-xl group p-2 flex items-center justify-center text-blue-400"
          >
            <span className="group-hover:mr-2 transition-all duration-500 ease-in-out">
              More
            </span>
            <span>
              <img
                src={right}
                alt=""
                className="w-6 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-500"
              />
            </span>
          </button>
        </div>
        <div className="h-full container mx-auto flex justify-center flex-wrap">
          {categorywise.map((group) => (
            <React.Fragment key={group._id}>
              {group.blogs.slice(0, 2).map((d) => (
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
            </React.Fragment>
          ))}
        </div>
      </div>

      {panel && <BlogForm />}
    </div>
  );
}
