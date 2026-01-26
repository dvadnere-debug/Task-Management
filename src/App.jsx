import "./App.css";

import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter.jsx";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <Form /> */}
      {/* <TaskBoard /> */}
    </>
  );
}

export default App;
