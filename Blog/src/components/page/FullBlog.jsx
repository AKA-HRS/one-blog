import React from "react";
// import imageexample from "../../assets/image_example.jpg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import whatsapp from "../../assets/whatsapp.svg";
import { setNav } from "../../redux/slice/navSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function FullBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedBlog } = useSelector((state) => state.blog);
  function formatDate(dateString) {
    console.log(selectedBlog, "selected daaaaaaaata");
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
  const copyLink = async () => {
    const currentUrl = window.location.href;

   
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("URL copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy URL: ", err);
      alert("Failed to copy URL.");
    }
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="container mx-auto p-4">
        <div>
          <h1 className="font-bold text-3xl">{selectedBlog.title}</h1>
          <div className="flex space-x-4">
            <p className="text-lg text-cyan-400">{selectedBlog.author}</p>
            <p className="text-lg text-blue-500">{selectedBlog.category}</p>
            <p className="text-lg">{formatDate(selectedBlog.createdAt)}</p>
          </div>
        </div>
        <div className="w-full h-[400px] flex justify-center items-center">
          <img
            src={selectedBlog.ref}
            alt="reference image"
            className="w-[1024px] h-full"
          />
        </div>
        <div
          className="my-5 p-4"
          dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
        ></div>

        <div className="flex w-full ">
          <h1 className="text-xl font-bold">Share this: </h1>
          <button
            onClick={() => {
              dispatch(setNav("/"));
              navigate("/");
              copyLink();
            }}
            className="w-8 h-8"
          >
            <img src={facebook} alt="" className="w-full h-full " />
          </button>
          <button
            onClick={() => {
              dispatch(setNav("/"));
              navigate("/");
              copyLink();
            }}
            className="w-8 h-8"
          >
            <img src={twitter} alt="" className="w-full h-full " />
          </button>
          <button
            onClick={() => {
              dispatch(setNav("/"));
              navigate("/");
              copyLink();
            }}
            className="w-8 h-8"
          >
            <img src={whatsapp} alt="" className="w-full h-full " />
          </button>
        </div>
      </div>
    </div>
  );
}
