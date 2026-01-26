import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import TaskBoard from "../components/TaskBoard.jsx";
import Login from "../components/Login.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <p>Welcome to the Tasks Management App</p>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <NavBar />
        <TaskBoard />
      </>
    ),
  },
]);

export default appRouter;
