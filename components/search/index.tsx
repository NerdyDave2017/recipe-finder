import React from "react";
import { SearchIcon } from "../icons";

const Search = () => {
  return (
    <div className="w-5/12 h-16 flex border-2 border-slate-700  rounded-xl p-4 text-slate-700">
      <input
        type="text"
        className="w-full h-full text-2xl font-extralight"
        placeholder="Enter keyword"
      />
      <SearchIcon className="w-8 cursor-pointer" />
    </div>
  );
};

export default Search;
