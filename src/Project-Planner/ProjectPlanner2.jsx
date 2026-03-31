import React from "react";
import save from "./Save.jpg";
// <<<<<<< HEAD
import plusIcon from "./plusIcon1.png";
import trash from "./Trash2.jpg"
import left from '../Backend Component/image/ChevronLeft.png';
import right from '../Backend Component/image/ChevronRight.png';
// =======
import plusIcon from "./Plus.jpg";
import trash from "./Trash2.jpg";
import left from "../Backend Component/image/ChevronLeft.png";
import right from "../Backend Component/image/ChevronRight.png";
// >>>>>>> 8364e957c2df7980eaa3fe566794c4717d441931

export default function ProjectPlanner2({
  HandleSubmit = () => {},
  HandleChange = () => {},
  userInput = { projectName: "", description: "", sprintDuration: "", startDate: "", endDate: "", surveyLink: "", teamMembers: [{ name: "", role: "" }] },
  setUserInput = () => {},
  error = {}
}) {

  const handleAddMember = () => {
    setUserInput(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", role: "" }]
    }));
  };

  const handleRemoveMember = (index) => {
    setUserInput(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className="flex flex-col w-[967px] h-auto mt-[41px] mx-auto gap-[22px]">
        {/* Header */}
        <div className="flex justify-between items-center w-full h-[64px]">
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-[30px] font-bold text-[#101828]">Agile Project Planner</h1>
            <p className="text-[16px] text-[#4A5565]">Step 1 of 3</p>
          </div>
          <div className="relative w-[158px] h-[44px] rounded-[10px] border-[2px] border-[#DADCEO] flex items-center justify-center">
            <img src={save} alt="save" className="absolute left-[18px] w-[16px] h-[16px]" />
            <button type="button" className="ml-[44px]">Save as Draft</button>
          </div>
        </div>
        <div className="flex flex-col w-[967px] rounded-[10px] border py-10 px-[25px] text-[#FFFFFF] border-[#DADCEO] ">
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
                                <div className="container flex w-[40px] h-[40px] text-[#4A5565] rounded-[16777200px] bg-[#E5E7EB] items-center justify-center">
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
        {/* Project Inputs */}
        <div className=" flex flex-col rounded-[10px] border text[#FFFFFF] border-[#DADCEO] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
          {/* Project Name */}
          <div className="w-[768px] mx-auto py-10">
               <div className="flex flex-col gap-[4px] py-8">
            <label className="font-medium text-[14px]">Project Name <span className="text-red-600">*</span></label>
            <input
              name="projectName"
              value={userInput.projectName}
              onChange={HandleChange}
              className="border rounded-[10px] px-[16px] py-[8px]"
              placeholder="e.g Lagos Survey Execution"
            />
            {error.projectName && <p className="text-red-600">{error.projectName}</p>}
          </div>

          {/* Description */}
          <div className="flex py-8 flex-col gap-[4px]">
            <label className="font-medium text-[14px]">Description </label>
            <textarea
              name="description"
              value={userInput.description}
              onChange={HandleChange}
              className="border rounded-[10px] px-[16px] py-[8px] resize-none"
              placeholder="Provide a brief description..."
            />
            {/* {error.description && <p className="text-red-600">{error.description}</p>} */}
          </div>

          {/* Start & End Dates */}
          <div className="grid grid-cols-2 gap-[16px]">
            <div className="flex py-8 flex-col gap-[4px]">
              <label className="font-medium text-[14px]">Start Date </label>
              <input
                type="date"
                name="startDate"
                value={userInput.startDate}
                onChange={HandleChange}
                className="border rounded-[10px] px-[16px] py-[8px]"
              />
              {/* {error.startDate && <p className="text-red-600">{error.startDate}</p>} */}
            </div>
            <div className="flex py-8 flex-col gap-[4px]">
              <label className="font-medium text-[14px]">End Date </label>
              <input
                type="date"
                name="endDate"
                value={userInput.endDate}
                onChange={HandleChange}
                className="border rounded-[10px] px-[16px] py-[8px]"
              />
              {/* {error.endDate && <p className="text-red-600">{error.endDate}</p>} */}
            </div>
          </div>

          {/* Sprint Duration */}
          <div className="flex py-8 flex-col gap-[4px]">
            <label className="font-medium text-[14px]">Sprint Duration (days)</label>
            <input
              name="sprintDuration"
              value={userInput.sprintDuration}
              onChange={HandleChange}
              type="number"
              placeholder="14"
              className="border rounded-[10px] px-[16px] py-[8px]"
            />
          </div>

          {/* Survey Link */}
          <div className="flex flex-col gap-[4px]">
            <label className="font-medium text-[14px]">Link to Survey (Optional)</label>
            <input
              name="surveyLink"
              value={userInput.surveyLink}
              onChange={HandleChange}
              className="border rounded-[10px] px-[16px] py-[8px]"
              placeholder="https://..."
            />
          </div>

          {/* Team Members */}
          <div className="flex flex-col gap-[8px] py-8">
            <div className="flex justify-between items-center">
              <label className="font-medium text-[14px]">Team Members</label>
              <button type="button" onClick={handleAddMember} className="border rounded-[10px] px-3 py-2 flex items-center gap-2">
                <img src={plusIcon} alt="Add" className="w-[16px] h-[16px]" /> Add Member
              </button>
            </div>

            {userInput.teamMembers.map((member, idx) => (
              <div key={idx} className="flex gap-[12px] py-8 items-center">
                <input
                  type="text"
                  name={`teamName${idx}`}
                  data-index={idx}
                  value={member.name}
                  onChange={HandleChange}
                  placeholder="Member name"
                  className="border rounded-[10px] px-[16px] py-[8px] w-[50%]"
                />
                <input
                  type="text"
                  name={`teamRole${idx}`}
                  data-index={idx}
                  value={member.role}
                  onChange={HandleChange}
                  placeholder="Role"
                  className="border  rounded-[10px] px-[16px] py-[8px] w-[50%]"
                />
                <button type="button" onClick={() => handleRemoveMember(idx)}>
                  <img src={trash} alt="Delete" className="w-[16px] h-[16px]" />
                </button>
              </div>
            ))}
            {error.teamMembers && error.teamMembers.map((e, idx) => (
              <div key={idx} className="text-red-600 text-[12px]">
                {e.name && `Member ${idx + 1} Name: ${e.name}`} {e.role && `Role: ${e.role}`}
              </div>
            ))}
          </div>

          </div>
          {/* Navigation */}

        </div>
          <div className="flex justify-between my-8">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex gap-2 items-center px-4 py-2 border rounded-[10px]"
            >
              <img src={left} alt="back" /> Cancel
            </button>
            <button type="submit" className="flex gap-2 items-center px-4 py-2 bg-[#364153] text-white rounded-[10px]">
              Next <img src={right} alt="next" />
            </button>
          </div>
      </div>
    </form>
  );
}