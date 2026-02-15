import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/authService.js";
// import { useAuth } from "../../../context/AuthContext";
import { useAuth } from "../../../store/Reducer/index.jsx";
import { LOGIN_FORM_CONTROLLER } from "../constant";
import toast, {Toaster} from "react-hot-toast"

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
  const { dispatch } = useAuth();

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data.email, data.password);
      localStorage.setItem("token", user.password);


      dispatch({
        type:"LOGIN",
        payload:{
          user: user,
          token: user.password,
        }
      });

      // login(user);

      onClose?.();
      navigate("/dashboard");
      toast.success("Login Successful!",{duration:2000})
    } catch (error) {
      toast.error("Invalid email or password",{duration: 5000})
      // alert("Invalid email or password");
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
