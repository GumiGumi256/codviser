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
    <section className="max-container padding-container font-sans">
       <h2 className="bold-40 lg:bold-60 mt-8 text-gray-50 text-center my-5 md:my-10">
              Our <span className="text-green-50">Projects</span>
            </h2>
     
          
           
         
          <ul className=" grid gap-10 md:grid-cols-2 lg:gap-20">
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
                  className="rounded-lg object-cover"
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
       
    </section>
  );
};

export default Projects;

