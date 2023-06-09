"use client";
import React, { useState } from "react";
import Search from "@/components/search";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-86px)] flex  justify-center">
      <Search />
    </div>
  );
}
