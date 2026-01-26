import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
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
      </nav>
    </>
  );
}
