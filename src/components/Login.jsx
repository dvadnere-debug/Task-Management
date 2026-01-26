import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("submitting the form", data);

  function handleLogin() {
    localStorage.setItem("token", "fakeToken");
    navigate("/dashboard");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Email: </label>
          <input
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              minLength: { value: 3, message: "Min length atleast 3" },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <br />
        <div>
          <label> Password: </label>
          <input {...register("password", { required: true, maxLength: 15 })} />
        </div>
        <br />
        <button onClick={handleLogin} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
