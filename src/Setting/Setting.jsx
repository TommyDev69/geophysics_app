import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DangerZone from "./DangerZone";
import Notification from "./Notification";
import ProfileInfomation from "./ProfileInfomation";
import Swal from "sweetalert2";
import { userProfileUpdateAction, getUserProfileAction } from "../redux/slice/user/usersSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const { profile, loading, success, error, userAuth } = useSelector(state => state.users);

  console.log("Setting Component - Redux State:", { profile, userAuth, loading, error });

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

  // Load user profile on component mount
  useEffect(() => {
    if (userAuth?.userInfo?.message?.token) {
      dispatch(getUserProfileAction());
    } else {
      console.warn("⚠️ No token found. User might not be logged in.");
    }
  }, [dispatch, userAuth?.userInfo?.message?.token]);

  // Load profile data into form when component mounts or profile updates
  useEffect(() => {
    if (profile && profile.fullName) {
      setFormData({
        fullName: profile.fullName || '',
        email: profile.email || '',
        jobTitle: profile.jobTitle || '',
        organisation: profile.organisation || ''
      });
    }
  }, [profile]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      console.log("🔄 Attempting to update profile with data:", formData);
      
      // Dispatch the Redux action to update profile
      const result = await dispatch(userProfileUpdateAction(formData)).unwrap();
      console.log("✅ Profile updated successfully:", result);
      
      Swal.fire({
        icon: "success",
        title: "Saved successfully!",
        text: "Your profile has been updated",
        timer: 1500,
        showConfirmButton: false
      });
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err || error || "Failed to update profile",
        timer: 2000,
        showConfirmButton: false
      });
    }
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
}

export default Setting;