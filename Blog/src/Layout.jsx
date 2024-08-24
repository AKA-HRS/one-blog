import React, { useEffect } from "react";
import { Header } from "./ui/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./ui/Footer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBlogData, setBlogDataByGroup } from "./redux/slice/blogSlice";

export default function Layout() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleGetBlog = async () => {
    try {
      const response = await axios.get("/blog/getpost");
      dispatch(setBlogData(response.data));
      console.log(response.data);
      const groupresponse = await axios.get("/blog/getpostbygroup", {
        params: {
          groupby: "category",
        },
      });
      dispatch(setBlogDataByGroup(groupresponse.data));
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    handleGetBlog();
  }, []);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     navigate(0);
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div className="min-h-screen flex w-full flex-col bg-white">
      <div className=" w-full h-20 justify-center items-center ">
        <Header />
      </div>
      <div className="h-full w-full flex justify-center">
        <Outlet />
      </div>
      <div className="w-full flex bg-[#323332] ">
        <Footer />
      </div>
    </div>
  );
}
