import { useState } from "react";
import Dash_Survey from "../image/activeSurvey.png"
import Plan_Project from "../image/projectPlanner.png"
import plus from "../image/Plus.png"
import DashboardSurveycard from "./DashboardSurveycard";    
const DashboardSurveyPlan = () => {
    const [surveyPlan] = useState([
        
        {id:1, titles:"new survey recommendation", description:"define survey areas,analyze terrain and get Alpowered method recommendation", photo:Dash_Survey, icon: plus},
        {id:2, titles:"new project planner", description:"manage  survey execution using agile scum  methodology with sprint planning", photo:Plan_Project, icon: plus }                                                  

    ])
    return ( 
        <div className="md:flex flex-shrink  space-4 py-4  items-center">
           <DashboardSurveycard surveyDetails={surveyPlan} />
        </div>
     );
}
 
export default DashboardSurveyPlan;