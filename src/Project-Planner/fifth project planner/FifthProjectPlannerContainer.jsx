import React from 'react'
import FifthProjectPlannerValidation from './FifthProjectPlannerValidation'

export default function FifthProjectPlannerContainer() {
  return (
    <div className='container-fluid'>
      <FifthProjectPlannerValidation />
          <div className="w-[700px]  my-12 mx-auto p-[24px] bg-[#FFFFFF] border rounded-[10px]">
            <div className="w-[400px] ">
                <p className="text-[#101828] font-instrument font-semibold text-[24px] leading-[28px] tracking-[-0.45px]">Create New Epic</p>
            </div>

            <div className="">
              <div className='flex flex-col pt-[18px] pb-[12px]'>
                <label className=' text-[#364153] w-[29px] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]'>Title</label>
                <input type='text' className='border py-[14px]  text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]' placeholder='e.g Field Data Collection'/>
              </div>

              <div className='flex flex-col pt-[18px] pb-[12px]'>
                <label className=' text-[#364153] w-[29px] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]'>Description</label>
                <textarea cols={2} rows={4} className='border py-[14px]  text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]' placeholder=' Describe the epic'/>
              </div>

              <div className='flex flex-col pt-[18px] pb-[12px]'>
                <label className=' text-[#364153] w-[29px] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]'>Priority</label>
                <input type='text' className='border py-[14px]  text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]' />
              </div>
            </div>
                
                <div className="flex gap-6 justify-end font-instrument font-medium text-base leading-6 tracking-[-0.31px] text-center">
                  <button className=" w-[87px] border-2 flex justify-center items-center text-[#364153] border-[#DADCE0] rounded-[10px] py-[8px] px-[16px]">
                        Cancel
                  </button>

                   <button className=" w-[117px] bg-[#585858] text-[#ffffff] border-2 flex justify-center items-center  border-[#DADCE0] rounded-[10px] py-[8px] px-[16px]">
                        Create Epic
                  </button>
                </div>
          </div>
    </div>
  )
}
