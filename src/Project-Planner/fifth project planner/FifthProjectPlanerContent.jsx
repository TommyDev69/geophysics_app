    import save from "../../Backend Component/image/Save.png"
    import BoardValidation from "./BoardValidation";

    import right from "../../Backend Component/image/ChevronRight.png";
    import left from "../../Backend Component/image/ChevronLeft.png";
    // import BackLog from "./BackLog";
    import SprintView from "./SprintView";
    import Burndown from "./Burndown";
    import BackLogProductValidation from "./BackLogProductValidation";

    const FifthProjectPlannerContent = ({Result, activeId, setActiveId, handleSubmit}) => {
      // const [showBacklog, setShowBacklog] = useState(false);  
      return ( 
            <form>

           <div className=" flex flex-col   mt-[41px] px-12  gap-[22px]">
                   <div className="flex min-w-[917px]  justify-between">
                     <div className="flex flex-col gap-[4px] w-[314px] font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
                       <h1 className="">Agile Project Planner</h1>
                       <p className="w-[72px] mt-[0.5px] font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">
                         Step 1 of 3
                       </p>
                     </div>
                     <div className="relative w-[158px] rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center justify-center">
                       <img
                         src={save}
                         alt="save"
                         className="absolute left-[18px]  top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
                       />
                       <button className="ml-[44px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px]">
                         Save as Draft
                       </button>
                     </div>
                   </div>
                   <div className="flex flex-col min-w-[917px] rounded-[10px] border py-[28px] text-[#FFFFFF] border-[#DADCEO] ">
                     <div className="flex min-w-[917px] ">
                       <div className="flex min-w-[306px]  mt-3">
                         <div className="md:container flex flex-col  gap-[8px] items-center justify-ce nter">
                           <div className="container flex w-[60px] text-[18px] h-[60px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                             <h1>1</h1>
                           </div>
                           <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                             Project Setup
                           </span>
                         </div>
                         <div className="w-[345px] h-[4px] mt-[18px] bg-[#E5E7EB] "></div>
                       </div>
           
                       <div className="flex min-w-[306px]  mt-3">
                         <div className="md:container flex flex-col  items-center justwify-center">
                           <div className="container flex w-[60px] text-[18px] h-[60px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                             <h1>2</h1>
                           </div>
                           <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                             Project Management
                           </span>
                         </div>
                         <div className="w-[345px] h-[4px] mt-[18px] bg-[#E5E7EB] "></div>
                       </div>
           
                       <div className="flex min-w-[306px]  mx-4 mt-3 ">
                         <div className="md:container flex flex-col  gap-[8px] items-center justify-center">
                           <div className="container flex w-[60px] text-[18px] h-[60px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                             <h1>3</h1>
                           </div>
                           <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                             Completion
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                    <div className="rounded-[10px] mt-20 pb-20 border border-[rgb(218,220,224)]">

                    <div className="flex min-w-[912px] py-2 border-3   bg-[#F9FAFB] ">
                        {Result.map((item) => (
                            <div key={item.id}>
                                <button
                                type="button"
                                    onClick={() => setActiveId(item.id)}
                                    className={`min-w-[308px] text-black text-[18px] capitalize py-4 transition-all duration-200
                                        
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
                
                <div className="flex justify-between px-16 py-4  mx-auto pb-8">
                    <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="flex gap-2 items-center justify-center w-[120px] py-[10px] px-[15px] rounded-[10px] border border-[#DADCE0] text-[#364153] font-medium text-[14px]"
                    >
                    <img src={left} alt="" />
                    Cancel
                    </button>
        
                   <button
  type="button"
  onClick={handleSubmit}
  className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
>
  Next
  <img src={right} alt="" />
</button>
                </div>
            
            </form>
        );
    }
    
    export default FifthProjectPlannerContent;