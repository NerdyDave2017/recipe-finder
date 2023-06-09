"use client";
import React, { useState } from "react";
import Search from "@/components/search";
import Card from "@/components/card";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-86px)] flex-col items-center justify-center space-y-6">
      <div className="w-full flex item-center justify-center">
        <Search />
      </div>

      <div className="w-full flex text-slate-700 font-light item-center justify-center">
        <div className="w-5/12 space-y-3">
          <div className="text-xl font-semibold">RECIPES</div>
          <div className="w-full h-full">
            {/* Recipe Card */}
            <Card className="w-full flex-col space-y-5">
              {/* Top Card section */}
              <div className="flex w-full">
                <div className="w-full">Image</div>
                <div className="w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  illo, placeat molestiae eum optio adipisci blanditiis
                  voluptates voluptatibus sed officiis.
                </div>
              </div>
              {/* Lower Card section */}
              <div className="flex w-full">
                <div className="w-full">Ingredients</div>
                <div className="w-full">
                  Instructions Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aliquid, quod?
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
