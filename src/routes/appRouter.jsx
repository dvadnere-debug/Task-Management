import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import TaskBoard from "../components/TaskBoard.jsx";
import Login from "../components/Login.jsx";
import ProtectedRoute from "./protectedRoute.jsxrotectedRoute";

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
      <ProtectedRoute>
        <>
          <NavBar />
          <Login />
        </>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <>
          <NavBar />
          <TaskBoard />
        </>
      </ProtectedRoute>
    ),
  },
]);

export default appRouter;
