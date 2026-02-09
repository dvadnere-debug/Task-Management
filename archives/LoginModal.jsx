// import React from "react";
// import Modal from "react-modal";
// import loginImg from "../../../assets/login-image.png";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../../../services/authService";
// import { LOGIN_FORM_CONTROLLER } from "./constants";
// import FormControllerInput from "./FormControllerInput";

// export default function LoginModal({ isOpen, onClose }) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const navigate = useNavigate();
//   const onSubmit = async (data) => {
//     console.log("Login Data:", data);
//     try {
//       const user = await loginUser(data.email, data.password);
//       localStorage.setItem("user", JSON.stringify(user));
//       navigate("/profile");
//     } catch (error) {
//       console.log(error.message);
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       className="w-6xl mx-auto"
//       overlayClassName="fixed h-full inset-0 flex justify-center "
//     >
//       <div className="flex flex-col md:flex-row max-h-[90dvh] bg-backGroundColor rounded-2xl overflow-hidden">
//         {/* Left Image div */}
//         <div className="hidden md:block w-[46%] relative">
//           <img
//             src={loginImg}
//             alt="Login Visual"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         {/* Right*/}
//         <div className="w-full md:w-[54%] p-10 flex flex-col justify-center  relative">
//           <button
//             onClick={onClose}
//             className="absolute top-6 right-6 text-textColor cursor-pointer"
//           >
//             ✕
//           </button>

//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-semibold mb-2 text-white ">Login</h2>
//             <div className="flex items-center justify-center gap-2 text-sm text-textColor ">
//               <div className="flex-1 h-px w-7rem bg-textColor"></div>
//               Login with email
//               <div className="flex-1 h-px w-7rem bg-textColor"></div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {LOGIN_FORM_CONTROLLER.map((field) => (
//               <FormControllerInput
//                 key={field.name}
//                 name={field.name}
//                 control={control}
//                 rules={field.rules}
//                 label={field.label}
//                 type={field.type}
//                 placeholder={field.placeholder}
//                 error={errors[field.name]}
//               />
//             ))}

//             <button
//               type="submit"
//               className="w-full bg-btnColor py-3 rounded-md  text-white font-bold text-sm"
//             >
//               Login
//             </button>
//             <p className="text-center text-xs text-textColor">
//               Don't have an account?{" "}
//               <span className="text-secondaryColor cursor-pointer hover:underline">
//                 Signup
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </Modal>
//   );
// }
import React from "react";
import Modal from "react-modal";
import loginImg from "../../../assets/login-image.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../services/authService";
import { useAuth } from "../../../context/AuthContext";

import { LOGIN_FORM_CONTROLLER } from "../../Login/constant";
import FormRenderer from "../../../common/FormRender";
import FormController from "../../../common/FormController";

Modal.setAppElement("#root");

export default function LoginModal({ isOpen, onClose }) {
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
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const user = await loginUser(data.email, data.password);
      //   localStorage.setItem("user", JSON.stringify(user));
      login(user);
      navigate("/profile");
    } catch (error) {
      alert("Invalid email or password");
      console.log(error.message);
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
        {/* Left Image div */}
        <div className="hidden md:block w-[46%] relative">
          <img
            src={loginImg}
            alt="Login Visual"
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
            <h2 className="text-3xl font-semibold mb-2 text-white">Login</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-textColor">
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
              Login with email
              <div className="flex-1 h-px w-7rem bg-textColor"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormController
              config={LOGIN_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />

            <button
              type="submit"
              className="w-full bg-btnColor py-3 rounded-md text-white font-bold text-sm"
            >
              Login
            </button>

            <p className="text-center text-xs text-textColor">
              Don't have an account?{" "}
              <span className="text-secondaryColor cursor-pointer hover:underline">
                Signup
              </span>
            </p>
          </form>
        </div>
      </div>
    </Modal>
  );
}
