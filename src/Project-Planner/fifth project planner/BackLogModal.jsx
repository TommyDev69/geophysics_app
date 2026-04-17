import React from "react";

export default function BackLogModal({
  closeModal,
  errors,
  epicForm,
  handleEpicChange,
  handleSubmit,
}) {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
        
        {/* Modal */}
        <div className="w-[600px] p-[24px] bg-white border rounded-[10px] relative">
          
          {/* Title */}
          <div className="w-[400px]">
            <p className="text-[#101828] font-instrument font-semibold text-[24px] leading-[28px] tracking-[-0.45px]">
              Create New Epic
            </p>
          </div>

          {/* Form */}
          <div className="text-[#101828]">
            
            {/* TITLE */}
            <div className="flex flex-col pt-[18px] pb-[12px]">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={epicForm.title}
                onChange={handleEpicChange}
                className="border py-[14px] px-[16px] border-[#DADCE0] rounded-[10px]"
                placeholder="e.g Field Data Collection"
              />
              <p className="text-red-600">{errors.title}</p>
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col pt-[18px] pb-[12px]">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
                Description
              </label>
              <textarea
                rows={4}
                name="description"
                value={epicForm.description}
                onChange={handleEpicChange}
                className="border py-[14px] px-[16px] border-[#DADCE0] rounded-[10px]"
                placeholder="Describe the epic"
              />
              <p className="text-red-600">{errors.description}</p>
            </div>

            {/* PRIORITY */}
            <div className="flex flex-col pt-[18px] pb-[12px]">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px]">
                Priority
              </label>
              <input
                type="text"
                name="priority"
                value={epicForm.priority}
                onChange={handleEpicChange}
                className="border py-[14px] px-[16px] border-[#DADCE0] rounded-[10px]"
              />
              <p className="text-red-600">{errors.priority}</p>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-6 justify-end mt-6">
            <button
              onClick={closeModal}
              type="button"
              className="w-[87px] border-2 text-[#364153] border-[#DADCE0] rounded-[10px] py-[8px] px-[16px]"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              type="button"
              className="w-[117px] bg-[#585858] text-white rounded-[10px] py-[8px] px-[16px]"
            >
              Create Epic
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}