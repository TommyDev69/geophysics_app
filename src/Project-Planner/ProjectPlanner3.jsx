// import save from "./Save.jpg"
// import Plus from "../Backend Component/image/Plus.png"
// import back from "./back.jpg"
// import forward from "./forward1.png"
// import svg from "./svg.png"

// // import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// // import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shadcn/ui";
// export default function ProjectPlanner3() {
//     return (
//         // <div className=" flex flex-col w-full md:w-[967px] bg-red-800 md:mx-auto h-[1046px] mt-[81px] ml-[8px] gap-[22px]">
//         //     <div className="flex w-[967px]  justify-between">
//         //         <div className="flex flex-col gap-[4px] w-[314px] font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
//         //             <h1 className="">Agile Project Planner</h1>
//         //             <p className="W-[72px] h-[24px] mt-[0.5px] font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">Step 1 of 3</p>
//         //         </div>
//         //         <div className="relative w-[158px] h-[44px] rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center justify-center">
//         //             <img src={save}
//         //                 alt="save"
//         //                 className="absolute left-[18px]  top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
//         //             />
//         //             <button className="ml-[44px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px]">
//         //                 Save as Draft
//         //             </button>
//         //         </div>
//         //     </div>
//         //     <div className="flex flex-col w-[967px] h-[90px] rounded-[10px] border py-[1px] px-[25px] text-[#FFFFFF] border-[#DADCEO] ">
//         //         <div className="flex w-[917px] h-[64px] justify-between pr-[0.01px]">
//         //             <div className="flex w-[306px] h-[64px] mt-3">
//         //                 <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
//         //                     <div className="container flex w-[40px] h-[40px] rounded-[16777200px] bg-[#585858] items-center justify-center">
//         //                         <h1 >1</h1>
//         //                     </div>
//         //                     <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
//         //                         Project Setup
//         //                     </span>
//         //                 </div>
//         //                 <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]">

//         //                 </div>
//         //             </div>


//         //             <div className="flex w-[306px] h-[64px] mt-3">
//         //                 <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
//         //                     <div className="container flex w-[40px] h-[40px] text-[#4A5565] rounded-[16777200px] bg-[#E5E7EB] items-center justify-center">
//         //                         <h1 className="">2</h1>
//         //                     </div>
//         //                     <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
//         //                         Project Management
//         //                     </span>
//         //                 </div>
//         //                 <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]"></div>
//         //             </div>


//         //             <div className="flex w-[306px] h-[64px] mt-3">
//         //                 <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
//         //                     <div className="container flex w-[40px] h-[40px] rounded-[16777200px] text-[#4A5565] bg-[#E5E7EB] items-center justify-center">
//         //                         <h1 >3</h1>
//         //                     </div>
//         //                     <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
//         //                         Completion
//         //                     </span>
//         //                 </div>
//         //                 {/* <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]">

//         //                 </div> */}
//         //             </div>
//         //         </div>
//         //     </div>
//             <div className="container w-[967px] h-[580px] rounded-[10px] border border-[#DADCEO]">
//                 <div className="flex w-[965px] h-[55px] gap-[12px] border-b justify-between px-[24px] mt-[1px] ml-[1px] mx-[4px] pt-[4px] text-[##F9FAFB] border-[#DADCEO]">
//                     {/* <button>Backlog</button> */}
//                     <a href="#">Backlog</a>
//                     <a href="#">Backlog</a>
//                     <a href="#">Backlog</a>
//                     <a href="#">Backlog</a>
//                 </div>

//                 <div className="flex w-[917px] h-[32px] justify-between mx-auto mt-[30px] gap-[16px] ml-[25px]">
//                     <div className="w-[139px] h-[28px] font-instrument font-semibold text-[18px] leading-[28px] tracking-[-0.44px] text-[#101828]">
//                         <h3>Product Backlog</h3>
//                     </div>
//                     <div className="w-[107px] h-[32px] rounded-[10px] bg-[#585858] flex items-center justify-center gap-2">
//                         <img src={Plus} className="w-[16px] h-[16px]" alt="PlusIcon" />
//                         <p className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-white">
//                             New Epic
//                         </p>
//                     </div>
//                 </div>
//                 <div className="w-[917px] h-[236px] mt-[128px] ml-[13px]">
//                    <div className="container flex items-center justify-center w-[64px] h-[64px] mt-[48px] ml-[427px] rounded-full bg-[#F3F4F6]">
//                         <img src={svg} className="w-[32px] h-[32px]" alt="Svg" />
//                     </div>
//                     <div className="mt-[12px] ml-[400px] font-instrument text-semibold text-[18px] leading-[28px] tracking-[-0.44px] text-[#101828] items-center justify-center">
//                         <h3>No Epics Created</h3>
//                     </div>
//                     <div className="mt-[12px] font-instrument text-normal text-[16px] leading-[24px] tracking-[-0.31px] items-center justify-center text-[#4A5565]">
//                         <p className="mt-[0.5px] ml-[250px]">
//                             Start by braking down your project into Epics and User Stories.
//                             </p>
//                     </div>
//                     <div className="flex w-[187px] h-[50px] mt-[12px] ml-[369px] text-[#FFFFFF] rounded-[10px] py-[15px] px-[25px] gap-[8px] bg-[#585858] items-center justify-center">
//                         <img src={Plus} className="w-[16px] h-[16px]" alt="plusIcon" />
//                         <button>Create First Epic</button>
//                     </div>

//                 </div>

//             </div>
//             <div className="flex w-=[967px] h-[44px] justify-between m-[9.5px]">
//                 <button className="w-[96px] h-[44px] font-instrument font-medium gap-2 text-[16px] leading-[24px] tracking-[-0.31px] flex items-center justify-center text-[#364153] rounded-[10px] border-2 opacity-[50%] bg-[#FFFFFF] border-[#DADCEO]">
//                     <img src={back} alt="back" className="w-[8px] h-[8px] ml-[6px] border" />

//                     <span>Back</span>

//                 </button>
//                 <button className="w-[91px] bg-[#585858] h-[40px] font-instrument font-medium gap-2 text-[16px] leading-[24px] tracking-[-0.31px] flex items-center justify-center text-[#FFFFFF] rounded-[10px] border-2 border-[#DADCEO]">

//                     {/* <span className="">Next</span> */}
//                     Next
//                     <img src={forward} alt="forward" className="w-[8px] h-[8px] ml-[6px]" />

//                 </button>
//             </div>
//         </div>
//     )
// }
