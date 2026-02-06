import React from "react";
import Modal from "react-modal";
import loginImg from "../../../assets/login-image.png";
import Button from "../../../common/commonButton/Button";
import FormController from "../../../common/commonFormController";
import useSignup from "../hook/useSignup";

Modal.setAppElement("#root");

export default function SignUpModal({ isSignupOpen, onClose, letsOpenLogin }) {
  const {
    control,
    errors,
    handleSubmit,
    onSubmit,
    SIGNUP_FORM_CONTROLLER,
  } = useSignup(onClose);

  return (
    <Modal
      isOpen={isSignupOpen}
      onRequestClose={onClose}
      className="w-6xl mx-auto"
      overlayClassName="h-full fixed inset-0 flex justify-center"
    >
      <div className="flex h-[60%]  flex-col md:flex-row bg-backGroundColor rounded-2xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden md:block w-[46%]">
          <img
            src={loginImg}
            alt="Signup Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-full md:w-[54%] p-10 flex flex-col justify-center text-textColor relative">
          <Button
            isClose onClick={onClose}
          >
            X
          </Button>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold mb-2">Sign Up</h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <div className="flex-1 h-px bg-textColor"></div>
              Signup with email
              <div className="flex-1 h-px bg-textColor"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormController
              config={SIGNUP_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />

            <Button type="submit">Signup</Button>

            <p className="text-center text-xs text-textColor">
              Already have an account?{" "}
              <span className="text-secondaryColor cursor-pointer hover:underline" onClick={letsOpenLogin}>
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}
