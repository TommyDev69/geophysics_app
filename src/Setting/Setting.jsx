import { useState } from "react";
import DangerZone from "./DangerZone";
import Notification from "./Notification";
import ProfileInfomation from "./ProfileInfomation";
import Swal from "sweetalert2";

const Setting = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    organisation: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    organisation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Saved successfully!",
      text: "Your profile has been updated",
      timer: 1500,
      showConfirmButton: false
    });

    console.log(formData);
  };

  return (
    <div className="w-[967px] mx-auto py-10">
      <div className="pb-10">
        <p className="capitalize font-instrument font-bold text-[30px]">
          Settings
        </p>
        <p className="text-[#4A5565] font-instrument text-[16px]">
          Manage your account and application preferences
        </p>
      </div>

      <ProfileInfomation 
        onChange={handleChange} 
        values={formData} 
        onSubmit={handleSubmit}
        errors={errors}
      />

      <Notification />
      <DangerZone />
    </div>
  );
};

export default Setting;