import React from 'react'

export default function BoardComplete({Complete,HeadTitle}) {
  return (
      <div className="flex flex-col  bg-[#F3F4F6] rounded-[10px] border-2">
    
      <div className="">
        <div className="flex flex-col w-[295px]  py-6 px-4 rounded-[10px] border-[#D1D5DC]">
          {/* Column Header */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#101828] capitalize font-instrument font-semibold text-[18px] leading-[27px] tracking-[-0.44px]">
              {HeadTitle}
            </p>

            <div className="w-[25px] h-[25px] rounded-full bg-white flex justify-center items-center">
              <p className="text-[#4A5565] font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px]">
                {Complete.length}
              </p>
            </div>
          </div>
            <div className=" ">
          {/* Cards */}
          {Complete.map((dataItems) => (
              <div
              key={dataItems.id}
              className="bg-white  rounded-[10px] border-[2px] border-[#DADCE0] p-3 mb-3"
              >
                
              <p className="text-[#101828] pb-4 font-medium text-[18px] leading-[24px] tracking-[-0.31px] font-sans">
                {dataItems.survey}
              </p>
              <p className="text-[#4A5565] font-instrument font-normal text-[16px] leading-5 tracking-[-0.15px]">
                {dataItems.content}
              </p>

              <div className="flex justify-between items-center mt-2">
                <p className="font-medium text-[12px] text-[#4A5565] leading-4 tracking-normal font-instrument">
                  {dataItems.point} points
                </p>

                <div className="w-[30px] h-[30px] rounded-full bg-[#585858] flex items-center justify-center text-white text-[14px]">
                  {dataItems.aka}
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
      </div>
    </div>
  )
}
