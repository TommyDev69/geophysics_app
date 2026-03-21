import React, { useState } from "react";
import Swal from "sweetalert2";
import FifthSurveyContent from "./FifthSurveyContent";

const FifthSurveyConnectivity = ({ onNext }) => {
  const [userInput, setUserInput] = useState({
    layoutPattern: "",
    stationSpacing: "",
    lineSpacing: "",
    range: ""
  });

  // ✅ FIXED: keys now match input names
  const [error, setError] = useState({
    layoutPattern: "",
    stationSpacing: "",
    lineSpacing: "",
    range: ""
  });

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

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Survey setup completed"
    }).then(() => {
      if (onNext) onNext();
    });
  };

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