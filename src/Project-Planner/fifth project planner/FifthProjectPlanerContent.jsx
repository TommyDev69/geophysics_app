    import save from "../../Backend Component/image/Save.png"
    import BoardValidation from "./BoardValidation";

    import right from "../../Backend Component/image/ChevronRight.png";
    import left from "../../Backend Component/image/ChevronLeft.png";
    // import BackLog from "./BackLog";
    import SprintView from "./SprintView";
    import Burndown from "./Burndown";
    import BackLogProductValidation from "./BackLogProductValidation";

    const FifthProjectPlannerContent = ({Result, activeId, setActiveId}) => {
        return ( 
            <div className="">
                <div className="flex  items-center justify-between">
                    <div className="flex flex-col gap-[4px] w-[314px]  font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
                        <h1 className="">Agile Project Planner</h1>
                        <p className="W-[72px] h-[24px] met-[0.5px] font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">Step 1 of 3</p>
                    </div>
                    <div className="relative w-[158px] py-[10px] rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center justify-center">
                        <img src={save}
                            alt="save"
                            className="absolute left-[18px]  top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
                        />
                        <button className="ml-[44px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px]">
                            Save as Draft
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-[967px] pb-40 rounded-[10px] py-[10px] px-[25px] text-[#FFFFFF] items-center  ">
                    <div className="flex w-[917px] py-[20px] justify-between pr-[0.01px] rounded-[10px] border border-[#DADCEO]">
                        <div className="flex w-[306px]  mt-3">
                            <div className="md:container flex flex-col w-[145px] gap-[8px] items-center justify-center">
                                <div className="container flex w-[40px] h-[40px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                                    <h1 >1</h1>
                                </div>
                                <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                    Project Setup
                                </span>
                            </div>
                            <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]">

                            </div>
                        </div>


                        <div className="flex w-[306px] h-[64px] mt-3">
                            <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
                                <div className="container flex w-[40px] h-[40px] text-[#4A5565] rounded-[16777200px] bg-[#E5E7EB] items-center justify-center">
                                    <h1 className="">2</h1>
                                </div>
                                <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                    Project Management
                                </span>
                            </div>
                            <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]"></div>
                        </div>


                        <div className="flex w-[306px]  mt-3">
                            <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
                                <div className="container flex w-[40px] h-[40px] rounded-[16777200px] text-[#4A5565] bg-[#E5E7EB] items-center justify-center">
                                    <h1 >3</h1>
                                </div>
                                <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                    Completion
                                </span>
                            </div>
                            {/* <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]">

                            </div> */}
                        </div>
                    </div>
                    <div className="rounded-[10px] mt-20 pb-20 border border-[rgb(218,220,224)]">

                    <div className="flex w-[912px] py-2 border-3  mx-auto bg-[#F9FAFB] ">
                        {Result.map((item) => (
                            <div key={item.id}>
                                <button
                                    onClick={() => setActiveId(item.id)}
                                    className={`w-[228px] text-black capitalize py-4 transition-all duration-200
                                        
                                        ${activeId === item.id 
                                            ? 'bg-white border-b-2 border-black rounded-t-md'
                                            : 'bg-[#F9FAFB] border-b-2 border-transparent'}
                                    `}
                                >
                                    {item.Topic}
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* Content */}
                    <div className="mt-6 w-full">
                        {activeId === 1 && <BackLogProductValidation />}
                        {activeId === 2 && <BoardValidation />}
                        {activeId === 3 && <SprintView />}
                        {activeId === 4 && <Burndown />}
                    </div>
                    {/* {<BackLog />} */}

                    {/* <BoardValidation />  */}
                    {/* <SprintView /> */}
                    {/* <Burndown /> */}
                    
                    </div>
                        
                </div>
                <div className="flex justify-between mx-auto pb-8">
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
        );
    }
    
    export default FifthProjectPlannerContent;