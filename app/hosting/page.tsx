import React from 'react'
import Link from 'next/link'
import HostingPackages from '@/components/HostingPackages'

const Hosting = () => {
  return (
    <section className="">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1 className="mb-4 tracking-tight bold-40 text-gray-50 md:bold-52">Designed to give you a seamless digital experience</h1>
          <p className="mb-5 font-light regular-24 text-gray-50">Our platform integrates all your digital needs in one place, providing an intuitive and efficient experience</p>
      </div>
      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <HostingPackages />
        
      </div>
  </div>
</section>
  )
}

export default Hosting