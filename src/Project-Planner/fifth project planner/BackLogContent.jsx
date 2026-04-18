import React, { useState } from "react";
import Plus from "../../Backend Component/image/Plus.jpg";
import UserStoryModalValidation from "./UserStoryModalValidation";
import UseStoryTable from "./UseStoryTable";

export default function BackLogContent() {
  const [openUserStoryModal, setOpenUserStoryModal] = useState(false);

  const openUserModal = (e) => {
    e.preventDefault();
    setOpenUserStoryModal(true);
  };

  const closeUserStoryModal = () => setOpenUserStoryModal(false);
  
  return (
    <>
      <div className="flex  justify-between items-center mt-10 mb-5 px-5">
        <div className="w-full">
          <p className="text-[#364153] text-sm font-medium">
          User Stories
        </p>
        </div>

       <div className="w-full flex justify-end">
         <button
          type="button"
          onClick={openUserModal}
          className="border-2 border-[#DADCE0] px-4 py-2 flex items-center gap-2 rounded-[10px]"
        >
          <img src={Plus} alt="plus" className="w-[16px]" />
          <span>Add Story</span>
        </button>

       </div>
      </div>
        <UseStoryTable />

      {openUserStoryModal && (
        <UserStoryModalValidation
          closeUserStoryModal={closeUserStoryModal}
        />
      )}
    </>
  );
}