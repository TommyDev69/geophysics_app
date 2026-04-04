const UseStoryModal = ({closeModal}) => {
    return ( 
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      {/* Modal box */}
      <div className="w-[600px] p-[24px] bg-white border rounded-[10px] relative">
        <div className="w-[400px]">
          <p className="text-[#101828] font-instrument font-semibold text-[24px] leading-[28px] tracking-[-0.45px]">
            Add User Story
          </p>
        </div>

        {/* Form content here */}
        <div className="">
          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
              Title
            </label>
            <input
              type="text"
              className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]"
              placeholder="e.g Field Data Collection"
            />
          </div>

          {/* select section */}

          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
              Epic
            </label>
            <select className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]" placeholder="e.g Field Data Collection" >
              <option value='1'>select epic</option>
            </select>
          </div>


          <div className="flex gap-4">
            <div className="flex flex-col w-1/2 pt-[18px] pb-[12px]">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
                Priority
              </label>
              <select className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]" placeholder="e.g Field Data Collection" >
                <option value='1'>select epic</option>
              </select>
            </div>
            <div className="flex w-1/2 flex-col pt-[18px] pb-[12px]">
              <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
                Priority
              </label>
              <input
                type="text"
                className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
              Assigned
            </label>
            <input
              type="text"
              className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]"
              placeholder="e.g John Doe"
            />
          </div>

          <div className="flex flex-col pt-[18px] pb-[12px]">
            <label className="text-[#364153] pb-2 font-instrument font-medium text-[18px] leading-[20px] tracking-[-0.15px]">
              Description
            </label>
            <textarea
              cols={2}
              rows={2}
              className="border py-[14px] text-[16px] px-[16px] border-[#DADCE0] rounded-[10px]"
              placeholder="Describe the epic"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 justify-end mt-6">
          <button
            onClick={closeModal}
            className="w-[87px] border-2 flex justify-center items-center text-[#364153] border-[#DADCE0] rounded-[10px] py-[8px] px-[16px]"
          >
            Cancel
          </button>
          <button className="w-[117px] bg-[#585858] text-white flex justify-center items-center rounded-[10px] py-[8px] px-[16px]">
            Add Story
          </button>
        </div>
      </div>
        </div>
     );
}
 
export default UseStoryModal;