import { useState } from "react";
import Swal from "sweetalert2";
import UseStoryModal from "./UseStoryModal";

const UserStoryModalValidation = ({ closeUserStoryModal }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    point: "",
    assign: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    titleError: "",
    priorityError: "",
    pointError: "",
    assignError: "",
    descriptionError: "",
  });

  // ✅ HANDLE INPUT
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error instantly when typing
    // const errorKey = `${name}Error`;

    // setErrors((prev) => ({
    //   ...prev,
    //   [errorKey]: "",
    // }));
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit called');
    console.log('formData:', formData);

    const newErrors = {
      titleError: "",
      priorityError: "",
      pointError: "",
      assignError: "",
      descriptionError: "",
    };

    // Validation
    if (!formData.title.trim()) {
      newErrors.titleError = "Title is required";
    }

    if (!formData.priority.trim()) {
      newErrors.priorityError = "Priority is required";
    }

    if (!formData.point.trim()) {
      newErrors.pointError = "Point is required";
    }

    if (!formData.assign.trim()) {
      newErrors.assignError = "Assign is required";
    }

    if (!formData.description.trim()) {
      newErrors.descriptionError = "Description is required";
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(Boolean);
    console.log('hasError:', hasError);
    console.log('newErrors:', newErrors);

    // ❌ STOP IF ERROR
    if (hasError) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields",
        icon: "error",
      });
      return;
    }

    // ✅ SUCCESS
    Swal.fire({
      icon: "success",
      title: "User Story Created!",
      text: "New user story added",
      timer: 1500,
      showConfirmButton: false,
    });

    // Reset form
    setFormData({
      title: "",
      priority: "",
      point: "",
      assign: "",
      description: "",
    });

    closeUserStoryModal();
    console.log(handleSubmit);
  };

  return (
    <UseStoryModal
      closeUserStoryModal={closeUserStoryModal}
      change={handleInputChange}
      handlingSubmitStory={handleSubmit}
      userInput={formData}
      error={errors}
    />
  );
};

export default UserStoryModalValidation;