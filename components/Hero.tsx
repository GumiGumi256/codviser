import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { BackgroundBeams } from './ui/background-beams'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FlipWords } from './ui/flip-text'
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid'

const Hero = () => {
  return (
    <section className="padding-container max-container w-full mt-0 md:mt-10">
      <div className='flexCenter flex-col'>
      <h1 className="bold-40 md:bold-84 text-gray-50 text-balance text-left md:text-center">
  Transform Your Brand with Cutting-Edge <FlipWords className='text-green-50' words={['Integrations', 'Automations', 'Creations', 'Innovations', 'Solutions']} />
</h1>

        <p className="regular-24 mt-6 text-gray-50 w-full text-balance text-left md:text-center">
        Ready to elevate your brand? Partner with our top designers today and embark on your success journey. Concerned about costs? Our competitive pricing offers premium design services affordably. Join over 30 satisfied brands worldwide
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
                  alt="rating"
                  width={24}
                  height={24}
                />
              ))}
            <p className="bold-16 lg:bold-20 text-gray-30" >
              30+
              <span className="regular-18 lg:regular-20 ml-2">Happy Customers</span>
            </p>
          </div>
        </div>

        <Link href='/contact-us'>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-green-90 text-lg flex items-center gap-2 text-gray-50 px-8 py-3 font-bold"
      >
        Get Started <ArrowRightCircleIcon className="w-5" />
      </HoverBorderGradient>
        </Link>
      </div>
      <BackgroundBeams />
    </section>
  )
}

export default Hero
