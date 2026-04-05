import React from 'react'
import BarChart from '../../Backend Component/image/barchart.png'
export default function Burndown() {
  return (
    <div className=' w-[917px] py-32 flex flex-col justify-center items-center'>
      <img src={BarChart} alt='barchart' />
      <div className='my-10'>
        <p className=" px-6 font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.44px] text-[#101828]">No Active Sprint</p>
      </div>
      <div>
        <p className=" font-instrument font-normal text-[16px] leading-[28px] tracking-[-0.44px] text-[#101828]">Start a sprint to view the burndown chart</p>
      </div>
    </div>
  )
}
