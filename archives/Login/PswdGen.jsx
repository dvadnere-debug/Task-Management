// import React, { useCallback, useEffect, useState, useRef } from "react";

// export default function PswdGen({ onUsePassword }) {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) {
//       str += "0123456789";
//     }
//     if (charAllowed) {
//       str += "!@#$%^&*{}[]+=-_~";
//     }

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const passwordRef = useRef(null);

//   function enterPassword() {
//     const value = passwordRef.current.value;
//     console.log("selected password is:");
//     onUsePassword(value);
//   }

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, charAllowed, numberAllowed]);
//   return (
//     <>
//       <div>
//         <div>
//           <h1>Password Generator</h1>
//           <input
//             type="text"
//             value={password}
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />

//           <button onClick={enterPassword}>use password</button>
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             onChange={(e) => {
//               setLength(e.target.value);
//             }}
//           />
//           <label>Length:{length}</label>
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             onChange={() => {
//               setNumberAllowed((prev) => !prev);
//             }}
//           />
//           <label>Numbers:</label>
//           <input
//             type="checkbox"
//             defaultChecked={numberAllowed}
//             onChange={() => {
//               setCharAllowed((prev) => !prev);
//             }}
//           />
//           <label>Characters:</label>
//         </div>
//       </div>
//     </>
//   );
// }
