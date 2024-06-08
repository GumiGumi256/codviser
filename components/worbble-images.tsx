"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card"; 

export function WobbleImages() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full"
        className=" relative"
      >
        
        <Image
          src="/coding-1.jpg"
          fill
          alt="coding image"
          className=" object-cover"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
      <Image
          src="/coding-2.jpg"
          fill
          alt="man coding image"
          className="rounded-2xl object-cover"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
       
        <Image
          src="/coding-3.jpg"
         fill
          alt="group of people coding image"
          className=" object-cover rounded-2xl"
        />
      </WobbleCard>
      
    </div>
  );
}
