import React, { useState } from 'react';
import ProjectPlanner2 from './ProjectPlanner2';
import Swal from 'sweetalert2';

export default function SecondProjectPlannerValidation({ onNext }) {
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    startDate: '',
    endDate: '',
    surveyLink: '',
    teamMembers: [{ name: '', role: '' }]
  });

  const [error, setError] = useState({});

  // Handle input change
  const handleVarChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('teamName') || name.startsWith('teamRole')) {
      const index = parseInt(e.target.dataset.index);
      const members = [...projectDetails.teamMembers];
      if (name.startsWith('teamName')) members[index].name = value;
      if (name.startsWith('teamRole')) members[index].role = value;
      setProjectDetails((prev) => ({ ...prev, teamMembers: members }));
      return;
    }

    setProjectDetails((prev) => ({
      ...prev,
      [name]: value
    }));

    setError((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  // Handle submit
  const HandleSubmit = (e) => {
    e.preventDefault();

    let formError = {};

    // Validate top-level fields
    if (!projectDetails.projectName.trim()) {
      formError.projectName = 'Project name is required';
    }
// >>>>>>> 8364e957c2df7980eaa3fe566794c4717d441931
    

    // Validate team members
    const teamErrors = projectDetails.teamMembers.map((member, idx) => {
      const memberError = {};
      if (!member.name.trim()) memberError.name = 'Name required';
      if (!member.role.trim()) memberError.role = 'Role required';
      return memberError;
    });

    const hasTeamError = teamErrors.some(err => Object.keys(err).length > 0);

    if (hasTeamError) formError.teamMembers = teamErrors;

    setError(formError);

    // If any error exists, show first error using SweetAlert
    if (Object.keys(formError).length > 0) {
      const firstErrorField = Object.keys(formError)[0];

      let errorMessage = '';
      if (firstErrorField === 'teamMembers') {
        const memberIdx = formError.teamMembers.findIndex(err => Object.keys(err).length > 0);
        const memberErr = formError.teamMembers[memberIdx];
        const memberErrorMsg = Object.values(memberErr).join(', ');
        errorMessage = `Team Member ${memberIdx + 1}: ${memberErrorMsg}`;
      } else {
        errorMessage = formError[firstErrorField];
      }

      Swal.fire({
        title: 'Error',
        text: errorMessage,
        icon: 'error'
      });
      return;
    }

    // SweetAlert confirmation
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          'swal2-confirm rounded-[10px] bg-green-500 text-white px-4 py-2 border border-green-700',
        cancelButton:
          'swal2-cancel rounded-[10px] mx-4 bg-red-500 text-white px-4 py-2 border border-red-700'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'Do you want to submit this project?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, submit!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons
            .fire({
              title: 'Submitted!',
              text: 'Your project has been created successfully.',
              icon: 'success'
            })
            .then(() => {
              if (onNext) onNext(3);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Submission cancelled',
            icon: 'info'
          });
        }
      });
  };

  return (
    <ProjectPlanner2
      error={error}
      HandleSubmit={HandleSubmit}
      HandleChange={handleVarChange}
      userInput={projectDetails}
      setUserInput={setProjectDetails}
    />
  );
}
