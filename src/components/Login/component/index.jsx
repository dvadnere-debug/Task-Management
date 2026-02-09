import React from "react";
import Modal from "react-modal";
import loginImg from "../../../assets/login-image.png";

import FormController from "../../../common/FormController";
import useLogin from "../hooks/useLogin";
import Button from "../../../common/Button/Button";
import toast, {Toaster} from "react-hot-toast"

Modal.setAppElement("#root");

export default function LoginModal({ isLoginOpen, onClose, letsOpenSignup }) {
  const { control, errors, handleSubmit, onSubmit, LOGIN_FORM_CONTROLLER } =
    useLogin(onClose);

    const handleReactHotToast=()=> {
      toast.success("login successful!");
    }

  return (
    <Modal
      isOpen={isLoginOpen}
      onRequestClose={onClose}
      className="w-6xl mx-auto"
      overlayClassName="fixed h-full inset-0 flex justify-center"
    >
      <div className="flex flex-col md:flex-row max-h-[90dvh] bg-backGroundColor rounded-2xl overflow-hidden">
        {/* Left image */}
        <div className="hidden md:block w-[46%]">
          <img
            src={loginImg}
            alt="LoginImg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right section */}
        <div className="w-full md:w-[54%] p-10 flex flex-col justify-center relative">
          <Button isClose onClick={onClose}>
            X
          </Button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2 text-white">Login</h2>
            <div className="flex  items-center justify-center gap-2 text-sm text-textColor">
              <div className="flex-1 h-px bg-textColor"></div>
              Login with email
              <div className="flex-1 h-px bg-textColor"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormController
              config={LOGIN_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />

            <Button type="submit" onClick={handleReactHotToast}>Login</Button>
            <Toaster />

            <p className="text-center text-xs text-textColor">
              Don't have an account?{" "}
              <span
                className="text-secondaryColor cursor-pointer hover:underline"
                onClick={letsOpenSignup}
              >
                Signup
              </span>
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}
