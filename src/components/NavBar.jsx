import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login </li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>

        <button onClick={logout}>Logout</button>
      </nav>
    </>
  );
}
