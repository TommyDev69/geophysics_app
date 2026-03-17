import React, { useState } from "react";
import DashImage from "../image/dashboard.png";
import MyProject from "../image/my project.png";
import SurveyIcon from "../image/survey.png";
import Planner from "../image/planner.png";
import Setting from "../image/setting.png";
import LogOut from "../image/LogOut.png";

import SideBarContent from "./SideBarContent";

const SidebarConnectivity = ({ onMenuClick, activeMenu }) => {
  const [content] = useState([
    { id: 1, name: "dashboard", icon: DashImage },
    { id: 2, name: "my project", icon: MyProject },
    { id: 3, name: "survey recommendation", icon: SurveyIcon },
    { id: 4, name: "project planner", icon: Planner },
    { id: 5, name: "setting", icon: Setting },
    { id: 6, name: "logout", icon: LogOut },
  ]);

  return (
    <div className="min-w-[258px] ">
   
      <SideBarContent data={content} onMenuClick={onMenuClick} activeMenu={activeMenu} />
      
    </div>
  );
};

export default SidebarConnectivity;