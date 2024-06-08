"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinity-moving-cards"; 
import { testimonials } from "@/constants";

export function Testimonials() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

