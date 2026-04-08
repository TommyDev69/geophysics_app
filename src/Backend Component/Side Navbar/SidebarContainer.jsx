import React, { useState } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import SidebarConnectivity from "./SidebarConnectivity";
import DashboardContainer from "../asset/DashboardContainer";
import Setting from "../../Setting/Setting";

// Survey Components
import SurveyFormValidation from "../survey recommendation/SurveyFormValidation";
import SecondSurveyConnectivity from "../../second survey step/SecondSurveyConnectivity";
import ThirdSurveyValidation from "../Third Survey/ThirdSurveyValidation";
import FourthSurveyConnectivity from "../../Fourth Survey/FourthSurveyConnectivity";
import FifthSurveyConnectivity from "../Fifth recommendation/FifthSurveyConnectivity";
import SixSurveyConnectivity from "../Six survey recommendation/SixSurveyConnectivity";

// Project Planner Components
import MyProject from "../../Fontend Component/MyProject/MyProject";
import ProjectPlannerValidation from "../../Project-Planner/ProjectPlannerValidation";
import SecondProjectPlannerValidation from "../../Project-Planner/SecondProjectPlannerValidation";
import FifthProjectPlannerValidation from "../../Project-Planner/fifth project planner/FifthProjectPlannerValidation";
import ProjectFinalPlanner from "../../Project-Planner/fifth project planner/ProjectFinalPlanner";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [secondSurveyData, setSecondSurveyData] = useState(null);

  const [projectPlannerStep, setProjectPlannerStep] = useState(1);

  const navigate = useNavigate();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setIsSidebarOpen(false);

    // Navigate to initial URL for menu
    if (menuName === "dashboard") navigate("/dashboard");
    if (menuName === "my project") navigate("/dashboard/my-project");
    if (menuName === "survey recommendation") navigate("/dashboard/survey/1");
    if (menuName === "project planner") navigate("/dashboard/project/1");
    if (menuName === "setting") navigate("/dashboard/setting");
  };

  /*** SURVEY FLOW ***/
  const SurveyFlow = () => {
    const { step } = useParams();
    const surveyStep = parseInt(step) || 1;

    const goToNextSurveyStep = () => {
      const nextStep = surveyStep + 1;
      if (nextStep > 6) {
        setSecondSurveyData(1);
        navigate("/dashboard/survey/1");
      } else {
        navigate(`/dashboard/survey/${nextStep}`);
      }
    };

    return (
      <>
        {surveyStep === 1 && <SurveyFormValidation onNext={goToNextSurveyStep} />}
        {surveyStep === 2 && (
          <SecondSurveyConnectivity
            onNext={(data) => {
              setSecondSurveyData(data);
              goToNextSurveyStep();
            }}
          />
        )}
        {surveyStep === 3 && (
          <ThirdSurveyValidation
            secondSurveyData={secondSurveyData}
            onNext={goToNextSurveyStep}
          />
        )}
        {surveyStep === 4 && <FourthSurveyConnectivity onNext={goToNextSurveyStep} />}
        {surveyStep === 5 && <FifthSurveyConnectivity onNext={goToNextSurveyStep} />}
        {surveyStep === 6 && <SixSurveyConnectivity onNext={goToNextSurveyStep} />}
      </>
    );
  };

  /*** PROJECT PLANNER FLOW ***/
  const ProjectPlannerFlow = () => {
    // Accept a step from props if needed
    const goToNextProjectStep = (step = null) => {
      if (step !== null) setProjectPlannerStep(step); // jump to specific step
      else setProjectPlannerStep((prev) => prev + 1); // default +1
    };

    return (
      <>
        {projectPlannerStep === 1 && (
          <ProjectPlannerValidation onNext={goToNextProjectStep} />
        )}
        {projectPlannerStep === 2 && (
          <SecondProjectPlannerValidation onNext={goToNextProjectStep} />
        )}
        {projectPlannerStep === 3 && (
          <FifthProjectPlannerValidation onNext={goToNextProjectStep} />
        )}
        {projectPlannerStep === 4 && (
          <ProjectFinalPlanner onNext={goToNextProjectStep} />
        )}
      </>
    );
  };

  return (
    <div className="flex w-full min-h-screen relative">
      {/* Sidebar */}
      <div className="hidden md:block bg-[#EBEBEB] w-[340px] pt-[32px] md:pl-[13px] pr-[1px] border">
        <SidebarConnectivity onMenuClick={handleMenuClick} activeMenu={activeMenu} />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Mobile menu icon */}
        <div className="md:hidden pl-4 border-b">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-[24px] cursor-pointer"
          />
        </div>

        {/* Conditional Rendering */}
        {activeMenu === "dashboard" && <DashboardContainer />}
        {activeMenu === "my project" && <MyProject />}
        {activeMenu === "setting" && <Setting />}
        {activeMenu === "survey recommendation" && <SurveyFlow />}
        {activeMenu === "project planner" && <ProjectPlannerFlow />}

        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <>
            <div
              onClick={toggleSidebar}
              className="fixed inset-0 bg-black/40 z-40"
            />
            <div className="fixed top-0 left-0 bottom-0 w-64 bg-[#EBEBEB] z-50">
              <FontAwesomeIcon icon={faXmark} onClick={toggleSidebar} />
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