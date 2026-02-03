import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  // const token = localStorage.getItem("token");

  // if (!token) {
  //   alert("Please Login to continue");
  //   return <Navigate to="/login" />;
  // }

  return user ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
