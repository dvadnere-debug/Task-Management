import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import TaskBoard from "../features/dashboard/TaskBoard.jsx";
import Login from "../features/Login/Login.jsx";
import ProtectedRoute from "./protectedRoute.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <p>Home Page</p>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      // <ProtectedRoute>
      <>
        <NavBar />
        <Login />
      </>
      // </ProtectedRoute>
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
