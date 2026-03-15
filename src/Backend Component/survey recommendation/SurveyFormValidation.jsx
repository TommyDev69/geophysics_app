import { useState } from "react";
import SurveyForm from "./SurveyForm";
import first from "../image/🌿.png"
import second from "../image/⛏️.png"
import third from "../image/🏗️.png"
import fourth from "../image/🏛️.png"



const SurveyFormValidation = () => {
    const [content, setContent] = useState([
        {id:1, photo:first, topic:'environmental assetment'},
        {id:2, photo:second, topic:'Resource Exploration'},
        {id:3, photo:third, topic:'Engineering Investigation'},
        {id:3, photo:fourth, topic:'Archaeological Survey'}, 


    ])
    const[Surveyform, setSurveyform] = useState({
         projectName: "",
           description: "",
            others: "",
            surveyObjective: "",
            clientName: "",
           clientEmail: "",
           targetCompetitionDate: "",
           
    })
    return ( 
        <div className="w-[967px] border border-[#DADCE0] rounded-[10px] py-[10px] mx-auto">
            <SurveyForm content={content}  title="project setup"/>
        
        </div>
     );
}
 
export default SurveyFormValidation;