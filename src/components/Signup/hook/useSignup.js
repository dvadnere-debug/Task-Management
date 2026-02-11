import { useForm } from "react-hook-form";
import { registerUser } from "../../../services/authService";
import { SIGNUP_FORM_CONTROLLER } from "../constant";
import toast from "react-hot-toast";

export default function useSignup(onClose) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data);
      localStorage.setItem("user", JSON.stringify(user));
      
      reset();
      onClose?.();
      toast.success("Signup successful!",{duration:3000})
    } catch (error) {
      toast.error("Signup Failed",{duration:6000})
      alert(error.message);
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    SIGNUP_FORM_CONTROLLER,
  };
}
