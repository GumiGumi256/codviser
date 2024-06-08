import Achievements from "@/components/achievements";
import { Testimonials } from "@/components/testimonials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WobbleImages } from "@/components/worbble-images";
import React from "react";

export default function AboutUsPage() {
  return (
    <main className=" max-container w-full mt-0 md:mt-10">
      <div>
        <div className="flexCenter flex-col mx-5 md:mx-0">
          <h1 className="bold-40 md:bold-84 text-gray-50 text-balance capitalize">
            bridging the Digital Divide for{" "}
            <span className="text-green-50">African Businesses</span>
          </h1>

          <p className="regular-24 mt-6 text-gray-50 w-full text-balance">
            Codviser is a dynamic and innovative software development company
            based in Uganda, dedicated to shaping the digital experiences of
            businesses and individuals across Africa. With a strong focus on
            modern web and mobile application development, Codviser leverages
            cutting-edge technologies to deliver scalable, secure, and
            user-centric solutions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-20 mx-5 md:mx-0">
          <div className="w-full md:max-w-[50%]">
            <h1 className="bold-40 md:bold-84 text-gray-50 text-balance capitalize">
              Empowering{" "}
              <span className="text-green-50">African Entrepreneurs</span> with
              Innovative Digital Solutions
            </h1>
            <p className="regular-24 mt-10 text-gray-50 w-full text-balance ">
              Our mission is to empower African businesses and entrepreneurs by
              providing world-class digital solutions that enhance their
              operational efficiency, market reach, and customer engagement. We
              strive to be the go-to partner for businesses looking to navigate
              the complexities of the digital landscape.
            </p>
          </div>
          <div className="flex-1 z-50">
            <WobbleImages />
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <div className="my-10">
      <h2 className="bold-40 lg:bold-60 mt-2 text-gray-50 text-center my-5 md:my-10"> Our <span className='text-green-50'>Impact</span></h2>
        <Achievements />
      </div>
      <div className="mb-10">
      <h2 className="bold-40 lg:bold-60 mt-2 text-gray-50 text-center"> Happy <span className='text-green-50'>Clients</span></h2>
      <Testimonials />
      </div>
    </main>
  );
}
