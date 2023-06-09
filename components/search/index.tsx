import React from "react";
import { SearchIcon } from "../icons";

const Search = () => {
  return (
    <div className="flex border-2 border-slate-700 h-16 box-border">
      <input
        type="text"
        className="w-full h-full"
        placeholder="Enter keyword"
      />
      <SearchIcon className="w-8" />
    </div>
  );
};

export default Search;
