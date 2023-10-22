import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section   className="padding-container max-container flex flex-col
    gap-20 py-10 pb-32 md:gap-28 lg:py-20">
    <div className='flexCenter flex-col lg:max-w-[1050px] mx-auto'>
    <h1 className="bold-40 lg:bold-84 text-gray-30 text">We make great digital products
for <span className='text-green-50'>innovative</span> brands.</h1>
        <p className="regular-24 mt-6 text-gray-30 xl:max-w-[520px]">
        Get your desired design services from our talented designers,
around the world at a reasonable cost
        </p>
        <div className="my-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
          <p className="bold-16 lg:bold-20 text-gray-50">
              5.0 rating 
             
            </p>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  key={index}
                  src="/star.svg"
                  alt="star image"
                  width={24}
                  height={24}
                />
              ))}
            <p className="bold-16 lg:bold-20 text-gray-30" >
               25+
              <span className="regular-18 lg:regular-20 ml-2">Happy Clients</span>
            </p>
          </div>
        </div>
        <Button
         type="button"
         title="Get started"
         variant="btn_white"
         icon="/play.svg"
        />
    </div>
   
    </section>
  )
}

export default Hero
