import { useState } from "react";

import Swal from "sweetalert2";
import ProjectPlanner from "./ProjectPlanner";

const ProjectPlannerValidation = ({onNext}) => {

    const [projectDetails, setProjectDetails] = useState({
        projectName: ""
    });

    const [error, setError] = useState({
        projectName: ""
    });

    // ✅ Handle input change
    const handleVarChange = (e) => {
        const { name, value } = e.target;

        setProjectDetails((prev) => ({
            ...prev,
            [name]: value
        }));

        // clear error while typing
        setError((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    // ✅ Handle submit
    const HandleSubmit = (e) => {
        e.preventDefault();

        let formError = {
            projectName: ""
        };

        // validation
        if (!projectDetails.projectName.trim()) {
            formError.projectName = "Project name is required";
        }

        setError(formError);

        // stop if error
        if (formError.projectName) {
            Swal.fire({
                title: "Error",
                text: formError.projectName,
                icon: "error"
            });
            return;
        }

        // confirmation
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
               confirmButton: "swal2-confirm rounded-[10px] bg-green-500 text-white px-4 py-2 rounded border border-green-700",
               cancelButton: "swal2-cancel rounded-[10px] mx-4 bg-red-500 text-white px-4 py-2 rounded border border-red-700"
  
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "Do you want to submit this project?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, submit!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {

            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Submitted!",
                    text: "Your project has been created successfully.",
                    icon: "success"
                }).then(() => {
                    if (onNext) onNext();
                });
            } 
            
            else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Submission cancelled",
                    icon: "info"
                });
            }
        });
    };

    return (
        <>
        <ProjectPlanner
            error={error}
            HandleSubmit={HandleSubmit}
            HandleChange={handleVarChange}
            userInput={projectDetails}
        />
        </>
    );
};

export default ProjectPlannerValidation;