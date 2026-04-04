import React from 'react'

export default function DangerZone() {
  return (
    <div className='border border-[#DADCE0] rounded-[10px] pt-[25px] pb-[1px] px-[25px]'>
        <div className="text-[#E7000B] pb-8">
            <p className="capitalize font-instrument font-bold text-[20px] leading-[27px] tracking-[-0.44px]">danger zone</p>
        </div>
        <div className="border-2 w-[917] bg-[#FEF2F2] rounded-[10px] border-[#FFC9C9] px-[16px] py-[18px] flex justify-between items-center">
            <div>
                <p className="text-[#101828] pye-4 font-instrument font-bold text-[18px] leading-[20px] tracking-[-0.15px] capitalize">Delete All Projects</p>
                <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] capitalize text-[#4A5565]">Permanently delete all your projects and data</p>

            </div>
            <div>
                <button className="bg-[#E7000B] text-[#ffffff] rounded-[10px] py-[6px] px-[12px] capitalize">delete all</button>
            </div>
        </div>

         <div className="border-2 w-[917] my-4 bg-[#FEF2F2] rounded-[10px] border-[#FFC9C9] px-[16px] py-[18px] flex justify-between items-center">
           <div>
                <p className="text-[#101828] pye-4 font-instrument font-bold text-[18px] leading-[20px] tracking-[-0.15px] capitalize">Delete Account</p>
                <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] capitalize text-[#4A5565]">Permanently delete your account</p>
           </div>
          <div>
            <button className="bg-[#E7000B] text-[#ffffff] rounded-[10px] py-[6px] px-[12px] capitalize">delete account</button>
          </div>
        </div>
      
    </div>
  )
}
