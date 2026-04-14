import React from 'react'
import logo from "../image/brandLogo.png"
export default function NanBrand() {
  return (
    <div className='min-w-[202px] flex gap-3 items-center px-8'>
      <div>
        <img src={logo} alt="logo" className='md:w-auto  w-6' />
      </div>
      <div>
        <p className="font-instrument font-semibold text-[14px] md:text-[18.13px] leading-[28.2px] tracking-[-0.44px] text-[#101828];">
          GeoSurvey Planner
        </p>
      </div>

    </div>
  )
}
