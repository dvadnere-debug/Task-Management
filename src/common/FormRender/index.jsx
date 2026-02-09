import InputField from "../Input";
import SelectField from "../Select";
export default function FormRenderer({ config, field, errors }) {
  const { label, type, placeholder, showForgotPassword, inputType, options } = config;
  if(type === "select"){
    return(
      <SelectField
      label={label}
      options={options}
      errors={errors} 
      field={field}/>
    );
   
  }

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
