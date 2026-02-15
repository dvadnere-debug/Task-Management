import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useTheme } from "../../context/ThemeContext.jsx";
import LoginModal from "../Login/component";
import SignUpModal from "../Signup/component/index.jsx";
import { useAuth } from "../../store/Reducer/index.jsx";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();

  const [openLogin, setOpenLogin] = useState(false);

  const { state, dispatch } = useAuth();
  const [openSignup, setOpenSignup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dialogRef = useRef(null);
  const navigate = useNavigate();

  // const isLoggedIn = localStorage.getItem("token");

const isLoggedIn = state.token;
  const handleLogout = () => {
    dispatch({ type:"LOGOUT"});
    dialogRef.current.close();
    navigate("/");
  };

  return (
    <nav className={`navbar ${theme}`}>
      {/* LEFT */}
      <div className="navbar-left">
        <Link to="/" className="logo">TaskFlowLite</Link>
      </div>

      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </>
        )}
      </ul>

      <div className="navbar-right">
        <button className="theme-btn" onClick={toggleTheme}>Theme</button>

        {!isLoggedIn ? (
          <>
            <button onClick={() => setOpenLogin(true)} className="nav-btn">
              Login
            </button>
            <button onClick={() => setOpenSignup(true)} className="nav-btn">
              SignUp
            </button>
          </>
        ) : (
          <button
            className="nav-btn logout"
            onClick={() => dialogRef.current.showModal()}
          >
            Logout
          </button>
        )}
      </div>

      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          {isLoggedIn && (
            <>
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
              <button
                className="nav-btn logout"
                onClick={() => {
                  setMenuOpen(false);
                  dialogRef.current.showModal();
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}

      {/* MODALS */}
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

      {/* LOGOUT DIALOG */}
      <dialog ref={dialogRef} className="logout-dialog">
        <p>Are you sure you want to logout?</p>
        <div className="dialog-actions">
          <button onClick={() => dialogRef.current.close()}>Cancel</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </dialog>
    </nav>
  );
}
