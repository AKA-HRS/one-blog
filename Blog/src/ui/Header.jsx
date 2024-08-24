import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNav } from "../redux/slice/navSlice";
import { SearchBar } from "./SearchBar";

const data = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact Us",
    path: "/",
  },
  {
    name: "About",
    path: "/",
  },
];
export function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.navbar);

  const handleNavigation = (path) => {
    if (nav !== path) {
      dispatch(setNav(path));
      navigate(path);
    }
  };

  useEffect(() => {
    navigate(nav);
  }, [nav]);

  return (
    <div className="flex container mx-auto h-full justify-between px-4 items-center">
      <div className="h-full w-fit flex items-center">
        <button className="md:flex hidden overflow-hidden">
          <img src={logo} />
        </button>
      </div>
      <div className="flex-1 flex px-4 justify-center items-center space-x-4">
        {data.map((item, index) => (
          <button
            className="text-blue-400 hover:text-blue-900 p-2"
            onClick={() => {
              handleNavigation(item.path);
            }}
            key={index}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="hidden md:flex">
        <SearchBar />
      </div>
    </div>
  );
}
