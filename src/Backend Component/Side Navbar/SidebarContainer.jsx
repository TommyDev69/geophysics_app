import React, { useState } from "react";
import SidebarConnectivity from "./SidebarConnectivity";
import DashboardContainer from "../asset/DashboardContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex w-full min-h-screen relative">

      {/* Desktop Sidebar */}
      <div className="hidden md:block bg-[#EBEBEB] w-[310px] pt-[32px] md:pl-[13px] pr-[1px] border border-[#DADCE0] h-wscreen">
        <SidebarConnectivity />
      </div>

      {/* Dashboard Area */}
      <div className="flex-1 transition-all duration-300 relative">

        {/* Mobile Menu Button */}
        <div className="md:hidden pl-4 border-1">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-[24px] cursor-pointer"
          />
        </div>

        <DashboardContainer />

        {/* Mobile Sidebar Modal */}
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bdg-black/40 z-40"
              onClick={toggleSidebar} // click overlay to close
            ></div>

            {/* Sidebar Modal */}
            <div className="fixed left-0 top-0 bottom-0 w-64 bg-[#EBEBEB] z-50 pt-4 pl-4 pr-2 border border-[#DADCE0] shadow-lg transform transition-transform duration-300">
              
              {/* Close Button Inside Sidebar */}
              <div className="flex  pl-4 mb-4 border-1">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={toggleSidebar}
                  className="text-[20px] cursor-pointer"
                />
              </div>

              {/* Sidebar Content */}
              <SidebarConnectivity />
            </div>
          </>
        )}
      </div>
    </div>
  );
}