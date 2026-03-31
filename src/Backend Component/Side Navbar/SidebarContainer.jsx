import React, { useState } from "react";
import SidebarConnectivity from "./SidebarConnectivity";
import DashboardContainer from "../asset/DashboardContainer";
import SurveyFormValidation from "../survey recommendation/SurveyFormValidation";
import SecondSurveyConnectivity from "../../second survey step/SecondSurveyConnectivity";
import ThirdSurveyValidation from "../Third Survey/ThirdSurveyValidation";
import FourthSurveyConnectivity from "../../Fourth Survey/FourthSurveyConnectivity";
import FifthSurveyConnectivity from "../Fifth recommendation/FifthSurveyConnectivity";
import SixSurveyContainer from "../Six survey recommendation/SixSurveyContainer";

import MyProject from "../../Fontend Component/MyProject/MyProject";

import ProjectPlannerValidation from "../../Project-Planner/ProjectPlannerValidation";
import SecondProjectPlannerValidation from "../../Project-Planner/SecondProjectPlannerValidation";
import FifthProjectPlannerValidation from "../../Project-Planner/fifth project planner/FifthProjectPlannerValidation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const [surveyStep, setSurveyStep] = useState(1);
  const [projectPlanner, setProjectPlanner] = useState(1);

  const [secondSurveyData, setSecondSurveyData] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setSurveyStep(1);
    setProjectPlanner(1);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex w-full min-h-screen relative">
      {/* Sidebar */}
      <div className="hidden md:block bg-[#EBEBEB] w-[310px] pt-[32px] md:pl-[13px] pr-[1px] border border-[#DADCE0]">
        <SidebarConnectivity
          onMenuClick={handleMenuClick}
          activeMenu={activeMenu}
        />
      </div>

      {/* Main */}
      <div className="flex-1 relative">
        {/* Mobile button */}
        <div className="md:hidden pl-4 border-b">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-[24px] cursor-pointer"
          />
        </div>

        {/* DASHBOARD */}
        {activeMenu === "dashboard" && <DashboardContainer />}

        {/* MY PROJECT */}
        {activeMenu === "my project" && <MyProject />}

        {/* SURVEY FLOW */}
        {activeMenu === "survey recommendation" && (
          <>
            {surveyStep === 1 && (
              <SurveyFormValidation onNext={setSurveyStep} />
            )}

            {surveyStep === 2 && (
              <SecondSurveyConnectivity
                onNext={(data) => {
                  setSecondSurveyData(data);
                  setSurveyStep(3);
                }}
              />
            )}

            {surveyStep === 3 && (
              <ThirdSurveyValidation
                secondSurveyData={secondSurveyData}
                onNext={setSurveyStep}
              />
            )}

            {surveyStep === 4 && (
              <FourthSurveyConnectivity onNext={setSurveyStep} />
            )}

            {surveyStep === 5 && (
              <FifthSurveyConnectivity onNext={setSurveyStep} />
            )}

            {surveyStep === 6 && (
              <SixSurveyContainer onNext={() => setSurveyStep(1)} />
            )}
          </>
        )}

        {/* PROJECT PLANNER FLOW */}
        {activeMenu === "project planner" && (
          <>
            {projectPlanner === 1 && (
              <ProjectPlannerValidation onNext={setProjectPlanner} />
            )}

            {projectPlanner === 2 && (
              <SecondProjectPlannerValidation onNext={setProjectPlanner(2)} />
            )}

            {projectPlanner === 3 && (
              <FifthProjectPlannerValidation onNext={setProjectPlanner} />
            )}
          </>
        )}

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <>
            <div
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            <div className="fixed top-0 left-0 bottom-0 w-64 bg-[#EBEBEB] z-50 pt-4 pl-4 pr-2 border border-[#DADCE0] shadow-lg md:hidden">
              <div className="flex pl-4 mb-4 border-b">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={toggleSidebar}
                  className="text-[20px] cursor-pointer"
                />
              </div>

              <SidebarConnectivity
                onMenuClick={handleMenuClick}
                activeMenu={activeMenu}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}