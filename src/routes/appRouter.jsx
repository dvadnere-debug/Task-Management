import React from "react";
import { createBrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar.jsx";
import TaskBoard from "../components/features/dashboard/TaskBoard.jsx";
import Login from "../components/features/Login/Login.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import { Memoizedcomponent } from "../context/counter.jsx";
import Home from "../components/features/HeroSection.jsx/Home.jsx";
// import PswdGen from "../features/Login/PswdGen.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home>
        <Home />
      </Home>
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
    path: "/counter",
    element: <Memoizedcomponent />,
  },
  // {
  //   path: "/generatePassword",
  //   element: <PswdGen />,
  // },
]);

export default appRouter;
