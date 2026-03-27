import Right from "../../Backend Component/image/Vector.png"
import BackLogContent from "./BackLogContent";
import down from '../../Backend Component/image/ChevronDown.png'

import { useState } from "react";
const BackLog = () => {
    const[tog, setTog] =useState(false)
    const toggling =() =>{
        setTog(!tog)

    }

    return (  
        <div className="border border-[#DADCE0] rounded-[10px]">

            <div className="py-2  w-[917px] border items-center rounded-[10px] border-[#DADCE0] bg-[#F9FAFB] flex gap-4">
                <div className="w-[30px] flex justify-center items-center">
                < img src={tog ? down : Right} onClick={toggling} alt='right' className=" " />

                </div>
                <div className="flex w-[783px]">
                    <div className="flex w-[100px] gap-4 flex-col">
                        <p className="text-black font-instrument font-semibold text-[16px] leading-[24px] tracking-[-0.31px]">
                            data design
                        </p>
                        <p className="text-[#4A5565] font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px]">food</p>
                    </div>
                        <div className="bg-[#F3F4F6] flex items-center justify-center w-[24px] h-[24px] border text-black rounded-full p-2 text-[10px]">low</div>
                </div>

                <div className="flex text-[#4A5565] font-instrument font-normal text-[14px] leading-[20px] tracking-[-0.15px]  w-[104px]">
                    <p>0 stories</p>
                </div>
                
            </div>
            
            {tog &&(
     
              <BackLogContent />
            )}
        </div>
    );
}
 
export default BackLog;