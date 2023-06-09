"use client";
import React, { useState } from "react";
import Search from "@/components/search";
import Card from "@/components/card";
import Navbar from "@/components/navbar";

import { useRecipeAPI } from "@/hooks/useAPI";

import { Spinner } from "flowbite-react";

export default function Home() {
  const { hits, loading } = useRecipeAPI();

  return (
    <div className="w-full h-[calc(100vh-86px)] flex-col items-center justify-center space-y-6">
      <Navbar />
      <div className="w-full flex item-center justify-center">
        <Search />
      </div>

      <div className="w-full flex text-slate-700 font-light item-center justify-center">
        <div className="w-5/12 flex-col space-y-5 ">
          <div className="text-xl font-semibold">RECIPES</div>

          <div className="w-full auto flex justify-center items-center">
            {loading && (
              <Spinner aria-label="Extra small spinner example" size="xl" />
            )}

            {!loading && hits.length == 0 && (
              <div className="text-xl">Recipe Not Found</div>
            )}
          </div>

          {!loading && (
            <div className="w-full h-full flex-col space-y-8">
              {/* Recipe Card */}
              {hits.map((x: any) => (
                <Card className="w-full flex-col h-auto space-y-5">
                  {/* Top Card section */}
                  <div className="flex w-full space-x-5">
                    <div className="w-auto">
                      <img
                        src={x.recipe.image}
                        alt=""
                        className="rounded-xl w-[300px]"
                      />
                    </div>
                    <div className="w-full flex-col">
                      <div className="font-semibold text-lg">
                        {x.recipe.label}
                      </div>
                      <div className="">
                        {x.recipe.ingredientLines.map((ingredients: any) => (
                          <span className="block">{ingredients}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Lower Card section */}
                  <div className="flex w-full space-x-5">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="">Calories</span>
                        <span className="font-bold">
                          {(x.recipe.calories / 1000).toFixed(1)} kC
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Weight</span>
                        <span className="font-bold">
                          {(x.recipe.totalWeight / 1000).toFixed(1)} kg
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="">CARBS</span>
                        <span className="font-bold">
                          {(
                            x.recipe.totalNutrients.CHOCDF.quantity / 1000
                          ).toFixed(1)}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">PROTEIN</span>
                        <span className="font-bold">
                          {(
                            x.recipe.totalNutrients.PROCNT.quantity / 1000
                          ).toFixed(1)}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">FAT</span>
                        <span className="font-bold">
                          {(
                            x.recipe.totalNutrients.FAT.quantity / 1000
                          ).toFixed(1)}{" "}
                          kg
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex justify-between">
                        <span className="">Cholesterol</span>
                        <span className="font-bold">
                          {(
                            x.recipe.totalNutrients.CHOLE.quantity / 1000
                          ).toFixed(1)}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Sodium</span>
                        <span className="font-bold">
                          {(x.recipe.totalNutrients.NA.quantity / 1000).toFixed(
                            1
                          )}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Magnisium</span>
                        <span className="font-bold">
                          {(x.recipe.totalNutrients.MG.quantity / 1000).toFixed(
                            1
                          )}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Potassium</span>
                        <span className="font-bold">
                          {(x.recipe.totalNutrients.K.quantity / 1000).toFixed(
                            1
                          )}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Iron</span>
                        <span className="font-bold">
                          {(x.recipe.totalNutrients.FE.quantity / 1000).toFixed(
                            1
                          )}{" "}
                          kg
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="">Calcium</span>
                        <span className="font-bold">
                          {(x.recipe.totalNutrients.CA.quantity / 1000).toFixed(
                            1
                          )}{" "}
                          kg
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
