import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="padding-container max-container w-full mt-10 ">
      <div className='flexCenter flex-col'>
      <h1 className="bold-40 md:bold-84 text-gray-50 text-balance">
  Transform Your Brand with Cutting-Edge <span className='text-green-50'>Digital Solutions</span>
</h1>

        <p className="regular-24 mt-6 text-gray-50 w-full text-balance">
          Ready to take your brand to new heights? Join forces with our world-class designers today and start your journey toward success. Worried about costs? Our competitive pricing ensures top-notch design services without breaking the bank. Join our network of over 30 satisfied brands worldwide
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
          <Button
            type="button"
            title="Get started now"
            variant="btn_white"
            icon="/play.svg"
          />
        </Link>
      </div>
    </section>
  )
}

export default Hero
