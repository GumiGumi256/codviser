import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full max-container padding-container">
      <h2 className="bold-40 lg:bold-60 mt-2 text-gray-50 text-center my-5 md:my-10">
        {" "}
        <span className="text-green-50">About</span> Us
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className=" flex w-full flex-1 flex-col items-center justify-center gap-12">
          <p className="regular-24 text-gray-50 text-left">
            Codviser is a dynamic and innovative software development company
            based in Uganda, dedicated to shaping the digital experiences of
            businesses and individuals across Africa. With a strong focus on
            modern web and mobile application development, Codviser leverages
            cutting-edge technologies to deliver scalable, secure, and
            user-centric solutions.
          </p>
          <span></span>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
           
        <Link href='/about-us'>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-green-90 text-lg flex gap-2  items-center text-gray-50 px-8 py-3 font-bold"
      >
       Learn More <ArrowRightCircleIcon className="w-5" />
      </HoverBorderGradient>
        </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/man-1.png"
            alt="man and woman with a laptop"
            width={480}
            height={470}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
