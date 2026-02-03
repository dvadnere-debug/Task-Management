import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { useState } from "react";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
        {/* <Form /> */}
        {/* <TaskBoard /> */}
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
