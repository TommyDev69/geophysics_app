import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import SurveyForm from "./SurveyForm";
import { createSurveyAction } from "../../redux/slice/survey/surveySlice";
import { resetSuccessAction, resetErrAction } from "../../redux/slice/globalActions/globalActions";

import first from "../image/🌿.png";
import second from "../image/⛏️.png";
import third from "../image/🏗️.png";
import fourth from "../image/🏛️.png";

const SurveyFormValidation = ({ onNext }) => {
  const dispatch = useDispatch();
  const { loading, error: reduxError, success, successMessage } = useSelector((state) => state.surveys);

  const [content] = useState([
    { id: 1, photo: first, topic: "Environmental Assessment" },
    { id: 2, photo: second, topic: "Resource Exploration" },
    { id: 3, photo: third, topic: "Engineering Investigation" },
    { id: 4, photo: fourth, topic: "Archaeological Survey" },
  ]);

  const [surveyForm, setSurveyForm] = useState({
    surveyName: "",
    description: "",
    surveyObjective: "",
    others: "",
    clientName: "",
    clientEmail: "",
    targetCompletionDate: "",
  });

  const [error, setError] = useState({
    surveyName: "",
    surveyObjective: "",
  });

  const handleSurveyChange = (e) => {
    const { name, value } = e.target;
    setSurveyForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (error[name]) {
      setError((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSurveyObjective = (value) => {
    setSurveyForm((prev) => ({ ...prev, surveyObjective: value }));
    // Clear error when user selects objective
    if (error.surveyObjective) {
      setError((prev) => ({ ...prev, surveyObjective: "" }));
    }
  };

  const handleSurveySubmit = async (e) => {
    e.preventDefault();

    const surveyFormError = {
      surveyName: !surveyForm.surveyName.trim()
        ? "Survey name is required"
        : "",
      surveyObjective: !surveyForm.surveyObjective
        ? "Survey objective must be selected"
        : "",
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

    // Dispatch action to create survey
    dispatch(createSurveyAction(surveyForm));
  };

  // Handle Redux success and error
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: successMessage || "Survey setup completed",
      }).then(() => {
        dispatch(resetSuccessAction());
        setSurveyForm({
          projectName: "",
          description: "",
          surveyObjective: "",
          others: "",
          clientName: "",
          clientEmail: "",
          targetCompletionDate: "",
        });
        if (onNext) onNext();
      });
    }
  }, [success, successMessage, dispatch, onNext]);

  useEffect(() => {
    if (reduxError) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: reduxError,
      }).then(() => {
        dispatch(resetErrAction());
      });
    }
  }, [reduxError, dispatch]);

  return (
    <div className="max-w-[967px] w-full border border-[#DADCE0] rounded-[10px] py-[10px] mx-auto mt-10">
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