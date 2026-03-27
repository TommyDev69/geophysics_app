import React from 'react'
import Plus from '../../Backend Component/image/Plus.jpg'
export default function BackLogContent() {
  return (
    <div className='flex w-[883px] justify-between items-center my-20 px-5' >
        <p className='text-[#364153] capitalize font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px]'>use stories</p>
        <button className="border-[2px] py-4 border-[#DADCE0] text-[#364153Add story] w-[116px] gap-2 flex items-center rounded-[10px]">
             <div className="w-[16px] mx-2 ">
                <img src={Plus} alt="plus" />
             </div>
            <div className='w-[64px]'>
                <p className="text-[#364153] font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-center">Add story</p>
            </div>
        </button>
    </div>
  )
}
