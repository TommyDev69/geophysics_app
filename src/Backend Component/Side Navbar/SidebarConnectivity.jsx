import { icon } from '@fortawesome/fontawesome-svg-core';
import DashImage from '../image/dashboard.png'
import MyProject from '../image/my project.png'
import survey from '../image/survey.png'
import planner from '../image/planner.png'
import setting from '../image/setting.png'
import LogOut from '../image/LogOut.png'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import SideBarContent from './SiderBarContent';
const SidebarConnectivity = () => {
    const [content, setContent] = useState([
        {id:1, name:"dashboard", icon:DashImage, navigator:"/Dashboard", uniqueKey:"001"},
        {id:2, name:"my project", icon:MyProject, navigator:"/", uniqueKey:"002"},
        {id:3, name:"survey recommendation", icon:survey, navigator:"/", uniqueKey:"003"},
        {id:4, name:"project planner", icon:planner, navigator:"/", uniqueKey:"004"},
        {id:5, name:"setting", icon:setting, navigator:"/", uniqueKey:"005"},
        {id:6, name:"LogOut", icon:LogOut, navigator:"/", uniqueKey:"006"},

    ]);
    return ( 
        <div className = "min-w-[258px] ">
            <SideBarContent data={content} />
        </div>
     );
}
 
export default SidebarConnectivity;