import React, { useState } from 'react'
import ThirdSurveyContent from './ThirdSurveyContent';
import Swal from "sweetalert2";

export default function ThirdSurveyValidation({ onNext }) {

    const [userInput, setUserInput] = useState({
        vegetation: '',
        ambient: '',
        depthRange: "",
        checker: []
    });

    const [error, setError] = useState({
        veg: "",
        amb: "",
        dept: "",
        check: ""
    });

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
            amb: "",
            dept: "",
            check: ""
        };

        if (!userInput.vegetation) {
            newErrors.veg = 'Vegetation field is required';
        }

        if (!userInput.ambient) {
            newErrors.amb = 'Ambient field is required';
        }

        if (!userInput.depthRange) {
            newErrors.dept = 'Depth range is required';
        }

        if (!userInput.checker) {
            newErrors.check = 'Pick at least one checked field';
        }

        setError(newErrors);

        // ✅ Correct validation check
        if (newErrors.veg || newErrors.amb || newErrors.dept || newErrors.check) {
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
        }).then(() => {
            if (onNext) onNext();
        });
    };

    return (
        <div>
            <ThirdSurveyContent
                HandleSubmit={handleSubmitSurvey}
                SurveyChange={handleChanges}
                error={error}
            />
        </div>
    );
}