import logo from "../assets/logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "../redux/slice/navSlice";

const data = [
  {
    name: "Gallary",
  },
  {
    name: "Career",
  },
  {
    name: "Join Us",
  },
];
export function Footer() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { nav } = useSelector((state) => state.navbar);

  // const handleNavigation = (path) => {
  //   if (nav !== path) {
  //     dispatch(setNav(path));
  //     navigate(path);
  //   }
  // };
  return (
    <div className="w-full container mx-auto px-4 py-8 flex flex-col justify-between max-md:flex-col items-center ">
      <div className="flex w-full items-center">
        <button className="">
          <img src={logo} />
        </button>
        <div className="flex-1 flex justify-center items-center space-x-4 max-md:flex-col">
          {data.map((item, index) => (
            <button
              className="text-white hover:text-[#c7c7c7b9] p-2"
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex-col flex">
          <a href="#" className="text-white hover:text-[#c7c7c7b9] text-left">
            ln.
          </a>
          <a href="#" className="text-white hover:text-[#c7c7c7b9] text-left">
            YT.
          </a>
          <a href="#" className="text-white hover:text-[#c7c7c7b9] text-left">
            Meta.
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full mt-10">
        <p className="text-white text-center text-sm">
          &copy; 2024 Onelogica. All rights reserved.
        </p>
      </div>
    </div>
  );
}
