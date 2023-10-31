import Image from "next/image";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import Button from "./Button";
import Link from "next/link";

interface Project {
  _id: string;
  image: {
    asset: { _ref: string; _type: "reference" };
  };
  name: string;
  website: string;
}

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="flex-col flexCenter overflow-hidden  font-sans">
      <div className="max-container padding-container relative w-full flex justify-center">
        <div className="z-20 flex w-full flex-col lg:w-[95%]">
          <div className="relative">
            <h2 className="bold-40 lg:bold-60 mt-8 text-gray-50">
              Our <span className="text-green-50">Projects</span>
            </h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2  lg:mt-20 lg:gap-20">
            {projects.map((project) => (
              <li
                className="flex w-full flex-1 flex-col items-start"
                key={project._id}
              >
                <Image
                  src={urlForImage(project.image).url()}
                  alt="Project image"
                  width={500}
                  height={510}
                  className="rounded-[15px] object-cover"
                />
                <h2 className="bold-20 lg:bold-32 mt-2 capitalize text-green-50">
                  {project.name}
                </h2>
                <div className="mt-5">
                  <Link href={project.website} target="_blank">
                  <Button
         type="button"
         title="visit website"
         variant="btn_white"
         icon="/play.svg"
        />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

