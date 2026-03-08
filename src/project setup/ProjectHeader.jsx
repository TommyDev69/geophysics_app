import React from 'react'

export default function ProjectHeader() {
  return (
    <div className='py-10 flex-col mx-auto justify-center items-center md:w-[483px]'>
        <div>
            <h1 className="font-instrument font-bold text-[20px] md:text-[28px] leading-[122%] tracking-[0.34px] text-center text-[#101828]">
                How it works
            </h1>
        </div>

        <div>
            <h1 className="md:px-0 px-8 font-instrument font-bold text-[12px] md:text-[16px] leading-[122%] tracking-[0.34px] text-center text-[#111111]">
                A structured, step-by-step interface guides users from project idea to export-ready survey plan.
            </h1>
        </div>

      
    </div>
  )
}
