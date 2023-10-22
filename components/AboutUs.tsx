import React from 'react'
import Button from './Button'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[10px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] capitalize"><span className='text-green-50'>about</span> us</h2>
          <p className="regular-20 text-gray-10 text-left">
At Codviser, we provide innovative and effective web and app development services to businesses of all sizes. Our team of experienced developers is passionate about creating custom solutions that meet the unique needs of our clients.
We offer a wide range of services, including:
Web development,
Mobile app development,
E-commerce development,
Content management systems,
Custom software development,
UX/UI design,
SEO and Digital marketing</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Learn More"
              icon="/play.svg"
              variant="btn_white"
              
            />
            
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/tech.svg" alt="people" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
