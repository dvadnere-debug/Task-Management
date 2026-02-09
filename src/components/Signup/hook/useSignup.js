import { useForm } from "react-hook-form";
import { registerUser } from "../../../services/authService";
import { SIGNUP_FORM_CONTROLLER } from "../constant";

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
    } catch (error) {
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
