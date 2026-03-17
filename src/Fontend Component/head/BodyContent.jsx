import React from 'react'

export default function BodyContent() {
  return (
    <div className='md:container min-w-[708]  mx-auto flex flex-col justify-center md:justify-start md:mt-[130px] mt-[120px]'>
        <div className=" w-1/2 pb-4 md:pt-0pt-8 md:pl-0 pl-8">
            <h1 className="font-instrument font-bold text-[18px] md:text-[77.82px] leading-[122%] tracking-[0.48px]">
                Plan Smarter. Survey Better
            </h1>
        </div>

        <div className=" w-10/12 md:w-5/12 md:pl-0 pl-8">
            <p className="font-instrument min-w-[726]   text-[#4A5565] text-10px md:text-[18px] leading-[100%] tracking-[-0.31px]">
                transforms how geoscientists plan, design, and manage surveys — combining WebGIS, terrain intelligence, and a rule-based recommendation engine, all built using Agile Scrum methodology.
            </p>

        </div>
      
    </div>
  )
}
