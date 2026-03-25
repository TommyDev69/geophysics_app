import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Swal from "sweetalert2";
import FifthSurveyContent from "./FifthSurveyContent";
import { getUserProfileAction } from '../../redux/slice/user/usersSlice';
import { updateSurveyAction } from '../../redux/slice/survey/surveySlice';
import { resetSuccessAction, resetErrAction } from '../../redux/slice/globalActions/globalActions';

const FifthSurveyConnectivity = ({ onNext }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);
  const { loading, error: reduxError, success, successMessage } = useSelector((state) => state.surveys);

  useEffect(() => {
    dispatch(getUserProfileAction());
  }, [dispatch]);

  const [userInput, setUserInput] = useState({
    layoutPattern: "",
    stationSpacing: "",
    lineSpacing: "",
    range: []
  });

  // ✅ FIXED: keys now match input names
  const [error, setError] = useState({
    layoutPattern: "",
    stationSpacing: "",
    lineSpacing: "",
    range: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const rangeOptions = [
    { name: "short", left: "0%", width: "33%" },
    { name: "medium", left: "33%", width: "34%" },
    { name: "long", left: "67%", width: "33%" }
  ];

  const handleImageClick = (item) => {
    let updated = [...userInput.range];

    if (updated.includes(item)) {
      updated = updated.filter(i => i !== item);
    } else {
      updated.push(item);
    }

    setUserInput(prev => ({ ...prev, range: updated }));

    // ✅ Optional: clear error when user selects
    setError(prev => ({ ...prev, range: "" }));
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setUserInput(prev => ({
      ...prev,
      [name]: value
    }));

    // ✅ Optional: clear error while typing
    setError(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSubmitSurvey = (e) => {
    e.preventDefault();

    let newErrors = {
      layoutPattern: "",
      stationSpacing: "",
      lineSpacing: "",
      range: ""
    };

    if (!userInput.layoutPattern) {
      newErrors.layoutPattern = "Pattern field is required";
    }

    if (!userInput.stationSpacing) {
      newErrors.stationSpacing = "Station spacing is required";
    }

    if (!userInput.lineSpacing) {
      newErrors.lineSpacing = "Line spacing is required";
    }

    if (userInput.range.length === 0) {
      newErrors.range = "Please select at least one range option";
    }

    setError(newErrors);

    // ✅ Cleaner validation check
    if (Object.values(newErrors).some(err => err !== "")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all required fields (*) before continuing"
      });
      return;
    }

    // Get survey ID from profile
    const surveyId = profile?.message?.survey?.[0]?._id;
    if (!surveyId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Survey ID not found. Please ensure a survey exists.",
      });
      return;
    }

    // Prepare data to update
    const surveyData = {
      layoutPattern: userInput.layoutPattern,
      stationSpacing: parseFloat(userInput.stationSpacing),
      lineSpacing: parseFloat(userInput.lineSpacing),
    };

    // Dispatch update action
    dispatch(updateSurveyAction({ id: surveyId, surveyData }));
    setSubmitted(true);
  };

  // Handle Redux success and error
  useEffect(() => {
    if (submitted && success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: successMessage || "Survey design data saved successfully",
      }).then(() => {
        setSubmitted(false);
        dispatch(resetSuccessAction());
        if (onNext) onNext();
      });
    }
  }, [submitted, success, successMessage, dispatch, onNext]);

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
    <FifthSurveyContent
      HandleSubmit={handleSubmitSurvey}
      SurveyChange={handleChanges}
      error={error}
      userInput={userInput}
      rangeOptions={rangeOptions}
      handleImageClick={handleImageClick}
    />
  );
};

export default FifthSurveyConnectivity;