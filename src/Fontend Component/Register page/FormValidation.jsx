  import { useEffect, useState } from "react";
  import Swal from "sweetalert2";
  import 'sweetalert2/dist/sweetalert2.min.css';
  import Form from "./Form";
  import { useDispatch, useSelector } from "react-redux";
  import { registerUserAction } from "../../redux/slice/user/usersSlice";

  const FormValidation = () => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      organisation: "",
      role: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false
    });
    // dispatch
    const dispatch = useDispatch()

    const [error, setError] = useState({
      fullName: "",
      email: "",
      organisation: "",
      role: "",
      password: "",
      confirmPassword: "",
      agreeTerms: ""
    });

    const password = formData.password;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasLength = password.length >= 8;
    const hasSpecialChar = /[@$!%*?&]/.test(password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Handle input changes
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {
        fullName: "",
        email: "",
        organisation: "",
        role: "",
        password: "",
        confirmPassword: "",
        agreeTerms: ""
      };

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

      // Validate fields
      if (!formData.fullName) newErrors.fullName = "Enter your full name";
      if (!formData.email) newErrors.email = "Enter your email";
      else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email address";

      if (!formData.organisation) newErrors.organisation = "Enter your organisation";
      if (!formData.role) newErrors.role = "Please select a role";

      if (!formData.password) newErrors.password = "Enter your password";
      else if (!passwordRegex.test(formData.password))
        newErrors.password = "Password must contain uppercase, lowercase, number, and special character";

      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";

      if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions";


      // Set errors so they show under inputs
      // If checkbox not checked, show SweetAlert warning
      if (!formData.agreeTerms) {
        Swal.fire({
          icon: "warning",
          title: "Terms Required",
          text: "You must agree to the terms and conditions"
        });
      }
    
      setError(newErrors);
      // Stop submission if any error exists
      const hasError = Object.values(newErrors).some(err => err !== "");
      if (hasError) return;
      dispatch(registerUserAction({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        organisation: formData.organisation,
        role: formData.role
      }))

      // Success will be handled by Redux state changes
      // Swal.fire({
      //   title: "Success!",
      //   text: "Registration successful!",
      //   icon: "success",
      //   confirmButtonText: "OK"
      // });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        organisation: "",
        role: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false
      });
    };

    //select store data
  const {  loading, success, error: serverError, successMessage } = useSelector((state) => state?.users)
    // Navigate
    useEffect(() => {
      if (success && successMessage) {
        Swal.fire({
          title: "Success!",
          text: successMessage,
          icon: "success",
          confirmButtonText: "OK"
        });
        window.location.href = "/login";
      }
    }, [success, successMessage]);


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
        hasSpecialChar={hasSpecialChar}
        loading={loading}
        serverError={serverError}
      />
    );
  };

  export default FormValidation;