import InputField from "./CommonInput";

export default function FormRenderer({ config, field, error }) {
  const { label, type, placeholder, showForgotPassword, inputType } = config;

  return (
    <div>
      <InputField
        label={label}
        type={type}
        placeholder={placeholder}
        error={error}
        inputType={inputType}
        field={field}
      />

      {showForgotPassword && (
        <div className="text-right mt-1">
          <a href="#" className="text-xs text-textColor">
            Forgot Your Password?
          </a>
        </div>
      )}
    </div>
  );
}
