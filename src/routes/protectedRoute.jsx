import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please Login to continue");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
