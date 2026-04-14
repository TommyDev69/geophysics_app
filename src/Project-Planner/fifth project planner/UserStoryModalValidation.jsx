import { useState } from "react";
import Swal from "sweetalert2";
import UseStoryModal from "./UseStoryModal";

const UserStoryModalValidation = ({ closeUserStoryModal }) => {
  // Form state
  const [formData, setFormData] = useState({
    title: "",
    priority: "",
    point:'',
    assign: "",
    description: "",
  });

  // Error state
  const [errors, setErrors] = useState({
    title: "",
    priority: "",
      point:'',
    assign: "",
    description: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.priority.trim()) {
      newErrors.priority = "Priority is required";
    }
    if (!formData.point.trim()) {
      newErrors.point = "Point is required";
    }

    if (!formData.assign.trim()) {
      newErrors.assign = "Assign is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      Swal.fire({
        title: "Validation Error",
        text: "Please fill in all required fields",
        icon: "error",
      });
      return;
    }

    // Success - show confirmation and reset
    Swal.fire({
      icon: "success",
      title: "User Story Created!",
      text: "New user story added for this project",
      timer: 1500,
      showConfirmButton: false,
    });

    // Reset form
    setFormData({
      title: "",
      priority: "",
      point:'',
      assign: "",
      description: "",
    });

    // Close modal
    closeUserStoryModal();
  };

  return (
    <UseStoryModal
      closeUserStoryModal={closeUserStoryModal}
      change={handleInputChange}
      submission={handleSubmit}
      userInput={formData}
      error={errors}
    />
  );
};

export default UserStoryModalValidation;