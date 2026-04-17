import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import number1 from "../Backend Component/image/num1.png";
import number2 from "../Backend Component/image/num2.png";
import number3 from "../Backend Component/image/num3.png";
import number4 from "../Backend Component/image/num4.png";
import number5 from "../Backend Component/image/num5.png";
import number6 from "../Backend Component/image/num6.png";
import range from "../Backend Component/image/range.png";

import SecondSurveyContent from "./SecondSurveyContent";
import { updateSurveyAction } from "../redux/slice/survey/surveySlice";
import {
  resetSuccessAction,
  resetErrAction,
} from "../redux/slice/globalActions/globalActions";
import { getUserProfileAction } from "../redux/slice/user/usersSlice";

const SecondSurveyConnectivity = ({ onNext }) => {
  const dispatch = useDispatch();

  // ✅ Get user profile and loading state from correct Redux path
  const profile = useSelector((state) => state.users.profile);
  const profileLoading = useSelector((state) => state.users.loading);

  const { success, successMessage, error: reduxError, loading: surveyLoading } = useSelector(
    (state) => state.surveys
  );

  const [form, setForm] = useState({
    latitude: "",
    longitude: "",
  });

  const [error, setError] = useState({
    latName: "",
    longName: "",
  });

  const [steps] = useState([
    { id: 1, name: "project setup", range, photo: number1 },
    { id: 2, name: "survey area", range, photo: number2 },
    { id: 3, name: "site characterisation", range, photo: number3 },
    { id: 4, name: "method recommendation", range, photo: number4 },
    { id: 5, name: "survey design", range, photo: number5 },
    { id: 6, name: "review and report", range: number6 },
  ]);

  // ✅ LOAD PROFILE ON MOUNT
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  // ✅ DEBUG: Log profile structure
  useEffect(() => {
    console.log("SecondSurvey Profile Data:", {
      profile,
      surveys: profile?.message?.survey,
      fullProfile: profile
    });
  }, [profile]);

  // ✅ SAFE SURVEY ID (NO useEffect, NO state)
  const surveys = profile?.message?.survey;
  
  const surveyId = surveys
    ? Array.isArray(surveys) && surveys.length > 0
      ? surveys[0]?._id
      : surveys?._id
    : null;

  // INPUT HANDLER
  const handleSecondSurveyChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // SUBMIT HANDLER
  const handleSecondSurveySubmit = (e) => {
    e.preventDefault();

    let errors = {
      latName: "",
      longName: "",
    };

    if (!form.latitude) errors.latName = "Latitude is required";
    if (!form.longitude) errors.longName = "Longitude is required";

    setError(errors);

    if (errors.latName || errors.longName) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all required fields",
      });
      return;
    }

    // ✅ Validate surveyId exists
    if (!surveyId) {
      console.error("Survey ID not found. Profile data:", { profile, surveys });
      Swal.fire({
        icon: "error",
        title: "Survey not ready",
        text: "No survey found. Please create a survey first in the Project Setup step.",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6"
      });
      return;
    }

    const surveyData = {
      latitude: form.latitude,
      longitude: form.longitude,
    };

    console.log("Submitting survey update with:", { surveyId, surveyData });
    dispatch(updateSurveyAction({ id: surveyId, surveyData }));
  };

  // SUCCESS HANDLER
  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: successMessage || "Survey updated successfully",
      }).then(() => {
        dispatch(resetSuccessAction());
        dispatch(getUserProfileAction());
        onNext?.();
      });
    }
  }, [success, successMessage, dispatch, onNext]);

  // ERROR HANDLER
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
    <div className="w-full py-14">
      {profileLoading && (
        <div className="mdb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700 text-center font-medium">Loading profile...</p>
        </div>
      )}
      {surveyLoading && (
        <div className="mwb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-orange-700 text-center font-medium">Processing your survey...</p>
        </div>
      )}
      <SecondSurveyContent
        secondSurveyForm={form}
        error={error}
        handleSecondSurveyChange={handleSecondSurveyChange}
        handleSubmit={handleSecondSurveySubmit}
        title="Survey Recommendation"
        survey={steps}
        SecondTitle="Survey Area Definition"
        isLoading={surveyLoading}
      />
    </div>
  );
};

export default SecondSurveyConnectivity;