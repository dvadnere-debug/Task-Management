import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

import {useAuth} from "../store/Reducer/index.jsx"
function ProtectedRoute({ children }) {
  // const { user } = useAuth();

  const {state} = useAuth();
  // const token = localStorage.getItem("token");

  // if (!token) {
  //   alert("Please Login to continue");
  //   return <Navigate to="/login" />;
  // }

  return state.token ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
