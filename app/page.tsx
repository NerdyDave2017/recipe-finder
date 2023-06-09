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
        <div className="w-5/12">
          <div className="text-xl font-semibold">RECIPES</div>
          <div className="w-full h-full">
            {/* Recipe Card */}
            <Card className="w-full flex-col h-auto space-y-5">
              {/* Top Card section */}
              <div className="flex w-full space-x-5">
                <div className="w-auto">
                  <img
                    src="https://edamam-product-images.s3.amazonaws.com/web-img/ccc/cccff7df44dd1afa256d874c04a0882c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLWVhc3QtMSJHMEUCIGdD4wohsWJwXJEk8oXmgaUeJy%2FY5FYolRANM%2FE2dE9OAiEAlzfR3%2FwtdHaTQZDjQ78ATNHD%2Bp32bgyBMHW5XlXdKYIqwgUIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDGfu%2BWOqz6pvYsFgvCqWBZfZ773W6KpEZ6RsHSVPm70MmBZdBwAKu%2BFWx2VcuduS9mDJ%2F7FfZPcx84qVk%2BvwJAlynW1hiebGAiGPBMd4nBo6WwWKQzKW46I2KIpvP%2FFqUB6QNtKRo02C%2BK1V6S1T8Wr1QPi911SbbixRvzFP8JeBiq5sR5VxfCUuV%2F8mR7%2FiiLB2wEdxSenD2886drD3NhuQRqvGGBJ04W4gTfsIwbgmK0PPxRFPCIM0VRnZXW20hVSRIAK2VMKz5KzUmcDwugU9DkiEvb8DGia63ggmhsNGl8tywtQ4sxmCgsHExefiNmG7OaD6D3q%2BVa2GHTWCLzoCCoEdZfkwautqBQ1BlTEmqiDeNS9sDwOVUOhfMYsn06stewaPYggikFVx6BUC5ij%2Bq2NoKJOa%2BkH6vMkMBKftxmwCWJA95zp%2F4f%2BpcMKZP4gk6exfKmwx2xp4XFq9eR5%2BQ8yovE0giWCVwcHwg3E5ceMAZN8b%2FcazYm01LxVUlDITQ5PKNTtMKAU8cBnbcZi3OLe6UrqhQGUXXyqbBI%2B6b6DBcPN86Hj7RkGdZmxfpMH5ZHALnnzehZ0Z7yjifmJqz6iyUXeFzdpuCiaWFONaUzlkSGwv2o%2FEyy3f0qO1axc2XqfCvpGH4I80MGEQfJATSDS%2B1GHqeWL5cGpJZv%2F8SYoqI9wgs7iVmXm1n%2BcfZAwY5FqfhbfPo7qhvzC2JmuvtHLiiMDDlfzX5Xg3s7Ql%2FY4Q0lC%2FVlWN4X98yhoUa%2FYZ8okuez%2BBul5QWyAb3MzXn57STxv0U2YfRsTu0TgTPXnCMwpMNHPacHRWUc6%2FmCZ4CjJHacUEGZmGtqabSi22sJUDv4uA4wTWvmiht9iLkuzCxRXxSBS%2BK6BNvXZHrGy8jeDUMLbBjKQGOrEBf0EAwIpsqO66xtI2HXxL73N%2B2V%2BQR0CiNGsZUxHaJZUak7nmToiC2Vs20D%2FkPVGDH5ZLOaAMQ6qDGZqX9hcMUM8jtxjJcOA6eppRPdGuvxwt4xyVg7tDcw%2F2x4BnGncsFbLzaKDqJi03d7PxjGt%2F0%2BA901Cat4uw%2BzGYB6lAEAKqJj%2BC8QiSxAxLu%2B41eIk%2BB67GlJlydq5AjsH3t7zzje5EcrNLnNhT4dAozqvI%2BOod&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230609T134051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFI4W2AJSZ%2F20230609%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e72248868f926c335e8caf7b9c990e3cb0d1832120879022b8bc6c5ad2467b21"
                    alt=""
                    className="rounded-xl w-[300px]"
                  />
                </div>
                <div className="w-full flex-col">
                  <div className="font-semibold text-lg">Food Name</div>
                  <div className="">
                    <span className="block">1 sppons of mikl</span>
                    <span className="block">1 sppons of mikl</span>
                    <span className="block">1 sppons of mikl</span>
                    <span className="block">1 sppons of mikl</span>
                  </div>
                </div>
              </div>
              {/* Lower Card section */}
              <div className="flex w-full space-x-5">
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="">Energy </span>
                    <span className="font-bold">322.7 kCal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Weight</span>
                    <span className="font-bold">158.7 g</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="">CARBS</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">PROTEIN</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">FAT</span>
                    <span className="font-bold">0 g</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <span className="">Cholesterol</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Sodium</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Magnisium</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Potassium</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Iron</span>
                    <span className="font-bold">0 g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="">Calcium</span>
                    <span className="font-bold">0 g</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
