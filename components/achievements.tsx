import React from 'react'
import { Button } from './ui/moving-borders'
import { ourAchievements } from '@/constants'

const Achievements = () => {
  return (
    <div className="w-full flex gap-5 flex-wrap justify-center">
    {ourAchievements.map((card) => (
      <Button
        key={card.id}
        //   random duration will be fun , I think , may be not
        duration={Math.floor(Math.random() * 10000) + 10000}
        borderRadius="1.75rem"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgba(10,22,32,1)",
          backgroundColor:
            "linear-gradient(90deg, rgba(10,22,32,1) 0%, rgba(5,11,14,1) 40%)",
          // add this border radius to make it more rounded so that the moving border is more realistic
          borderRadius: `calc(1.75rem* 0.96)`,
        }}
        // remove bg-white dark:bg-slate-900
        className="flex-1 text-gray-50 text-center  border-neutral-200 w-[300px]"
      >
        <div className="flex p-3 py-6 md:p-5 lg:p-8">
          
          <div className="lg:ms-5">
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold text-center">
              {card.number}
            </h1>
            <p className="text-white-100 mt-3 font-semibold regular-20">
              {card.subText}
            </p>
          </div>
        </div>
      </Button>
    ))}
  </div>
  )
}

export default Achievements