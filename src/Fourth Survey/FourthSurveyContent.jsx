import React from 'react'
import  info from '../Backend Component/image/Info.png'
import Ellipse from '../Backend Component/image/Ellipse 1.png'
export default function FourthSurveyContent() {
  return (
    <div className='w-full border px-[30px]   border-[#DADCE0]'>
       <div className="w-[917px] py-[14px]">
        <p className="w-[238px] font-instrument font-semibold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">Method Recommendation</p>
       </div>
       <div className="w-[917px] rounded-[10px] px-[20px] border py-[24px] border-[#D7D7D7] bg-[#FAFAFA]">
          <div className="w-[439px] py-6">
            <p className="font-instrument font-normal text-[16px] pb-4 leading-[28px] tracking-[-0.45px]">Primary Recommendation</p>
             <h1 className='text-[#101828] font-instrument font-semibold text-[24px] leading-[28px] tracking-[-0.45px]'>Electrical Resistivity Tomography (ERT)</h1>
          </div>
          <div className="w-[885px] pt-6 flex">
            <div className="w-[439px]">
              <div className="flex w-[182px] pb-6 items-center">
                <img src={info} alt="" className='w-[19px] h-[19px]'  />
                <div className="w-[439px]"> 
                  <p className="font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.45px]">Why this method?</p>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <img src={Ellipse} alt='' className='w-[11px] h-[11px]'/>
                </div>
                <div className="w-[443px]">
                  <p className="text-[#101828] font-instrument font-normal text-[14px] leading-[28px] tracking-[-0.45px]">Excellent for mapping aquifer boundaries and salinity interfaces.</p>
                </div>

              </div>

              <div className="flex items-center">
                <div>
                  <img src={Ellipse} alt='' className='w-[11px] h-[11px]'/>
                </div>
                <div className="w-[443px]">
                  <p className="text-[#101828] font-instrument font-normal text-[14px] leading-[28px] tracking-[-0.45px]">Optimal for target depth of 5m - 50m.</p>
                </div>

              </div>

              <div className="flex items-center">
                <div>
                  <img src={Ellipse} alt='' className='w-[11px] h-[11px]'/>
                </div>
                <div className="w-[443px]">
                  <p className="text-[#101828] font-instrument font-normal text-[14px] leading-[28px] tracking-[-0.45px]">Resilient to low ambient noise levels.</p>
                </div>

              </div>
            </div>

            <div className="w-[424px]  text-[#101828]">
              <p className="pb-6  font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.45px]">Field Technique Summary</p>
              <div className='border rounded-[10px] border-[#D8D8D8] py-[14px]'>

                <div className="flex  justify-between w-[400px] items-center">
                  <p className='w-[100px] text-[#6A7282] capitalize font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-center'>array types</p>
                  <p className="w-[151px] font-instrument font-semibold text-[14px] leading-[20px] tracking-[-0.15px] text-center">Wenner-Schlumberger</p>
                    </div>

                      <div className="flex rounded-[10px] justify-between w-[400px] pl-5 items-center">
                        <p className='w-[100wpx] text-[#6A7282] capitalize font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-center'>Electrode Spacing:</p>
                        <p className="w-[151px] font-instrument font-semibold text-[14px] leading-[20px] tracking-[-0.15px] text-center">5.0 meters</p>
                      </div>

                      
                      <div className="flex rounded-[10px] justify-between w-[400px] items-center pl-5">
                        <p className='w-[10w0px] text-[#6A7282] capitalize font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-center'>Max Depth of Invest:</p>
                        <p className="w-[151px] font-instrument font-semibold text-[14px] leading-[20px] tracking-[-0.15px] text-center">65 meters</p>
                      </div>
              </div>
            </div>
          </div>
       </div>

       <div className="w-[917px] bg-[#FAFAFA] border border-[#D7D7D7] my-8 rounded-[10px]">
        <p className="w-[185fpx] font-instrument font-semibold text-[20px] leading-[28px] tracking-[-0.45px] pt-4 px-6">Alternative Methods</p>
        <div className="w-[890px] py-2">
          <table className='w-full text-[#101828]'>
            <thead>
              <tr className='bg-[#EFEFEF]'>
                <th className=' flex justify-start pl-8 text-[18px] uppercase'>method</th>
                <th className='text-[18px] uppercase text-ceenter '>ACTION</th>
              </tr>
            </thead>

            <tbody className='bg-[#ffffff]'>
              <tr className=''>
                <td className='flex text-[16px]  justify-start pl-8 py-4'>Magnetic Survey</td>
                <td className='text-center text-[16px]'>select</td>
              </tr>

              <tr>
                <td className='flex text-[16px] justify-start pl-8'>Gavity Survey</td>
                <td className='text-center text-[16px]'>select</td>
              </tr>
            </tbody>
          </table>
        </div>
       </div>
    </div>
  )
}
