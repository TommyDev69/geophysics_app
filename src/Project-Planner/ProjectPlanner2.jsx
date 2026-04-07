import React from "react";
import save from "./Save.jpg";
// <<<<<<< HEAD
import plusIcon from "./plusIcon1.png";
import trash from "./Trash2.jpg";
import left from "../Backend Component/image/ChevronLeft.png";
import right from "../Backend Component/image/ChevronRight.png";
// =======

// >>>>>>> 8364e957c2df7980eaa3fe566794c4717d441931

export default function ProjectPlanner2({
  HandleSubmit = () => {},
  HandleChange = () => {},
  userInput = {
    projectName: "",
    description: "",
    sprintDuration: "",
    startDate: "",
    endDate: "",
    surveyLink: "",
    teamMembers: [{ name: "", role: "" }],
  },
  setUserInput = () => {},
  error = {},
}) {
  const handleAddMember = () => {
    setUserInput((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, { name: "", role: "" }],
    }));
  };

  const handleRemoveMember = (index) => {
    setUserInput((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={HandleSubmit}>
      <div className=" flex flex-col w-[967px]  mt-[41px] px-12  gap-[22px]">
        <div className="flex w-[917px]  justify-between">
          <div className="flex flex-col  w-[314px] font-instrument font-bold text-[30px] leading-[36px] tracking-[0.4] text-[#101828]">
            <h1>Agile Project Planner</h1>
            <p className=" font-instrument font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-[#4A5565]">
              Step 1 of 3
            </p>
          </div>
          <div className=" px-4 rounded-[10px] border-[2px] border-[#DADCEO] flex gap-2 items-center">
            <img
              src={save}
              alt="save"
              
            />
            <button className=" font-instrument font-medium text-[16px] leading-[24px] tracking-[-0.31px]">
              Save as Draft
            </button>
          </div>
        </div>
        <div className="flex flex-col w-[917px] rounded-[10px] border py-[28px] text-[#FFFFFF] border-[#DADCEO] ">
          <div className="flex w-[917px] ">
            <div className="flex w-[306px]  mt-3">
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

            <div className="flex w-[306px]  mt-3">
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

            <div className="flex w-[306px]  mx-4 mt-3 ">
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
        {/* Project Inputs */}
        <div className=" flex flex-col w-[917px] rounded-[10px] border text[#FFFFFF] border-[#DADCEO] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
          {/* Project Name */}
          <div className="flex flex-col  w-[946px]  ml-[10s0px] gap-[4px]">
            <div className="min-w-[917px]   mt-[2pax] ">
              <div className=" font-instrument px-12 pt-8 pb-12 font-semiBold text-[20px] leading-[28px] tracking-[-0.45px] text-[#101828]">
                <h2>Project Setup</h2>
              </div>
            </div>
            <div className="px-40">

            <div className="flex flex-col gap-[4px] ">
              <label className="font-medium text-[14px]">
                Project Name <span className="text-red-600">*</span>
              </label>
              <input
                name="projectName"
                value={userInput.projectName}
                onChange={HandleChange}
                className="border rounded-[10px] px-[16px] py-4"
                placeholder="e.g Lagos Survey Execution"
              />
              {error.projectName && (
                <p className="text-red-600">{error.projectName}</p>
              )}
            </div>

            {/* Description */}
            <div className="flex py-8 flex-col gap-[4px]">
              <label className="font-medium text-[14px]">Description </label>
              <textarea
                name="description"
                value={userInput.description}
                onChange={HandleChange}
                className="border rounded-[10px] px-[16px] py-4 resize-none"
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
                  className="border rounded-[10px] px-[16px] py-4"
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
                  className="border rounded-[10px] px-[16px] py-4"
                />
                {/* {error.endDate && <p className="text-red-600">{error.endDate}</p>} */}
              </div>
            </div>

            {/* Sprint Duration */}
            <div className="flex py-8 flex-col gap-[4px]">
              <label className="font-medium text-[14px]">
                Sprint Duration (days)
              </label>
              <input
                name="sprintDuration"
                value={userInput.sprintDuration}
                onChange={HandleChange}
                type="number"
                placeholder="14"
                className="border rounded-[10px] px-[16px] py-4"
              />
            </div>

            {/* Survey Link */}
            <div className="flex flex-col gap-[4px]">
              <label className="font-medium text-[14px]">
                Link to Survey (Optional)
              </label>
              <input
                name="surveyLink"
                value={userInput.surveyLink}
                onChange={HandleChange}
                className="border rounded-[10px] px-[16px] py-4"
                placeholder="https://..."
              />
            </div>

            {/* Team Members */}
            <div className="flex flex-col gap-[8px] py-8">
              <div className="flex justify-between items-center">
                <label className="font-medium text-[14px]">Team Members</label>
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="border rounded-[10px] px-3 py-2 flex items-center gap-2"
                >
                  <img src={plusIcon} alt="Add" className="w-[16px] h-[16px]" />{" "}
                  Add Member
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
                    className="border rounded-[10px] px-[16px] py-4 w-[50%]"
                  />
                  <input
                    type="text"
                    name={`teamRole${idx}`}
                    data-index={idx}
                    value={member.role}
                    onChange={HandleChange}
                    placeholder="Role"
                    className="border  rounded-[10px] px-[16px] py-4 w-[50%]"
                  />
                  <button type="button" onClick={() => handleRemoveMember(idx)}>
                    <img
                      src={trash}
                      alt="Delete"
                      className="w-[16px] h-[16px]"
                    />
                  </button>
                </div>
              ))}
              {error.teamMembers &&
                error.teamMembers.map((e, idx) => (
                  <div key={idx} className="text-red-600 text-[12px]">
                    {e.name && `Member ${idx + 1} Name: ${e.name}`}{" "}
                    {e.role && `Role: ${e.role}`}
                  </div>
                ))}
            </div>
            </div>
          </div>
          {/* Navigation */}
        </div>
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
              next
              <img src={right} alt="" />
          </button>
        </div>
      </div>
    </form>
  );
}
