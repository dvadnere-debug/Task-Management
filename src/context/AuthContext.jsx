// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext(null);
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // To Load user from localStorage upon refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (userData) => {

//     localStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//   };

//   const logout = () => {
   
//     localStorage.removeItem("user");
//     setUser(null);
//   };
//   const updateProfile = (updatedUser) => {
//     setUser(updatedUser);
//     localStorage.setItem("user", JSON.stringify(updatedUser));
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, updateProfile}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// //custom hook
// export const useAuth = () => useContext(AuthContext);
