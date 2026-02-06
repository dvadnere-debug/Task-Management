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
export default function InputField({
  label,
  inputType,
  placeholder,
  errors,
  field,
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-textColor">{label}</label>

      <input
        {...field}
        type={inputType}
        placeholder={placeholder}
        className={`w-full p-3 rounded-md text-sm text-white outline-none
          border ${
            errors ? "border-warning" : "border-textColor"
          } focus:border-borderColor`}
      />

      {errors && <p className="text-warning text-xs">{errors.message}</p>}
    </div>
  );
}
