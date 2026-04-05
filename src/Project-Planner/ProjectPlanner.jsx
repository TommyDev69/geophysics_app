import save from "./Save.jpg";
import plusIcon from "../Backend Component/image/Plus.jpg";
import left from '../Backend Component/image/ChevronLeft.png';
import right from '../Backend Component/image/ChevronRight.png';
export default function ProjectPlanner({
    error = {},
    HandleSubmit = () => { },
    HandleChange = () => { },
    userInput = { projectName: "" },
    // availableUsers = [],
    // selectedTeamMemberId = "",
    onSelectTeamMember = () => { },
    onAddTeamMember = () => { },
    // teamMembers = [],
    onNext = () => [],

}) {
    return (
        <form onSubmit={HandleSubmit}>

            <div className=" flex flex-col min-w-[967px]  mt-[41px] px-12  gap-[22px]">
                 <div className="flex min-w-[917px]  justify-between">
                    <div className="flex flex-col gap-[4px] w-[314px] font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
                        <h1 className="">Agile Project Planner</h1>
                        <p className="w-[72px] mt-[0.5px] font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">Step 1 of 3</p>
                    </div>
                    <div className="relative w-[158px] rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center justify-center">
                        <img src={save}
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
                                <h1 >1</h1>
                            </div>
                            <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                Project Setup
                            </span>
                        </div>
                        <div className="w-[345px] h-[4px] mt-[18px] bg-[#E5E7EB] ">

                        </div>
                    </div>


                    <div className="flex min-w-[306px]  mt-3">
                        <div className="md:container flex flex-col  items-center justwify-center">
                            <div className="container flex w-[60px] text-[18px] h-[60px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                                <h1 >2</h1>
                            </div>
                            <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                Project Management
                            </span>
                        </div>
                        <div className="w-[345px] h-[4px] mt-[18px] bg-[#E5E7EB] ">

                        </div>
                    </div>


                    <div className="flex min-w-[306px]  mx-4 mt-3 ">
                        <div className="md:container flex flex-col  gap-[8px] items-center justify-center">
                            <div className="container flex w-[60px] text-[18px] h-[60px] rounded-[16777200px] bg-[#585858] items-center justify-center">
                                <h1 >3</h1>
                            </div>
                            <span className="mt-[1px] ml-[1px] font-instrument font-medium text-[12px] leading-[16px] tracking-[0px] text-[#585858]">
                                Completion
                            </span>
                        </div>
                        

                        
                    </div>
                </div>
            </div>
                <div className="py-6 rounded-[10px] border text[#FFFFFF] border-[#DADCEO] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col w-[768px] mt-[20px] gap-[16px] justify-center">
                        <div className="min-w-[917px] h-[28px] mt-[2px] ml-[25px]">
                            <div className="w-[124px] h-[28px] font-instrument font-semiBold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                                <h2>Project Setup</h2>
                            </div>
                        </div>
                        <div className="flex flex-col  min-w-[1128px] mt-[px] ml-[100px] gap-[16px]">
                            <div className="flex flex-col gap-[8px]">
                                <div>
                                    <label htmlFor="" className="font-instrument mt-[0.5px] font-medium text-[14px] leading-[20px] tracking-[0.15px]">Project Name</label>
                                    <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                </div>

                                <input name="projectName" className=" rounded-[10px] border border-[#DADCEO] py-4 px-[18px]" value={userInput?.projectName ?? ""} onChange={HandleChange} placeholder="e.g, Lagos Survey Execution" />
                                <p className="text-red-600">{error.projectName}</p>
                            </div>
                            <div className="flex flex-col  gap-[8px]">
                                <label className="w-[768px] h-[20px] mt-[0.5px] font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                    Description
                                    <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                </label>
                                <textarea name="description" id="" className="flex ] px-[18px] rounded-[10px] text-[16px] border border-[#DADCEO] resize-none outline-none" placeholder="Provide a brief description of the project..." value={userInput?.description ?? ""} onChange={HandleChange}>
                                </textarea>
                                <p className="text-red-600">{error.description}</p>
                            </div>
                            <div className=" grid grid-cols-2 min-w-[768px]  gap-[16px]">
                                <div className="">
                                    <div className="w-full min-w-[376px]  grid gap-2 row-start-1 col-start-1 row-span-1 col-span-1">
                                        <label htmlFor="" className="mt-[0.5px] font-instrument font-medium text-[16px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                            Start Date
                                            <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                        </label>
                                        <input type="date" name="startDate" className="py-4 rounded-[10px] border border-[#DADCEO] px-2" value={userInput?.startDate ?? ""} onChange={HandleChange} />
                                        <p className="text-red-600 text-sm">{error.startDate}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="w-full min-w-[376px] ml-[px] grid gap-2 row-start-1 col-start-2 row-span-1 col-span-1">
                                        <label htmlFor="" className="mt-[0.5px] font-instrument font-medium text-[16px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                            End Date
                                            <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                        </label>
                                        <input type="date" name="endDate" className="py-4 rounded-[10px] border border-[#DADCEO] px-2" value={userInput?.endDate ?? ""} onChange={HandleChange} />
                                        <p className="text-red-600 text-sm">{error.endDate}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="flex flex-col min-w-[768px] h-[70px] gap-[8px] mt-[0.5px]">
                                <label htmlFor="" className="w-[768px]  font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                    Sprint Duration (days)
                                </label>
                                <input
                                    className="ww-[768px] py-4 placeholder:text-[#0A0A0A] rounded-[10px] border border-[#DADCEO] px-[16px] "
                                    placeholder="14"
                                />
                            </div>
                            <div className="flex flex-col  gap-[8px] mt-[0.5px]">
                                <label htmlFor="" className="font-instrument font-medium text-[14px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                    Link to Survey (Optional)
                                </label>
                                <select name="" id="" className="min-w-[768px] py-4 text-[#0A0A0A] rounded-[10px] border border-[#DADCEO] px-[16px] ]">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="flex min-w-[768px] justify-between gap-[12px]">
                                <div className="flex   mt-[6px]">
                                    <label htmlFor="w-[100px] font-instrument font-medium leading-[20px] tracking-[-0.15px] text-[#364553]">
                                        Team Members
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button type="button" onClick={() => {
                                        onAddTeamMember();   // keep your logic
                                        onNext(2);
                                    }}
                                        className=" w-[138px] h-[36px] py-4 rounded-[10px] border-2 border-[#DADCE0] flex items-center justify-center gap-2 px-2">
                                        <img src={plusIcon} alt="plus" className="w-[16px] " />
                                        <span>Add Member</span>
                                    </button>
                                </div>
                                {/* <div className="max-h-[140px] overflow-auto border border-[#DADCEO] rounded-[10px] p-2">
                                    {teamMembers?.length > 0 ? (
                                        teamMembers.map((member) => (
                                            <div key={member._id || member.email} className="flex justify-between py-1 px-2 border-b last:border-b-0">
                                                <span>{member.fullName || member.email}</span>
                                                <span className="text-xs text-gray-500">{member.role || 'user'}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p35 className="text-gray-400">No team member added yet</p35    h-[36px]                                 )}
                                </div> */}
                            </div>

                            <div className="py-4 rounded-[10px] border-2 border-[#D1D5DC] flex flex-col items-center justify-center gap-4 mb-[20px]">
                                <p className="w-[764px] h-[24px] font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px] text-center text-[#6A7282]">
                                    No team member added yet
                                </p>
                                <button className="rounded-[10px] flex items-center justify-center border-2 border-[#DADCEO] gap-2 px-2 py-4">
                                    <img src={plusIcon} alt="plus" className="w-[16px] h-[16px]" />
                                    <span>Add First Member</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* BUTTONS */}
                <div className="flex justify-between px-6 py-8">
                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="flex gap-2 border-2 justify-center items-center w-[120px] py-[10px] px-[15px] rounded-[10px] text-[#364153] font-medium text-[14px]"
                    >
                        <img src={left} alt="" />
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="flex capitalize gap-2 justify-center items-center  py-[10px] px-[15px] rounded-[10px] bg-[#364153] text-white font-medium text-[14px]"
                    >
                        create project
                        <img src={right} alt="" />
                    </button>
                </div>
            </div>

        </form>
    )
}
