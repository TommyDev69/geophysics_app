import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SidebarConnectivity from "../Side Navbar/SidebarConnectivity";
import ThirdSurveyContainer from "../Third Survey/ThirdSurveyContainer";

export default function ThirdSurveySideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("thirdSurvey");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex w-full min-h-screen relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-[310px] bg-[#EBEBEB] border border-[#DADCE0]">
        <SidebarConnectivity onMenuClick={handleMenuClick} activeMenu={activeMenu} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden pl-4 border-b py-2">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-[24px] cursor-pointer"
          />
        </div>

        {/* Conditional Rendering based on menu */}
        {/* {activeMenu === "thirdSurvey" && <ThirdSurveyContainer />} */}
        <ThirdSurveyContainer />

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-64 bg-[#EBEBEB] z-50 pt-4 pl-4 pr-2 border border-[#DADCE0] shadow-lg md:hidden transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-4 border-b pr-2">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggleSidebar}
              className="text-[20px] cursor-pointer"
            />
          </div>
          <SidebarConnectivity onMenuClick={handleMenuClick} activeMenu={activeMenu} />
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}
      </div>
    </div>
  );
}