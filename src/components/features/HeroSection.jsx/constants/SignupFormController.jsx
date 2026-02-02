// export const SIGNUP_FORM_CONTROLLER = [
//   {
//     name: "username",
//     label: "User Name",
//     type: "text",
//     placeholder: "Enter username",
//     rules: { required: "Username is required" },
//   },
//   {
//     name: "email",
//     label: "Email",
//     type: "email",
//     placeholder: "Enter email",
//     rules: { required: "Email is required" },
//   },
//   {
//     name: "phone",
//     label: "Phone No.",
//     type: "text",
//     placeholder: "Enter phone number",
//     rules: {
//       required: "Phone is required",
//       minLength: { value: 10, message: "10-digits" },
//     },
//   },
//   {
//     name: "password",
//     label: "Password",
//     type: "password",
//     placeholder: "Enter password",
//     rules: {
//       required: "Password is required",
//       minLength: { value: 6, message: "Min 6 characters" },
//     },
//   },
// ];
import React from "react";
import Modal from "react-modal";
import signupImg from "../../../assets/login-image.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/authService";
import { SIGNUP_FORM_CONTROLLER } from "./constants";
import FormRenderer from "./FormRenderer";

Modal.setAppElement("#root");

export default function SignupModal({ isOpen, onClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await registerUser(data);

      // optional: auto-login after signup
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");

      onClose();
    } catch (error) {
      alert(error.message || "Signup failed");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-6xl mx-auto"
      overlayClassName="fixed h-full inset-0 flex justify-center "
    >
      <div className="flex flex-col md:flex-row max-h-[90dvh] bg-backGroundColor rounded-2xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block w-[46%] relative">
          <img
            src={signupImg}
            alt="Signup Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-full md:w-[54%] p-10 flex flex-col justify-center relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-textColor cursor-pointer"
          >
            ✕
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-white">Sign Up</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-textColor">
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
              Sign up with email
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormRenderer
              config={SIGNUP_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />

            <button
              type="submit"
              className="w-full bg-btnColor py-3 rounded-md text-white font-bold text-sm"
            >
              Sign Up
            </button>

            <p className="text-center text-xs text-textColor">
              Already have an account?{" "}
              <span className="text-secondaryColor cursor-pointer hover:underline">
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}
