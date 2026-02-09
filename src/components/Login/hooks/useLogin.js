import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/authService.js";
import { useAuth } from "../../../context/AuthContext";
import { LOGIN_FORM_CONTROLLER } from "../constant";

export default function useLogin(onClose) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data.email, data.password);
      localStorage.setItem("token", user.password);
      login(user);

      onClose?.();
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error.message);
    }
  };

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    LOGIN_FORM_CONTROLLER,
  };
}
