import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import number1 from "../Backend Component/image/num1.png"
import number2 from "../Backend Component/image/num2.png"
import number3 from "../Backend Component/image/num3.png"
import number4 from "../Backend Component/image/num4.png"
import number5 from "../Backend Component/image/num5.png"
import number6 from "../Backend Component/image/num6.png"
import range from "../Backend Component/image/range.png"
import SecondSurveyContent from "./SecondSurveyContent";
import { updateSurveyAction } from "../redux/slice/survey/surveySlice";
import { resetSuccessAction, resetErrAction } from "../redux/slice/globalActions/globalActions";
import { getUserProfileAction } from "../redux/slice/user/usersSlice";

const SecondSurveyConnectivity = ({ onNext }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);
  const { loading, error: reduxError, success, successMessage } = useSelector((state) => state.surveys);

  const [survey] = useState([
    { id: 1, name: "project setup", range: range, photo: number1 },
    { id: 2, name: "survey area", range: range, photo: number2 },
    { id: 3, name: "site characterisation", range: range, photo: number3, paddingBottom: '2px' },
    { id: 4, name: "method recommendation", range: range, photo: number4, paddingBottom: '2px' },
    { id: 5, name: "survey design", range: range, photo: number5 },
    { id: 6, name: "review and report", range: range, photo: number6 }
  ]);

  const [secondSurveyForm, setSecondSurveyForm] = useState({
    latitude: "",
    longitude: "",
  });

  const [error, setError] = useState({
    latName: "",
    longName: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

    setError(surveyFormError);

    // Check for errors
    if (surveyFormError.latName || surveyFormError.longName) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill all required fields (*) before continuing",
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

    // ✅ Correct payload structure for Redux thunk
    const surveyData = {
      latitude: secondSurveyForm.latitude,
      longitude: secondSurveyForm.longitude,
    };

    // ✅ Dispatch updateSurveyAction with {id, surveyData}
    dispatch(updateSurveyAction({ id: surveyId, surveyData }));
    setSubmitted(true);
  };

  // Handle Redux success + error
  useEffect(() => {
    if (submitted && success) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: successMessage || "Latitude and longitude saved successfully",
      }).then(() => {
        setSubmitted(false);
        dispatch(resetSuccessAction());
        dispatch(getUserProfileAction()); // Refresh profile to get updated survey

        if (onNext) onNext(secondSurveyForm);
      });
    }
  }, [submitted, success, successMessage, dispatch, onNext, secondSurveyForm]);

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
      <SecondSurveyContent
        secondSurveyForm={secondSurveyForm}
        error={error}
        handleSecondSurveyChange={handleSecondSurveyChange}
        handleSubmit={handleSecondSurveySubmit}
        title="survey recommendation"
        survey={survey}
        SecondTitle="survey area definition"
      />
    </div>
  );
};

export default SecondSurveyConnectivity;