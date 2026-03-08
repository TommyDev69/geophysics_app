import { useState } from "react";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert2 CSS
import Form from "./Form";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    role: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState({
    fullName: "",
    email: "",
    organisation: "",
    password: "",
    confirmPassword: ""
  });
//unmasked password eyes to see the password
 
  const password = formData.password;

  // Password checks for live feedback
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasLength = password.length >= 8;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: "",
      email: "",
      organisation: "",
      password: "",
      confirmPassword: ""
    };

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    // Validations
    if (!formData.fullName) newErrors.fullName = "Enter your full name";
    if (!formData.email) newErrors.email = "Enter your email";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address";

    if (!formData.organisation) newErrors.organisation = "Enter your organisation";

    if (!formData.password) newErrors.password = "Enter your password";
    else if (!passwordRegex.test(formData.password))
      newErrors.password = "Password must contain uppercase, lowercase, number, and special character";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setError(newErrors);

    const hasError = Object.values(newErrors).some((err) => err !== "");
    if (hasError) return;

    // Show SweetAlert2 if form is valid
    Swal.fire({
      title: "Success!",
      text: "Registration successful!",
      icon: "success",
      confirmButtonText: "OK"
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      organisation: "",
      role: "",
      password: "",
      confirmPassword: ""
    });
  };

  return (
    <Form
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      hasUpperCase={hasUpperCase}
      hasLowerCase={hasLowerCase}
      hasNumber={hasNumber}
      hasLength={hasLength}
    />
  );
};

export default FormValidation;