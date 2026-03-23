import FormLogin from "./FormLogin";
// FormValidationLogin.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/slice/user/usersSlice";



const FormValidationLogin = () => {


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

        setError(newErrors);
        const hasError = Object.values(newErrors).some(err => err !== "");
        if (hasError) return;

        // --- Dispatch login action ---
        dispatch(loginUserAction(formData))
    };
    const { userAuth } = useSelector((state) => state?.users)


    useEffect(() => {
        if (userAuth.success) {
            navigate("/dashboard")
        }
    }, [userAuth.success])

    return (
        <div>

            <FormLogin
                handleSubmit={handleSubmit}
                formData={formData}
                handleChange={handleChange}
                error={error}
            />
        </div>
    );
}

export default FormValidationLogin;