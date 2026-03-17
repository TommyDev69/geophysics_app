import React, { useState } from "react";
import SidebarConnectivity from "./SidebarConnectivity";
import DashboardContainer from "../asset/DashboardContainer";
import Survey from "../survey recommendation/Survey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import MyProject from "../../Fontend Component/MyProject/MyProject";

export default function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Track active page

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Handles menu clicks
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsSidebarOpen(false); // Close mobile sidebar after click
  };

  return (
    <div className="flex w-full min-h-screen relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block  bg-[#EBEBEB] w-[310px] pt-[32px] md:pl-[13px] pr-[1px] border border-[#DADCE0] ">
        <SidebarConnectivity onMenuClick={handleMenuClick} activeMenu={activeMenu} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Mobile Menu Button */}
        <div className="md:hidden pl-4 border-b">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-[24px] cursor-pointer"
          />
        </div>

        {/* Conditional rendering */}
        {activeMenu === "dashboard" && <DashboardContainer />}
        {activeMenu === "my project" && < MyProject/>}
        {activeMenu === "survey recommendation" && <Survey />}


        {/* Mobile Sidebar Modal */}
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Mobile Sidebar */}
            <div className="fixed top-0 left-0 bottom-0 w-64 bg-[#EBEBEB] z-50 pt-4 pl-4 pr-2 border border-[#DADCE0] shadow-lg md:hidden">
              <div className="flex pl-4 mb-4 border-b">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={toggleSidebar}
                  className="text-[20px] cursor-pointer"
                />
              </div>

              <SidebarConnectivity onMenuClick={handleMenuClick} activeMenu={activeMenu} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}