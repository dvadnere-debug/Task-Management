// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// // import PswdGen from "./PswdGen.jsx";

// export default function Login() {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("submitting the form", data);
//     // if (data.email && !data.password) {
//     //   alert("please enter details");
//     //   return;
//     // }
//     if (data.email === null) {
//       alert("enter details");
//       return;
//     }
//     if (data.email && data.password) {
//       localStorage.setItem("token", "temporary_token");
//       navigate("/dashboard");
//     }
//   };

//   // function handleLogin() {
//   //   localStorage.setItem("token", "fakeToken");
//   //   navigate("/dashboard");
//   // }

//   return (
//     <div>
//       <div className="login-wrapper">
//         <h1>Please Login to continue</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label> Email: </label>
//             <input
//               placeholder="Enter your email"
//               {...register("email", {
//                 required: true,
//                 minLength: { value: 3, message: "Min length atleast 3" },
//               })}
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//           </div>
//           <br />
//           <div>
//             <label> Password: </label>
//             <input
//               {...register("password", {
//                 required: true,
//                 minLength: { value: 3, message: "min length atleast 3" },
//                 maxLength: 15,
//               })}
//             />
//             {errors.password && <p>{errors.password.message}</p>}
//           </div>
//           <br />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // export default function Login() {
// //   return (
// //     <div className="login-wrapper">
// //       <h1>Please Log In</h1>
// //       <form>
// //         <label>
// //           <p>Username</p>
// //           <input type="text" />
// //         </label>

// //         <label>
// //           <p>Password</p>
// //           <input type="password" />
// //         </label>
// //         <br />
// //         <div>
// //           <button type="submit">Submit</button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }
