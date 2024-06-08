"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

interface Project {
    _id: string;
    image: {
      asset: { _ref: string; _type: "reference" };
    };
    name: string;
    website: string;
  }
  
export function AnimatedCard({project}:{project: Project}) {
  return (
    <div className="w-[400px] h-[400px]">
      <PinContainer
        title={project.name}
        href={project.website}
        className=""
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {project.name}
          </h3>
          {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div> */}
          <div>
          <Image
                  src={urlForImage(project.image).url()}
                  alt="Project image"
                  width={300}
                  height={310}
                  className="rounded-lg object-cover"
                /> 
          </div>
        </div>
          <a  target='_blank' href={project.website} className="text-gray-50 font-bold flex gap-2 items-center">Visit site <ArrowRightIcon className="w-5" /></a>
      </PinContainer>
    </div>
  );
}
