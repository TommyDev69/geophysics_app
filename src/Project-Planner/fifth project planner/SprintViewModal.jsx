import React from "react";

export default function SprintViewModal({
  closeModal,
  sprintForm,
  handleSprintChange,
  handleSubmit,
  errors,
  epics // optional: list of existing epics
}) {
  return (
    <div>
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        <div className="w-[600px] p-[24px] bg-[#ffffff] border rounded-[10px] relative">
          <h2 className="text-[#101828] font-instrument font-semibold text-[24px] leading-[28px] tracking-[-0.45px]">
            Add Sprint
          </h2>

          {/* Title */}
          <div className="flex flex-col pt-[18px] pb-[12px] text-[#364153]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={sprintForm.title}
              onChange={handleSprintChange}
              className="border py-[14px] px-[16px] text-[#364153] rounded-[10px] border-[#DADCE0]"
              placeholder="e.g Field Data Collection"
            />
            <p className="text-red-600">{errors.title}</p>
          </div>

          {/* Priority */}
          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
              Priority
            </label>
            <select
              name="priority"
              value={sprintForm.priority}
              onChange={handleSprintChange}
              className="border py-[14px] px-[16px] text-[#364153] rounded-[10px] border-[#DADCE0]"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <p className="text-red-600">{errors.priority}</p>
          </div>

          {/* Dates */}
          <div className="flex gap-4 pt-[18px] pb-[12px]">
            <div className="flex flex-col w-1/2">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={sprintForm.startDate}
                onChange={handleSprintChange}
                className="border py-[14px] px-[16px] text-[#364153] rounded-[10px] border-[#DADCE0]"
              />
              <p className="text-red-600">{errors.startDate}</p>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={sprintForm.endDate}
                onChange={handleSprintChange}
                className="border py-[14px] px-[16px] text-[#364153] rounded-[10px] border-[#DADCE0]"
              />
              <p className="text-red-600">{errors.endDate}</p>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
              Description
            </label>
            <textarea
              name="description"
              value={sprintForm.description}
              onChange={handleSprintChange}
              rows={4}
              className="border py-[14px] px-[16px] text-[#364153] rounded-[10px] border-[#DADCE0]"
              placeholder="Describe the sprint"
            />
            <p className="text-red-600">{errors.description}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 justify-end mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="w-[87px] border-2 flex justify-center items-center text-[#364153] border-[#DADCE0] rounded-[10px] py-[8px] px-[16px]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-[117px] bg-[#585858] text-white flex justify-center items-center rounded-[10px] py-[8px] px-[16px]"
            >
              Add Sprint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}