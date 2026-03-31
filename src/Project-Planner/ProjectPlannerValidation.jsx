import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Swal from "sweetalert2";
import ProjectPlanner from "./ProjectPlanner";
import { createProjectAction } from "../redux/slice/project/projectSlice";

const ProjectPlannerValidation = ({ onNext }) => {
  const dispatch = useDispatch();

  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [error, setError] = useState({
    projectName: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const [availableUsers, setAvailableUsers] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedTeamMemberId, setSelectedTeamMemberId] = useState("");

  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/users`);
        setAvailableUsers(data?.message || []);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, []);

  const onSelectTeamMember = (e) => setSelectedTeamMemberId(e.target.value);

  // ✅ Add member AND navigate to Step 2
  const onAddTeamMember = () => {
    if (!selectedTeamMemberId) return;

    const member = availableUsers.find((user) => user._id === selectedTeamMemberId);
    if (member && !teamMembers.some((m) => m._id === member._id)) {
      setTeamMembers((prev) => [...prev, member]);
    }

    // Navigate to Step 2
    if (onNext) onNext(2);
  };

  const handleVarChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const formError = {
      projectName: !projectDetails.projectName.trim() ? "Project name is required" : "",
      description: !projectDetails.description.trim() ? "Description is required" : "",
      startDate: !projectDetails.startDate ? "Start date is required" : "",
      endDate: !projectDetails.endDate ? "End date is required" : "",
    };

    setError(formError);

    if (Object.values(formError).some((v) => v)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields",
        icon: "error",
      });
      return;
    }

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "swal2-confirm rounded-[10px] bg-green-500 text-white px-4 py-2",
        cancelButton: "swal2-cancel rounded-[10px] mx-4 bg-red-500 text-white px-4 py-2",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Do you want to submit this project?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, submit!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(createProjectAction({ ...projectDetails, teamMembers }))
            .then((res) => {
              if (res.meta?.requestStatus === "fulfilled" || (res.payload && !res.error)) {
                swalWithBootstrapButtons
                  .fire({
                    title: "Submitted!",
                    text: "Your project has been created successfully.",
                    icon: "success",
                  })
                  .then(() => {
                    // Navigate to Step 3
                    if (onNext) onNext(3);
                  });
              } else {
                swalWithBootstrapButtons.fire({
                  title: "Error!",
                  text: res.payload || "Failed to create project",
                  icon: "error",
                });
              }
            })
            .catch((err) => {
              swalWithBootstrapButtons.fire({
                title: "Error!",
                text: err?.message || "Failed to create project",
                icon: "error",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Submission cancelled",
            icon: "info",
          });
        }
      });
  };

  return (
    <ProjectPlanner
      error={error}
      HandleSubmit={HandleSubmit}
      HandleChange={handleVarChange}
      userInput={projectDetails}
      availableUsers={availableUsers}
      selectedTeamMemberId={selectedTeamMemberId}
      onSelectTeamMember={onSelectTeamMember}
      onAddTeamMember={onAddTeamMember}
      teamMembers={teamMembers}
    />
  );
};

export default ProjectPlannerValidation;