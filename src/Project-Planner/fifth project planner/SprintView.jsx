import React from 'react'
import Plus from '../../Backend Component/image/Plus.png'
export default function SprintView() {
  return (
    <div className="flex flex-col">
        
    <div className='w-[917px] flex justify-between items-center'>

        <div className="w-[200px] flex flex-col items-center">
            <h3 className="w-[163px] font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.44px] text-[#101828]">Sprint Management</h3>
            <p className="text-[14px] w-[165px] font-instrument font-normal leading-[28px] tracking-[-0.44px] text-[#101828]">Manage your agile sprints</p>
        </div>

        <div className=" px-10 py-14">
            <button type="button" className='font-instrument py-4 px-6 font-medium text-[14px] leading-[20px] tracking-[-0.15px] bg-[#585858] rounded-[10px] text-[#FFFFFF] flex gap-2 items-center'>
                 <div>
                    <img src={Plus} alt="plus"  />
                 </div>
                 <div>
                    <p>Create Sprint</p>
                 </div>
            </button>
        </div>

      
    </div>

    <div className='px-6'>
        <p className="w-[503px] font-instrument font-semibold text-[16px] leading-[28px] tracking-[-0.44px] text-[#101828]">Planned Sprints</p>
    </div>
    </div>
  )
}
