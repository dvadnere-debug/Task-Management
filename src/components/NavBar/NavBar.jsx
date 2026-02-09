import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useTheme } from "../../context/ThemeContext.jsx";
import LoginModal from "../Login/component";
import SignUpModal from "../Signup/component/index.jsx";
import { Toaster } from "react-hot-toast";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
   const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const logout = () => {
    setTimeout(()=> {alert("Are you sure you want to log out?");
      localStorage.removeItem("token");
    navigate("/");
    },2000);
    
  };

  return (
    <nav className={`navbar ${theme}`}>
      {/* <div className={theme === "light" ? "light-mode" : "light-mode"}> */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          TaskFlowLite
        </Link>
      </div>

      <ul className="navbar-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (<>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li><Link to="/profile">Profile</Link></li></>
        )}
      </ul>


          
           <LoginModal
                    isLoginOpen={openLogin}
                    onClose={() => setOpenLogin(false)}
                    letsOpenSignup={() => {
                      setOpenSignup(true);
                      setOpenLogin(false);
                    }}
                  />
                  <SignUpModal
          isSignupOpen={openSignup}
          onClose={() => setOpenSignup(false)}
          letsOpenLogin={() => {
            setOpenLogin(true);
            setOpenSignup(false);
          }}
        />

        <div className="navbar-right">
        <button className="theme-btn" onClick={toggleTheme}>Theme</button>
        
        {!isLoggedIn ? (
          <>
           
           <button
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-0.75 active:translate-y-0.75 active:[box-shadow:0px_0px_rgb(82_82_82)]"
            onClick={() => setOpenLogin(true)}
          >
            Login
          </button>
           <button
            className="margin group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-0.75 active:translate-y-0.75 active:[box-shadow:0px_0px_rgb(82_82_82)]"
            onClick={() => setOpenSignup(true)}
          >
            SignUP
          </button>
          </>
        ) : (
          
          <button className="nav-btn logout" onClick={logout}>
            Logout
          </button>
        )}
      </div>

      {/* <div className="navbar-right">
        <button className="theme-btn" onClick={toggleTheme}>Theme</button>
        {!isLoggedIn ? (
          <Link to="/login" className="nav-btn">
            Login
          </Link>
        ) : (
          <button className="nav-btn logout" onClick={logout}>
            Logout
          </button>
        )}
      </div> */}
      {/* </div> */}
    </nav>
  );
}

// export const MemoizedComponent = memo(NavBar);

// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@heroui/react";

// export const AcmeLogo = () => {
//   return (
//     <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
//       <path
//         clipRule="evenodd"
//         d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//         fill="currentColor"
//         fillRule="evenodd"
//       />
//     </svg>
//   );
// };

// function NavBar() {
//   return (
//     <Navbar>
//       <NavbarBrand>
//         <AcmeLogo />
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link aria-current="page" href="#">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
// export const MemoizedComponent = memo(NavBar);
