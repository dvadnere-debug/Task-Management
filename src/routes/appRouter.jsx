import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import TaskBoard from "../components/features/dashboard/TaskBoard.jsx";
import Login from "../components/features/Login/Login.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import { Memoizedcomponent } from "../context/counter.jsx";
import Home from "../components/features/HeroSection/Home.jsx";
import UserProfile from "../components/UserProfile/component/index.jsx";
// import PswdGen from "../features/Login/PswdGen.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
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
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <NavBar />
        <UserProfile />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/generatePassword",
  //   element: <PswdGen />,
  // },
]);

export default appRouter;
