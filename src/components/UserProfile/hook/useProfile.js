import { PROFILE_FORM_CONTROLLER } from "../constant";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import { updateUser } from "../../../services/userService";

export default function useProfile() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phone: "",
      gender: "Gender",
      dob: "",
      address: "",
      zipCode: "",
      state: "",
    },
  });

  const { user, updateProfile } = useAuth();

  useEffect(() => {
    if (user) {
      reset({
        fullname: user.fullname || "",
        username: user.username || user.userName || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "Gender",
        dob: user.dob || "",
        address: user.address || "",
        zipCode: user.zipCode || "",
        state: user.state || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      const updatedUser = await updateUser(user.id, data);
      updateProfile(updatedUser);
      alert("Updation Successfull");
    } catch (e) {
      console.error("Profile Updation is failed", e);
    }
  };

  return {
    user,
    control,
    errors,
    handleSubmit,
    onSubmit,
  };
}
