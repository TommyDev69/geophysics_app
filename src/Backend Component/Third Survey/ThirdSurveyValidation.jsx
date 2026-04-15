import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ThirdSurveyContent from './ThirdSurveyContent';
import Swal from "sweetalert2";
import { getUserProfileAction } from '../../redux/slice/user/usersSlice';
import { updateSurveyAction } from '../../redux/slice/survey/surveySlice';
import { resetSuccessAction, resetErrAction } from '../../redux/slice/globalActions/globalActions';

export default function ThirdSurveyValidation({ secondSurveyData, onNext }) {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.users);
    const { loading, error: reduxError, success, successMessage } = useSelector((state) => state.surveys);

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);

    const dataFromProfileLatitude = profile?.message?.survey?.[0]?.latitude || '';
    const dataFromProfileLongitude = profile?.message?.survey?.[0]?.longitude || '';

    const lengthValue = secondSurveyData?.latitude || dataFromProfileLatitude || '0';
    const breadthValue = secondSurveyData?.longitude || dataFromProfileLongitude || '0';

    const [userInput, setUserInput] = useState({
        vegetation: '',
        geologicalSetting: '',
        minDepth: "",
        maxDepth: "",
        checker: []
    });

    const [error, setError] = useState({
        veg: "",
        geo: "",
        dept: "",
        check: ""
    });
    const [submitted, setSubmitted] = useState(false);

    // ✅ FIXED
     const handleChanges = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setUserInput((prev) => {
                const current = prev.checker || [];

                let updated;

                if (checked) {
                    updated = [...current, value]; // add
                } else {
                    updated = current.filter((item) => item !== value); // remove
                }

                return {
                    ...prev,
                    checker: updated
                };
            });
        } else {
            setUserInput((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };


    const handleSubmitSurvey = (e) => {
        e.preventDefault();

        let newErrors = {
            veg: "",
            geo: "",
            dept: "",
            check: ""
        };

        if (!userInput.vegetation) {
            newErrors.veg = 'Vegetation field is required';
        }

        if (!userInput.geologicalSetting) {
            newErrors.geo = 'Geological setting field is required';
        }

        if (!userInput.minDepth || !userInput.maxDepth) {
            newErrors.dept = 'Both minimum and maximum depth are required';
        } else if (parseFloat(userInput.minDepth) >= parseFloat(userInput.maxDepth)) {
            newErrors.dept = 'Maximum depth must be greater than minimum depth';
        }

        if (!userInput.checker.length) {
            newErrors.check = 'Pick at least one checked field';
        }

        setError(newErrors);

        // ✅ Correct validation check
        if (newErrors.veg || newErrors.geo || newErrors.dept || newErrors.check) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Fill all required fields (*) before continuing",
            });
            return;
        }

        // Get survey ID and objective from profile
        const surveyId = profile?.message?.survey?.[0]?._id;
        const surveyObjective = profile?.message?.survey?.[0]?.surveyObjective;
        if (!surveyId) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Survey ID not found. Please ensure a survey exists.",
            });
            return;
        }

        if (!surveyObjective) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Survey objective not found. Please complete step 1 first.",
            });
            return;
        }

        // Prepare data to update
        const surveyData = {
            surveyObjective,
            latitude: lengthValue,
            longitude: breadthValue,
            vegetationDensity: userInput.vegetation,
            geologicalSetting: userInput.geologicalSetting,
            minDepth: parseFloat(userInput.minDepth),
            maxDepth: parseFloat(userInput.maxDepth),
            siteConstraints: userInput.checker,
        };

        // Debug logging
        console.log('=== ThirdSurvey Form Submission ===');
        console.log('Survey Objective:', surveyObjective);
        console.log('Geological Setting:', `"${userInput.geologicalSetting}"`, `(length: ${userInput.geologicalSetting?.length})`);
        console.log('Min Depth:', userInput.minDepth, '=>', parseFloat(userInput.minDepth));
        console.log('Max Depth:', userInput.maxDepth, '=>', parseFloat(userInput.maxDepth));
        console.log('Full surveyData:', surveyData);

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
                text: successMessage || "Site characterisation data saved successfully",
            }).then(() => {
                setSubmitted(false);
                dispatch(resetSuccessAction());
                if (onNext) onNext(4);
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
    }, [reduxError,dispatch]);

    return (
        <div>
            <ThirdSurveyContent
                HandleSubmit={handleSubmitSurvey}
                SurveyChange={handleChanges}
                error={error}
                length={lengthValue}
                breadth={breadthValue}
            />
        </div>
    );
}