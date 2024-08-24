import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNav } from "../redux/slice/navSlice";
import { setSelectedBlog } from "../redux/slice/blogSlice";

export function BlogCard({
  image,
  title,
  author,
  date,
  category,
  content,
  data,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelReadMore = () => {
    dispatch(setSelectedBlog(data));
    dispatch(setNav("/full-blog"));
    navigate("/full-blog");
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    return formatter.format(date);
  }

  return (
    <div className="w-[400px] h-[570px] space-y-3 shadow-md overflow-hidden m-2 rounded-lg">
      <div>
        <img
          src={image || "https://via.placeholder.com/400x300"}
          alt="Blog"
          className="w-[400px] h-[300px]"
        />
      </div>
      <div className="p-4 flex justify-center flex-col items-center space-y-3">
        <div className="flex justify-between w-full items-center">
          <span className="flex-col items-center">
            <h1 className="text-xl font-bold max-h-[61px] overflow-hidden">{title}</h1>
            <span className="flex text-gray-500">
              <p>Posted by {author}</p>
            </span>
          </span>
          <p className="text-sm font-bold uppercase">{category}</p>
        </div>
        <div
          className="mb-2 h-16 overflow-hidden shadow-inner"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="flex justify-between w-full items-center pt-5">
          <p className="text-gray-500">{formatDate(date)}</p>
          <button
            onClick={handelReadMore}
            className="text-base p-1 hover:text-blue-500 text-black hover:-translate-y-1 transition-all duration-300 ease-in-out rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
