import FormLogin from "./FormLogin";
// FormValidationLogin.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../redux/slice/user/usersSlice";
// import FormLogin from "./FormLogin";
// import { loginUserAction } from "../../redux/slice/user/userSlice";


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
        // .unwrap()
        // .then(() => {
        //     navigate("/Dashboard"); // go to dashboard after success
        // })
        // .catch(err => {
        //     console.log(err); // show error from API if needed
        // });
    };
    // get data from store
      const { user, loading, success } = useSelector((state) => state?.users)
    
    useEffect(() => {
        if (success) {
            navigate("/dashboard")
        }
    }, [success])
    return (
        <div>
            <FormLogin />
        </div>
    );
}

export default FormValidationLogin;