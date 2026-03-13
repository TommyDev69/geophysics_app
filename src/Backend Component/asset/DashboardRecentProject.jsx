import React from 'react'

export default function DashboardRecentProject() {
  return (
    <div className='md:mx-0 mx-auto w-11/12 md:w-[967px] py-8'>
        <div className="flex justify-between items-center>">
            <h1 className="font-instrument font-bold md:text-[20px] leading-[32px] tracking-[0.07px]">Recent Projects</h1>
            <div className='w-[95px]'>
                <button type="button" className='rounded-[10px] border-2 py-[8px] px-[18px] border-[#DADCE0] capitalize'>view all</button>
            </div>
        </div>

    </div>
  )
}
