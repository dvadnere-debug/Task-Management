import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MemoizedComponent } from "../components/NavBar/NavBar.jsx";
import TaskBoard from "../components/features/dashboard/TaskBoard.jsx";
import Login from "../components/features/Login/Login.jsx";
import ProtectedRoute from "./protectedRoute.jsx";
import { Memoizedcomponent } from "../context/counter.jsx";
// import PswdGen from "../features/Login/PswdGen.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <MemoizedComponent />
        <p>Home Page</p>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      // <ProtectedRoute>
      <>
        <MemoizedComponent />
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
          <MemoizedComponent />
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
