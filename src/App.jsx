import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";
// import { AuthProvider } from "./context/AuthContext";
import { AuthProvider } from "./store/Reducer/index.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Toaster } from "react-hot-toast";
// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { useState } from "react";

function App() {
  return ( 
    <><Toaster />
    <AuthProvider>
      <ThemeProvider>
        <Toaster position="top-center" />
        <RouterProvider router={appRouter} />
        {/* <Form /> */}
        {/* <TaskBoard /> */}
      </ThemeProvider>
    </AuthProvider></>
  );
}

export default App;
