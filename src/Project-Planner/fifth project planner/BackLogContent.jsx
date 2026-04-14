import React, { useState } from "react";
import Plus from "../../Backend Component/image/Plus.jpg";
import UserStoryModalValidation from "./UserStoryModalValidation";

export default function BackLogContent() {
  const [openUserStoryModal, setOpenUserStoryModal] = useState(false);

  const openUserModal = () => setOpenUserStoryModal(true);
  const closeUserStoryModal = () => setOpenUserStoryModal(false);
  
  return (
    <>
      <div className="flex w-[883px] justify-between items-center my-20 px-5">
        <p className="text-[#364153] text-sm font-medium">
          User Stories
        </p>

        <button
          onClick={openUserModal}
          className="border-2 border-[#DADCE0] px-4 py-2 flex items-center gap-2 rounded-[10px]"
        >
          <img src={Plus} alt="plus" className="w-[16px]" />
          <span>Add Story</span>
        </button>
      </div>

      {openUserStoryModal && (
        <UserStoryModalValidation
          closeUserStoryModal={closeUserStoryModal}
        />
      )}
    </>
  );
}