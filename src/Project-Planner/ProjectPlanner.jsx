import save from "./Save.jpg";
import plusIcon from "../Backend Component/image/Plus.jpg";
import left from "../Backend Component/image/ChevronLeft.png";
import right from "../Backend Component/image/ChevronRight.png";

export default function ProjectPlanner({
  error = {},
  HandleSubmit = () => {},
  HandleChange = () => {},
  userInput = { projectName: "" },
  onSelectTeamMember = () => {},
  onAddTeamMember = () => {},
  onNext = () => {},
  handleSaveToDraft = () => {},
}) {
  return (
    <form onSubmit={HandleSubmit}>
      <div className="flex flex-col w-[967px] mt-[41px] px-12 gap-[22px]">
        
        {/* HEADER */}
        <div className="flex w-[917px] justify-between">
          <div className="flex flex-col w-[314px] font-instrument font-bold text-[30px] text-[#101828]">
            <h1>Agile Project Planner</h1>
            <p className="font-normal text-[16px] text-[#4A5565]">
              Step 1 of 3
            </p>
          </div>

          <div className="px-4 rounded-[10px] border-2 border-[#DADCEO] flex gap-2 items-center">
            <img src={save} alt="save" />
            <button type="button" onClick={() => handleSaveToDraft()} className="front-instrument font-medium text-[16px]">
              Save as Draft
            </button>
          </div>
        </div>

        {/* STEPS */}
        <div className="flex flex-col w-[917px] rounded-[10px] border py-[28px] border-[#DADCEO]">
          <div className="flex w-full justify-between px-4">
            
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="flex w-[60px] h-[60px] rounded-full bg-[#585858] items-center justify-center text-white">
                  {step}
                </div>
                <span className="text-[12px] text-[#585858] mt-2">
                  {step === 1 && "Project Setup"}
                  {step === 2 && "Project Management"}
                  {step === 3 && "Completion"}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* FORM BODY */}
        <div className="py-6 rounded-[10px] w-[917px] border border-[#DADCEO] shadow-sm">
          <div className="flex flex-col w-[768px] mx-auto gap-[16px]">

            <h2 className="text-[20px] font-semibold text-[#101828]">
              Project Setup
            </h2>

            {/* PROJECT NAME */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium">
                Project Name <span className="text-red-500">*</span>
              </label>

              <input
                name="projectName"
                className="w-full rounded-[10px] border border-[#DADCEO] py-4 px-[14px]"
                value={userInput?.projectName ?? ""}
                onChange={HandleChange}
                placeholder="e.g, Lagos Survey Execution"
              />

              <p className="text-red-600">{error.projectName}</p>
            </div>
                <div className="py-6 rounded-[10px] w-[917px] border text[#FFFFFF] border-[#DADCEO] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col w-[768px] mt-[20px] gap-[16px] justify-center">
                        <div className="w-[917px] h-[28px] mt-[2px] ml-[25px]">
                            <div className="w-[124px] h-[28px] font-instrument font-semiBold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                                <h2>Project Setup</h2>
                            </div>
                        </div>
                        <div className="flex flex-col mt-[px] ml-[100px] gap-[16px]">
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
                                    <div className="w-[376px]  grid gap-2 row-start-1 col-start-1 row-span-1 col-span-1">
                                        <label htmlFor="" className="mt-[0.5px] font-instrument font-medium text-[16px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                            Start Date
                                            <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                        </label>
                                        <input type="date" name="startDate" className="py-4 rounded-[10px] border border-[#DADCEO] px-2" value={userInput?.startDate ?? ""} onChange={HandleChange} />
                                        <p className="text-red-600 text-sm">{error.startDate}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="w-[376px] ml-[px] grid gap-2 row-start-1 col-start-2 row-span-1 col-span-1">
                                        <label htmlFor="" className="mt-[0.5px] font-instrument font-medium text-[16px] leading-[20px] tracking-[-0.15px] text-[#364153]">
                                            End Date
                                            <span className="font-instrument font-medium text-[14px] text-[#FF0000] leading-[20px] tracking-[-0.15px]">*</span>
                                        </label>
                                        <input type="date" name="endDate" className="py-4 rounded-[10px] border border-[#DADCEO] px-2" value={userInput?.endDate ?? ""} onChange={HandleChange} />
                                        <p className="text-red-600 text-sm">{error.endDate}</p>
                                    </div>
                                </div>

            {/* SPRINT */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium">
                Sprint Duration (days)
              </label>

              <input
                name="sprint"
                className="w-full py-4 rounded-[10px] border border-[#DADCEO] px-[16px]"
                placeholder="14"
                onChange={HandleChange}
              />
            </div>

            {/* TEAM */}
            <div className="flex justify-between items-center">
              <label className="text-[14px] font-medium">
                Team Members
              </label>

              <button
                type="button"
                onClick={() => {
                  onAddTeamMember();
                  onNext(2);
                }}
                className="flex items-center gap-2 px-4 py-2 border rounded-[10px]"
              >
                <img src={plusIcon} alt="plus" className="w-[16px]" />
                Add Member
              </button>
            </div>

            {/* EMPTY STATE */}
            <div className="py-6 border rounded-[10px] flex flex-col items-center gap-4">
              <p className="text-[#6A7282]">
                No team member added yet
              </p>

              <button className="flex items-center gap-2 border px-4 py-2 rounded-[10px]">
                <img src={plusIcon} alt="plus" className="w-[16px]" />
                Add First Member
              </button>
            </div>

          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between w-[917px] py-8">
          
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex gap-2 items-center border px-4 py-2 rounded-[10px]"
          >
            <img src={left} alt="back" />
            Cancel
          </button>

          <button
            type="submit"
            className="flex gap-2 items-center px-4 py-2 rounded-[10px] bg-[#364153] text-white"
          >
            Create Project
            <img src={right} alt="next" />
          </button>

        </div>
      </div>
    </form>
  );
}