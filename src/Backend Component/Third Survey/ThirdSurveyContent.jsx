    import left from '../image/ChevronLeft.png'
    import right from '../image/ChevronRight.png'

    const ThirdSurveyContent = () => {
        return ( 
            <form>

                <div className=" w-full rounded-[10px]  border pb-8  border-[#DADCE0]">
                    <div className="w-[917px] mx-auto">
                        <p className="w-[190px] capitalize text-[#101828] font-instrument font-semibold text-[20px] leading-[28px] tracking-[-0.45px]">site characterisation</p>
                    </div>
                    <div className="flex gap-6 mx-auto w-[917px] ">
                        <div className="w-[480px] border px-5 pb-6 rounded-[10px] bwg-[#D7D7D7]">
                            <div className="w-[424px] py-6">
                                <p class="font-instrument font-semibold text-[20px]  text-[#101828] leading-[28px] tracking-[-0.45px]">Data retrieve (GIS)</p>
                            </div>
                            <div className="w-[424px] flex-col ">
                                <div className="w-[420px] bg-[#D8D8D8] my-4 border px-8 py-[12px] rounded-[10px] ">
                                    <div className="w-[88px]">
                                        <p class="font-instrument font-normal text-[20px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">length </p>
                                    </div>
                                    <div className="w-[172px] py-4">
                                        <p class="font-instrument font-semibold text-[30px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">0 </p>

                                    </div>
                                </div>

                                <div className="w-[420px] bg-[#D8D8D8] my-4 border px-8 py-[12px] rounded-[10px] ">
                                    <div className="w-[88px]">
                                        <p class="font-instrument font-normal text-[20px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">breath </p>
                                    </div>
                                    <div className="w-[172px] py-4">
                                        <p class="font-instrument font-semibold text-[30px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">0 </p>

                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <div className="w-[480px] px-4 border rounded-[10px] bg-[#D7D7D7]">
                            <div className="w-[424px]  capitalize px-5 py-6">
                                <p class="font-instrument font-semibold text-[20px]  text-[#101828] leading-[28px] tracking-[-0.45px]">user input</p>
                            </div>
                            <div className="w-[424px]">
                                <div className="w-[420px] bg-[#D8D8D8] rounded-[10px]">
                                    <div className="w-[288px] ">
                                        <p class="font-instrument font-normal text-[14px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">Vegetation Density </p>
                                    </div>
                                    <div className="flesx items-cewnter gap-4">

                                        <div className="">
                                            <select className="w-full border rounded-[10px] py-[16px] pl-[28px] pr-[216px]">
                                                <option value="" className="w-[132px]">west</option>
                                                <option value="" className="w-[132px]">north</option>
                                                <option value="" className="w-[132px]">east</option>
                                                <option value="" className="w-[132px]">south</option>
                                            </select>
                                        </div>
                                        <div className="w-[288px] pt-4">
                                            <p class="font-instrument font-normal text-[14px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">Ambient Noise </p>
                                        </div>
                                        <div className="w-w40">
                                            <select className="w-full border rounded-[10px] py-[12px] pl-[28px] pr-[216px]">
                                                <option value="" className="w-[132px]">west</option>
                                                <option value="" className="w-[132px]">north</option>
                                                <option value="" className="w-[132px]">east</option>
                                                <option value="" className="w-[132px]">south</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                
                                
                            </div>

                            <div className="w-[424px] pt-16 pb-6 fl ex">
                                <div className="w-[420px] bg-[#D8D8D8] ronded-[10px]">
                                    <div className="w-[544px]">
                                        <p class="font-instrument font-normal text-[20px]  text-[#101828] leading-[14px] tracking-[-0.45px] uppercase">Target Depth Range (m) </p>
                                    </div>
                                    <div className="flex">

                                        <div className="w-full">
                                            <select className="w-full border rounded-[10px] py-[12px] pl-[28px] pr-[216px]">
                                                <option value="" className="w-[132px]">west</option>
                                                <option value="" className="w-[132px]">north</option>
                                                <option value="" className="w-[132px]">east</option>
                                                <option value="" className="w-[132px]">south</option>
                                            </select>
                                        </div>

                                        {/* <div className="w-[204px]">
                                            <select className="w-full border rounded-[10px] py-[12px] pl-[28px] pr-[216px]">
                                                <option value="" className="w-[132px]">west</option>
                                                <option value="" className="w-[132px]">north</option>
                                                <option value="" className="w-[132px]">east</option>
                                                <option value="" className="w-[132px]">south</option>
                                            </select>
                                        </div> */}
                                    </div>

                                    <div className="w-w[329px] pt-[56px]">
                                        <p className="font-instrument font-medium text-[16px] leading-[150%] tracking-[-0.8px] pb-10 ">Site Constraints</p>
                                    <div className="flex justeify-around items-center">
                                        <div className=" w-[300px] mel-4 flex juswtify-center">
                                            <input type="checkbox" className="capitalize text-[14px] " />
                                            <label className="capitalize text-[14px] pl-4">power lines</label>
                                        </div>

                                        <div className=" w-[300px] flex ">
                                            <input type="checkbox"  className="pl-6"/>
                                            <label className="capitalize text-[14px] pl-4" >buried pipes</label>
                                        </div>
                                    </div>

                                    <div className="flex justify-waround items-center">
                                        <div  className=" w-[300px] " >
                                            <input type="checkbox" className="capitalize text-[14px] " />
                                            <label className="capitalize text-[14px] pl-4">protected area</label>
                                        </div>

                                        <div  className=" w-[300px] flex ">
                                            <input type="checkbox"  className=""/>
                                            <label className="capitalize text-[14px] pl-4" >water bodies</label>
                                        </div>
                                    </div>
                                    <div className="flex justify-awround items-center">
                                        <div className=" w-[300px] mel-4 flex juswtify-center" >
                                            <input type="checkbox" className="capitalize text-[14px] " />
                                            <label className="capitalize text-[14px] pl-4">steep slopes</label>
                                        </div>

                                        <div className=" w-[300px] flex ">
                                            <input type="checkbox"  className=""/>
                                            <label className="capitalize text-[14px] pl-4" >privat land</label>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                
                                
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-between px-6 mx-auto w-[] py-8">
                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"
                            >
                                <img src={left} alt="" />
                                Cancel
                            </button>
                    
                            <button
                                type="submit"
                                className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
                            >
                                Next
                                <img src={right} alt="" />
                            </button>
                    </div>

                </div>
            </form>
        );
    }
    
    export default ThirdSurveyContent;