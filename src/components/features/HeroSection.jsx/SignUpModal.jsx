import React from "react";
import Modal from "react-modal";
import loginImg from "../../../assets/login-image.png";
import { useForm, Controller } from "react-hook-form";
import { registerUser } from "../../../services/authService";
import FormController from "./FormcontrollerInput";
import { SIGNUP_FORM_CONTROLLER } from "./constants/SignupFormController";

export default function SignUpModal({ isOpen, onClose }) {
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
    console.log("Login Data:", data);
    try {
      const user = await registerUser(data);
      localStorage.setItem("user", JSON.stringify(user));
      alert("signup successful!");
      reset();
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-6xl mx-auto"
      overlayClassName="h-full fixed inset-0 flex justify-center "
    >
      <div className="flex flex-col md:flex-row bg-backGroundColor rounded-2xl overflow-hidden">
        {/* Left Image div */}
        <div className="hidden md:block w-[46%] relative">
          <img
            src={loginImg}
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right*/}
        <div className="w-full md:w-[54%] p-10 flex flex-col justify-center text-textColor relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-textColor cursor-pointer"
          >
            ✕
          </button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2">Sign Up</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-textColor ">
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
              SignUp with email
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormController
              config={SIGNUP_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />
            {/* <div className="space-y-1">
              <label className="text-xs font-semibold text-textColor">
                User Name
              </label>
              <Controller
                name="userName"
                control={control}
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter Username"
                    className={`w-full border ${errors.userName ? "border-warning" : "border-textColor"} rounded-md p-3 text-sm focus:outline-none focus:border-borderColor`}
                  />
                )}
              />
              {errors.userName && (
                <p className="text-warning text-xs mt-1">
                  {errors.userName.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-textColor">
                E-Mail
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter Your E-Mail"
                    className={`w-full border ${errors.email ? "border-warning" : "border-textColor"} rounded-md p-3 text-sm focus:outline-none focus:border-borderColor`}
                  />
                )}
              />
              {errors.userName && (
                <p className="text-warning text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-textColor">
                Phone No.
              </label>
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone no. is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    placeholder="Enter Username"
                    className={`w-full border ${errors.phone ? "border-warning" : "border-textColor"} rounded-md p-3 text-sm focus:outline-none focus:border-borderColor`}
                  />
                )}
              />
              {errors.userName && (
                <p className="text-warning text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-textColor">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: { value: 6, message: "Min 6 chars" },
                }}
                render={({ field }) => (
                  <div className="relative">
                    <input
                      {...field}
                      type="password"
                      placeholder="••••••••••••"
                      className={`w-full focus:border-borderColor border ${errors.password ? "border-warning" : "border-textColor"} rounded-md p-3 text-sm focus:outline-none focus:border-borderColor`}
                    />
                  </div>
                )}
              />
              {errors.password && (
                <p className="text-warning text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <label className="flex items-start gap-2 text-xs text-textColor mt-4">
              <input type="checkbox" className="mt-1" />I confirm that I am 18
              years or older and legally allowed to participate in online
              gaming.
            </label> */}

            <button
              type="submit"
              className="w-full bg-btnColor py-3 rounded-md font-bold text-sm"
            >
              Signup
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
