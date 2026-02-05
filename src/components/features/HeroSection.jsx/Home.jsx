import { useState } from "react";
import NavBar from "../../NavBar/NavBar.jsx";
import LoginModal from "../../Login/component";
import SignUpModal from "../../Signup/component";
export default function Home() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <>
      <div>
        <h1>Welcome to Task Flow Lite</h1>
        <div className="flex gap-4">
          "
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
        </div>
        <LoginModal isLoginOpen={openLogin}
                    onClose={() => setOpenLogin(false)} 
                    letsOpenSignup={()=>{setOpenSignup(true); setOpenLogin(false)}} />

        <SignUpModal isSignupOpen={openSignup} onClose={() => setOpenSignup(false)}  letsOpenLogin={()=>{setOpenLogin(true); setOpenSignup(false)}}/>
      </div>
    </>
  );
}
