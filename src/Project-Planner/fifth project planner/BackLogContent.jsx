import React from "react";
import Plus from "../../Backend Component/image/Plus.jpg";

export default function BackLogContent({ onAddStory }) {
  return (
    <div className="flex w-[883px] justify-between items-center my-20 px-5">

      <p className="text-[#364153] text-sm font-medium">
        User Stories
      </p>

      <button
        onClick={onAddStory}
        className="border-2 border-[#DADCE0] px-4 py-2 flex items-center gap-2 rounded-[10px]"
      >
        <img src={Plus} alt="plus" className="w-[16px]" />
        <span>Add Story</span>
      </button>

    </div>
  );
}