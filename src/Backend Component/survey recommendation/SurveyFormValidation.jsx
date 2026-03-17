import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import SurveyForm from "./SurveyForm";

import first from "../image/🌿.png";
import second from "../image/⛏️.png";
import third from "../image/🏗️.png";
import fourth from "../image/🏛️.png";

const SurveyFormValidation = () => {
  const navigate = useNavigate();

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

  // Handle input changes
  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurveyForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle survey objective selection
  const handleSurveyObjective = (value) => {
    setSurveyForm((prev) => ({ ...prev, surveyObjective: value }));
  };

  // Navigate to the next page
  const handleNavigateNext = () => {
    navigate("/second-survey"); // Make sure this route exists in App.js
  };

  // Handle form submission
  const handleSurveySubmit = (e) => {
    e.preventDefault();

    const surveyFormError = {
      projectName: !surveyForm.projectName ? "Project name is required" : "",
      surveyObjective: !surveyForm.surveyObjective ? "Survey objective must be selected" : "",
    };

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
    }).then(() => handleNavigateNext());
  };

  return (
    <div className="w-[967px] border border-[#DADCE0] rounded-[10px] py-[10px] mx-auto">
      <SurveyForm
        title="Project Setup"
        content={content}
        surveyForm={surveyForm}
        error={error}
        handleSurveyChange={handleSurveyChange}
        handleSurveySubmit={handleSurveySubmit}
        handleSurveyObjective={handleSurveyObjective}
      />
    </div>
  );
};

export default SurveyFormValidation;