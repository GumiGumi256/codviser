import { FEATURES } from '@/constants'
import Image from 'next/image'

const Services = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-gray-20  py-10 font-sans">
      <div className="max-container padding-container relative w-full flex justify-center">

        <div className="z-20 flex w-full flex-col lg:w-[95%]">
          <div className='relative'>
           
            <h2 className="bold-40 lg:bold-60 mt-5 text-green-10">Our <span className='text-orange-50'>Services</span></h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-10">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-orange-50">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-green-90 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Services