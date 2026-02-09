export default function SelectField({ label, options, errors, field }) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-textColor">{label}</label>
      <select
        {...field}
        className={`w-full p-3 rounded-md text-sm bg-transparent text-white outline-none border ${
          errors ? "border-warning" : "border-textColor"
        } focus:border-borderColor appearance-none`}
      >
        <option value="" className="bg-slate-800">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-800">
            {opt}
          </option>
        ))}
      </select>
      {errors && <p className="text-warning text-xs">{errors.message}</p>}
    </div>
  );
}