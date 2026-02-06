import InputField from "../commonInput";

export default function FormRenderer({ config, field, errors }) {
  const { label, type, placeholder, showForgotPassword, inputType } = config;

  return (
    <div>
      <InputField
        label={label}
        type={type}
        placeholder={placeholder}
        errors={errors}
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
