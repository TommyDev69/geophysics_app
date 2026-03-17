import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import number1 from "../../image/num1.png"
import number2 from "../../image/num2.png"
import number3 from "../../image/num3.png"
import number4 from "../../image/num4.png"
import number5 from "../../image/num5.png"
import number6 from "../../image/num6.png"
import range from "../../image/range.png"
import SecondSurveyContent from "./SecondSurveyContent";
import { Navigate, useNavigate } from "react-router-dom";
const SecondSurveyConnectivity = () => {
  const navigateNext = useNavigate()
  const handleNavigateNext = () =>{
    navigateNext('../second survey step/SecondSurveyContaine.jsx')
  }
    const [survey, setSurvey] = useState([
        {id:1, name:"project setup",range:range, photo: number1},
        {id:2, name:"survey area", range:range,photo: number2},
        {id:3, name:"site characterisation",range:range,photo: number3,  paddingBottom: '2px'},
        {id:4, name:"method recommendation",range:range,photo: number4, paddingBottom: '2px'},
        {id:5, name:"survey design",range:range,photo: number5},
        {id:6, name:"review and report",range:range,photo: number6}

    ])

 const [secondSurveyForm, setSecondSurveyForm] = useState({
    latitude: "",
    longitude: "",
  });

  const [error, setError] = useState({
    latName: "",
    longName: "",
  });

  // Handle input change
  const handleSecondSurveyChange = (e) => {
    const { name, value } = e.target;

    setSecondSurveyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Submit Form
 const handleSecondSurveySubmit = (e) => {
  e.preventDefault();

  const surveyFormError = {
    latName: "",
    longName: "",
  };

  if (!secondSurveyForm.latitude) {
    surveyFormError.latName = "Length of your latitude is required";
  }

  if (!secondSurveyForm.longitude) {
    surveyFormError.longName = "Longitude is required";
  }

  // ✅ Set correct error object
  setError(surveyFormError);

  // ✅ Check errors properly
  if (surveyFormError.latName || surveyFormError.longName) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fill all required fields (*) before continuing",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Success",
    text: "Survey setup completed",
  });
};
    return (
        <div className="w-full py-14">
            <SecondSurveyContent secondSurveyForm={secondSurveyForm} error={error} handleSecondSurveyChange={handleSecondSurveyChange} handleSubmit = {handleSecondSurveySubmit}  title ="survey recommendation" survey={survey} SecondTitle = "survey area definition" />
        </div>

     );
}
 
export default SecondSurveyConnectivity;