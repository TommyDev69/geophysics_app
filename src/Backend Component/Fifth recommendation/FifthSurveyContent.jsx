import ranges from '../image/ranges.png'
const FifthSurveyContent = () => {
    return ( 
        <div className="w-[967px] mx-auto border border-[#D7D7D7] rounded-[10px]">
            <div className="w-[917px]  text-[#101828] mx-auto">
                <p className="w-[302px] font-instrument font-semibold text-[20px] leading-[28px] tracking-[-0.45px] pt-[14px] pb-[10px]">Survey Area Definition </p>

                <div className="w-full bg-[#F9F9F9] border border-[#F9F9F9] px-5">
                    <p className="w-[282px] font-instrument font-semibold text-[16px] leading-[28px] tracking-[-0.45px] py-6 ">Layout Configuration</p>
                

                 <div className="w-[900px] px-10">
                    <p className="w-[500px] font-instrument font-medium text-[16px]  leading-[150%] tracking-[-0.05em] ">Layout Pattern</p>
                    <div className="w-full py-6">
                        <select className="py-[12px] w-[800px] rounded-[10px] px-10 " >
                            <option value='0'>choose your layout</option>
                        </select>
                    </div>
                    <div className="w-full flex  items-center">
                        <div>
                            <label className="w-[384px] text-[16px]">Station Spacing (m)</label>
                            <input type="number" className="py-[10px] w-[384px] rounded-[10px] pfl-[28px] pfr-[218px]" />
                        </div>

                        <div>
                            <label className="w-[384px] text-[16px]">Line Spacing (m)</label>
                            <input type="number" className="py-[10px] w-[384px] rounded-[10px] pl-[28pwx] pr-[2w18px]" />
                        </div>
                    </div>
                    <div className="w-[810px]  my-[10px]">
                        {/* <label className="w-8/12">Layout Pattern</label> */}
                        <img src={ranges} alt = 'range' className='w-full' />
                    </div>
                </div> 
            </div>  
            </div>
        </div>
     );
}
 
export default FifthSurveyContent;