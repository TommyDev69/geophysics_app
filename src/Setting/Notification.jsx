import React from 'react'

export default function Notification() {
  return (
    <div className='border border-[#DADCE0] rounded-[10px] py-[25px] px-[25px] my-8' >
        <div className="border w-[917] rounded-[10px] border-[#DADCE0] px-[16px] py-[18px] flex flex-col">
            <p className="text-[#101828] pye-4 font-instrument font-bold text-[18px] leading-[20px] tracking-[-0.15px] capitalize">email notification</p>
            <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] capitalize text-[#4A5565]">Receive email updates about your projects</p>
        </div>

         <div className="border w-[917] my-12 rounded-[10px] border-[#DADCE0] px-[16px] py-[18px] flex flex-col">
            <p className="text-[#101828] pye-4 font-instrument font-bold text-[18px] leading-[20px] tracking-[-0.15px] capitalize">Sprint Reminders</p>
            <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] capitalize text-[#4A5565]">Get reminded about sprint deadlines</p>
        </div>

         <div className="border w-[917] rounded-[10px] border-[#DADCE0] px-[16px] py-[18px] flex flex-col">
            <p className="text-[#101828] pye-4 font-instrument font-bold text-[18px] leading-[20px] tracking-[-0.15px] capitalize">Weekly Summary</p>
            <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] capitalize text-[#4A5565]">Receive weekly project summary reports</p>
        </div>
      
    </div>
  )
}
