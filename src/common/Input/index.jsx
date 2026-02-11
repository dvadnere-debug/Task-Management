// export default function InputField({
//   label,
//   type,
//   placeholder,
//   error,
//   value,
//   onChange,
//   onBlur,
// }) {
//   return (
//     <div className="space-y-1">
//       <label className="text-xs font-semibold text-textColor">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         placeholder={placeholder}
//         className={`w-full text-white border rounded-md p-3 text-sm outline-none
//           ${error ? "border-warning" : "border-textColor"}
//           focus:border-borderColor`}
//       />

//       {error && <p className="text-warning text-xs">{error.message}</p>}
//     </div>
//   );
// }
import { useState } from "react";
export default function InputField({
  label,
  type,
  inputType,
  placeholder,
  errors,
  field,
  showPasswordToggle
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = inputType === "password";
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-textColor">{label}</label>

      <input
        {...field}
        // type={type}
        type={isPasswordField && showPassword ?"text": inputType}
        placeholder={placeholder}
        className={`  w-full p-3 rounded-md text-sm text-white outline-none
          border ${
            errors ? "border-warning" : "border-textColor"
          } focus:border-borderColor`}
      />

      {isPasswordField && showPasswordToggle && (
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-15 mt-3 text-xs text-gray-600"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    )}

      {errors && <p className="text-warning text-xs">{errors.message}</p>}
    </div>
  );
}
