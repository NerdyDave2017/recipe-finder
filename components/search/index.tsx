"use client";
import React, { useState } from "react";
import { SearchIcon } from "../icons";
import { useRecipeAPI } from "@/hooks/useAPI";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { getRecipes } = useRecipeAPI();

  const handleSearch = async () => {
    console.log(searchQuery);

    const res = await getRecipes(searchQuery);
    console.log(res);
  };

  return (
    <div className="w-5/12 h-16 flex border-2 border-slate-700  rounded-xl p-4 text-slate-700 ">
      <input
        type="text"
        className="w-full h-full text-2xl font-extralight bg-transparent"
        placeholder="Enter keyword"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchIcon className="w-8 cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default Search;
