import React from "react";
import { useNavigate } from "react-router-dom";

const SideBarContent = ({ data, activeMenu, onMenuClick }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    onMenuClick(item.name); // update activeMenu state
    if (item.path) navigate(item.path); // update URL
  };

  return (
    <>
      {data.map((item) => {
        const isActive = activeMenu === item.name;
        return (
          <button 
            key={item.id}
            className={`w-[287px] flex gap-4 items-center rounded-[10px] md:pl-[18px] pl-[14px] py-[16px] cursor-pointer ${
              isActive ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => handleClick(item)}
          >
            <div className="w-[20px]">
              <img src={item.icon} alt={item.name} />
            </div>
            <div>
              <p className="capitalize font-instrument font-medium md:text-[18px] leading-[24px] tracking-[-0.31px] text-[#585858]">
                {item.name}
              </p>
            </div>
          </button>
        );
      })}
    </>
  );
};

export default SideBarContent;