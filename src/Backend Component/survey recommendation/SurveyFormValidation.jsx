import { useState } from "react";
import SurveyForm from "./SurveyForm";

import first from "../image/🌿.png";
import second from "../image/⛏️.png";
import third from "../image/🏗️.png";
import fourth from "../image/🏛️.png";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { useNavigate } from "react-router-dom";

const SurveyFormValidation = () => {
  // const navigateNext = useNavigate();

  const [content] = useState([
    { id: 1, photo: first, topic: "Environmental Assessment" },
    { id: 2, photo: second, topic: "Resource Exploration" },
    { id: 3, photo: third, topic: "Engineering Investigation" },
    { id: 4, photo: fourth, topic: "Archaeological Survey" },
  ]);

  const [surveyForm, setSurveyForm] = useState({
    projectName: "",
    surveyObjective: "",
  });

  const [error, setError] = useState({
    projectName: "",
    surveyObjective: "",
  });

  // Handle input change
  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurveyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle survey objective click
  const handleSurveyObjective = (value) => {
    setSurveyForm((prev) => ({
      ...prev,
      surveyObjective: value,
    }));
  };

  // Navigate to next page
  // const handleNavigateNext = () => {
  //   navigateNext("/second-survey-step"); // use your route path
  // };

  // Submit Form
  const handleSurveySubmit = (e) => {
    e.preventDefault();

    const surveyFormError = {
      projectName: "",
      surveyObjective: "",
    };

    if (!surveyForm.projectName) {
      surveyFormError.projectName = "Project name is required";
    }

    if (!surveyForm.surveyObjective) {
      surveyFormError.surveyObjective = "Survey objective must be selected";
    }

    setError(surveyFormError);

    if (surveyFormError.projectName || surveyFormError.surveyObjective) {
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
    })
    // .then(() => {
    //   handleNavigateNext();
    // });
  };

  return (
    <div className="w-[967px] border border-[#DADCE0] rounded-[10px] py-[10px] mx-auto">
      <SurveyForm
        title="project setup"
        content={content}
        surveyForm={surveyForm}
        error={error}
        handleSurveyChange={handleSurveyChange}
        handleSurveySubmit={handleSurveySubmit}
        handleSurveyObjective={handleSurveyObjective}
        // handleNavPage={handleNavigateNext} // keep only one prop
      />
    </div>
  );
};

export default SurveyFormValidation;