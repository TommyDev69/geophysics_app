import React, { useState } from "react";
import SidebarConnectivity from "./SidebarConnectivity";
import DashboardContainer from "../asset/DashboardContainer";
import Survey from "../survey recommendation/Survey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import MyProject from "../../Fontend Component/MyProject/MyProject";
import ProjectPlanner from "../../Project-Planner/ProjectPlanner";
import SurveyFormValidation from "../survey recommendation/SurveyFormValidation";
import SecondSurveyContaine from "../../second survey step/SecondSurveyContaine";
import ThirdSurveyContainer from "../Third Survey/ThirdSurveyContainer";
import FourthSurveyContainer from "../../Fourth Survey/FourthSurveyContainer";
import SecondSurveyConnectivity from "../../second survey step/SecondSurveyConnectivity";
import ThirdSurveyValidation from "../Third Survey/ThirdSurveyValidation";
import FifthSurveyConnectivity from "../Fifth recommendation/FifthSurveyConnectivity";
import SixSurveyHead from "../Six survey recommendation/SixSurveyHead";
import FourthSurveyHead from "../../Fourth Survey/FourthSurveyHead";
import FourthSurveyConnectivity from "../../Fourth Survey/FourthSurveyConnectivity";
import ProjectPlannerValidation from "../../Project-Planner/ProjectPlannerValidation";
import ProjectPlanner2 from "../../Project-Planner/ProjectPlanner2";
import SixSurveyContainer from "../Six survey recommendation/SixSurveyContainer";

export default function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard"); // Track active page
  const [surveyStep, setSurveyStep] = useState(1); // Track survey step
  const [projectPlanner, setProjectPanner] = useState(1); // Track survey step
  const [secondSurveyData, setSecondSurveyData] = useState(null); // Save lat/long data from step 2


  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setSurveyStep(1); // Reset survey step if sidebar menu changes
    setProjectPanner(1)
    setIsSidebarOpen(false);
  };

  const handleSurveyNext = () => {
    setSurveyStep(2); // Move to next survey step
  };

  const handleProjectNext = () => {
    setProjectPanner(2); // Move to next project step
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
        {activeMenu === "my project" && <MyProject />}
        {activeMenu === "survey recommendation" && (
          <>
            {surveyStep === 1 && (
              <SurveyFormValidation onNext={() => setSurveyStep(2)} />
            )}

            {surveyStep === 2 && (
              <SecondSurveyConnectivity
                onNext={(latLongData) => {
                  setSecondSurveyData(latLongData);
                  setSurveyStep(3);
                }}
              />
            )}

            {surveyStep === 3 && (
              <ThirdSurveyValidation
                secondSurveyData={secondSurveyData}
                onNext={() => setSurveyStep(4)}
              />
            )}
            {surveyStep === 4 && (
              <FourthSurveyConnectivity onNext={() => setSurveyStep(5)} />
            )}

            {surveyStep === 5 && (
              <FifthSurveyConnectivity onNext={() => setSurveyStep(6)} />
            )}
            {surveyStep === 6 && (
              <SixSurveyContainer onNext={() => setSurveyStep(1)} />
            )}
          </>
        )}
        {activeMenu === "project planner" && (
          <>
            {projectPlanner === 1 && (

              <ProjectPlannerValidation onNext={() => setProjectPanner(2)} />
            )}

            {projectPlanner === 2 && (
              <ProjectPlanner2 />
            )}
          </>
        )}

        {/* /* Mobile Sidebar Modal */}
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