import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import SurveyContent from "./SurveyContent";
import number1 from "../image/num1.png"
import number2 from "../image/num2.png"
import number3 from "../image/num3.png"
import number4 from "../image/num4.png"
import number5 from "../image/num5.png"
import number6 from "../image/num6.png"
import range from "../image/range.png"
const SurveyConnectivity = () => {
    const [survey, setSurvey] = useState([
        {id:1, name:"project setup",range:range, photo: number1},
        {id:2, name:"survey area", range:range,photo: number2},
        {id:3, name:"site characterisation",range:range,photo: number3,  paddingBottom: '2px'},
        {id:4, name:"method recommendation",range:range,photo: number4, paddingBottom: '2px'},
        {id:5, name:"survey design",range:range,photo: number5},
        {id:6, name:"review and report",range:range,photo: number6}

    ])


    return (
        <div className="w-full py-14">
            <SurveyContent  title ="survey recommendation" survey={survey} />
        </div>

     );
}
 
export default SurveyConnectivity;