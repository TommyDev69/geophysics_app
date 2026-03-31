import save from "./Save.jpg";
import plusIcon from "./plusIcon1.png";
import trash from "./Trash2.jpg"
import left from '../Backend Component/image/ChevronLeft.png';
import right from '../Backend Component/image/ChevronRight.png';

export default function ProjectPlanner2({
      error = {},
    HandleSubmit = () => {},
    HandleChange = () => {},
    userInput = { projectName: "" }
}) {
    return (
         <form onSubmit={HandleSubmit}>

        <div className=" flex flex-col w-[967px] h-[1046px] mt-[41px] mx-auto gap-[22px]">
            <div className="flex w-[967px] h-[64px] justify-between">
                <div className="flex flex-col gap-[4px] w-[314px] h-[36px] font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
                    <h1 className="">Agile Project Planner</h1>
                    <p className="W-[72px] h-[24px] mt-[0.5px] font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">Step 1 of 3</p>
                </div>
                <div className="relative w-[158px] h-[44px] rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center justify-center">
                    <img src={save}
                        alt="save"
                        className="absolute left-[18px]  top-1/2 -translate-y-1/2 w-[16px] h-[16px]"
                    />
                    <button className="ml-[44px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px]">
                        Save as Draft
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-[967px] h-[900px] rounded-[10px] border py-[1px] px-[25px] text-[#FFFFFF] border-[#DADCEO] ">
                <div className="flex w-[917px] h-[64px] justify-between pr-[0.01px]">
                    <div className="flex w-[306px] h-[64px] mt-3">
                        <div className="md:container flex flex-col w-[145px] h-[64px] gap-[8px] items-center justify-center">
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
                            <div className="container flex w-[40px] h-[40px] text-[#FFFFFF] rounded-[16777200px] bg-[#585858] items-center justify-center">
                                <h1 className="">2</h1>
                            </div>
                            <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                Project Management
                            </span>
                        </div>
                        <div className="w-[145px] h-[4px] mt-[18px] bg-[#E5E7EB] ml-[8px]"></div>
                    </div>


                    <div className="flex w-[306px] h-[64px] mt-3">
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
            </div>
            <div className="w-[967px] h-[718px] rounded-[10px] border text[#FFFFFF] border-[#DADCEO] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col w-[768px] h=[693px] mt-[20px] gap-[16px] justify-center">
                    <div className="w-[917px] h-[28px] mt-[2px] ml-[25px]">
                        <div className="w-[124px] h-[28px] font-instrument font-semiBold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                            <h2>Project Setup</h2>
                        </div>
                    </div>
                    <div className="flex flex-col w-[768px] h-[693px] mt-[px] ml-[100px] gap-[16px]">
                        <div className="flex flex-col w-[768px] h-[70px] gap-[8px]">
                            <div className="w-[768px] h-[20px]">
                                <label htmlFor="" className="font-instrument mt-[0.5px] font-medium text-[14px] leading-[20px] tracking-[0.15px]">Project Name</label>
                                <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                            </div>
                            <input value={userInput?.projectName ?? ""} onChange={HandleChange} className="flex w-[768px] h-[42px] rounded-[10px] text-[#0A0A0A] border px-[16px] py-[8px] border-[#DADCEO]" placeholder="e.g Lagos Survey Execution" />
                                <p className="text-red-600">{error.projectName}</p>

                        </div>
                        <div className="flex flex-col h-[148px] gap-[8px]">
                            <label className="w-[768px] h-[20px] mt-[0.5px] font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                Description
                            </label>
                            <textarea name="" id="" className="flex h-[114px] rounded-[10px] text-[16px] border py-[8px] px-[16px] border-[#DADCEO] resize-none outline-none" placeholder="Provide a brief description of the project...">
                            </textarea>
                        </div>
                        <div className="container grid grid-cols-2 w-[768px] h-[70px] gap-[16px]">
                            <div className="">
                                <div className="w-full max-w-[376px] h-[70px] grid gap-2 row-start-1 col-start-1 row-span-1 col-span-1">
                                    <label htmlFor="" className="mt-[0.5px] fonst -instrument font-medium text-[16px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                        Start Date
                                    </label>
                                    <input type="text" className="h-[42px] rounded-[10px] border border-[#DADCEO]" />
                                </div>
                            </div>
                            <div className="">
                                <div className="w-full max-w-[376px] h-[70px] ml-[px] grid gap-2 row-start-1 col-start-2 row-span-1 col-span-1">
                                    <label htmlFor="" className="">
                                        End Date
                                    </label>
                                    <input type="text" className="h-[42px] rounded-[10px] border border-[#DADCEO]" />
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col w-[768px] h-[70px] gap-[8px] mt-[0.5px]">
                            <label htmlFor="" className="w-[768px] h-[20px]  font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                Sprint Duration (days)
                            </label>
                            <input
                                className="w-[768px] h-[42px] text-[#0A0A0A] rounded-[10px] placeholder:text-[#0A0A0A] border border-[#DADCEO] px-[16px] py-[8px]"
                                placeholder="14"
                            />
                        </div>
                        <div className="flex flex-col h-[67px] gap-[8px] mt-[0.5px]">
                            <label htmlFor="" className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                Link to Survey (Optional)
                            </label>
                            <select name="" id="" className="w-[768px] h-[39px] text-[#0A0A0A] rounded-[10px] border border-[#DADCEO] px-[16px] py-[8px]">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="flex flex-col w-[768px] h-[18px] gap-[12px]">
                            <div className="flex w-[768px] h-[90px] justify-between mt-[6px] cap-[12px]">
                                <label htmlFor="w-[100px] h-[20px] font-instrument font-medium leading-[20px] tracking-[-0.15px] text-[#364553]">
                                    Team Members
                                </label>
                                <button className=" h-[36px] rounded-[10px] border-2 border-[#DADCEO] flex items-center justify-center gap-2 px-2">
                                    <img src={plusIcon} alt="plus" className="w-[16px] h-[16px]" />
                                    <span>Add Member</span>
                                </button>
                            </div>
                            <div className="flex h-[42px] gap-[12px] items-center justify-center">
                                <div className="w-[352px] rounded-[10px] border py-[8px] px-[16px] border-[#DADCEO]">
                                    <input type="text" placeholder="Member name" />

                                </div>
                                <div className="w-[352px] rounded-[10px] border py-[8px] px-[16px] border-[#DADCEO]">
                                    <input type="text" placeholder="Role" />
                                </div>
                                <div className="w-[40px] mt-[7px] ml-[9]">
                                    <button>
                                        <img src={trash} alt="Delete" />
                                    </button>
                                </div>

                            </div>
                        </div>
                        {/* <div className="w-[768px] h-[340px] rounded-[10px] border-2 border-[#D1D5DC] flex flex-col items-center justify-center gap-4 mb-[20px]">
                            <p className="w-[764px] h-[24px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px] text-center text-[#6A7282]">
                                No team member added yet
                            </p>
                            <button className="w-[168px] h-[36px] rounded-[10px] flex items-center justify-center border-2 border-[#DADCEO] gap-2 px-2">
                                <img src={plusIcon} alt="plus" className="w-[16px] h-[16px]" />
                                <span>Add Member</span>
                            </button>
                        </div> */}
                    </div>

                </div>
            </div>
           <div className="flex justify-between px-6 py-8">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="flex gap-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] text-[#364153] font-medium text-[14px]"
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
    )
}
