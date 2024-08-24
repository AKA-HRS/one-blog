import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/slice/blogSlice";

export function SearchBar() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const handleSearching = () => {
    dispatch(setSearchTerm(word));
  };

  return (
    <div>
      <div className="border hover:border-black flex">
        <button
          onClick={handleSearching}
          className="bg-blue-500 text-white p-2"
        >
          Search
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search blog..."
          className="p-2 outline-none flex-1"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
    </div>
  );
}
