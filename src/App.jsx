import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
// import { useState } from "react";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={appRouter} />
      {/* <Form /> */}
      {/* <TaskBoard /> */}
    </ThemeProvider>
  );
}

export default App;
