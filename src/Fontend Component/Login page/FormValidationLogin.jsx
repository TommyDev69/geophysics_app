import FormLogin from "./FormLogin";
// FormValidationLogin.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/slice/user/usersSlice";
import Swal from 'sweetalert2';



const FormValidationLogin = () => {
 const navRegister = useNavigate();
  const handleBacktoRegister = () => {
    navRegister('/register');
  }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // --- Validation ---
        const newErrors = {};
        if (!formData.email) newErrors.email = "Enter your email";
        if (!formData.password) newErrors.password = "Enter your password";

        if (!formData.agreeTerms) {
            Swal.fire({
                icon: "success",
                title: "your details are correct",
                text: "we will log you in now"
            });
        }

        setError(newErrors);
        const hasError = Object.values(newErrors).some(err => err !== "");
        if (hasError) return;

        // --- Dispatch login action ---
        dispatch(loginUserAction(formData))
    };
    const { userAuth } = useSelector((state) => state?.users)


    // useEffect(() => {
    //     if (userAuth.success) {
    //         navigate("/dashboard")
    //     }
    // }, [userAuth.success])

    useEffect(() => {
        if (userAuth.success) {
            navigate("/dashboard")
        }
    }, [userAuth.success]);

    // useEffect(() => {
    //     if (userAuth.success) {
    //         Swal.fire({
    //             icon: "success",
    //             title: "You have succeesfully login",
    //             text: "Welcome back"
    //         });
    //         navigate("/dashboard")

    //     }
    //     // if (userAuth.success) {
    //     // }
    // }, [userAuth.success]);

    useEffect(() => {
        if (userAuth.error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: userAuth.error
            });
        }
    }, [userAuth.error]);

    return (
        <div>

            <FormLogin
                handleSubmit={handleSubmit}
                formData={formData}
                handleChange={handleChange}
                error={error}
                handleBacktoRegister = {handleBacktoRegister}
            />
        </div>
    );
}

export default FormValidationLogin;