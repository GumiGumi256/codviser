import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full max-container padding-container">
       <h2 className="bold-40 lg:bold-60 mt-2 text-gray-50 text-center my-5 md:my-10"> <span className='text-green-50'>About</span> Us</h2>
      <div className="flex flex-col md:flex-row">
        <div className=" flex w-full flex-1 flex-col items-center justify-center gap-12">
       
          <p className="regular-24 text-gray-50 text-left">
            At Codviser, we provide innovative and effective web and app
            development services to businesses of all sizes. Our team of
            experienced developers is passionate about creating custom solutions
            that meet the unique needs of our clients. We offer a wide range of
            services, including: Web development, Mobile app development,
            E-commerce development, Content management systems, Custom software
            development, UX/UI design, SEO and Digital marketing
          </p>
          <span></span>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Link href='/contact-us'>
            <Button
              type="button"
              title="Contact Us"
              icon="/play.svg"
              variant="btn_white"
            />
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/man-1.png" alt="man and woman with a laptop" width={480} height={470} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
