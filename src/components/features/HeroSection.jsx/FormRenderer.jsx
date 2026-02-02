import { Controller } from "react-hook-form";
import InputField from "./CommonInput";

export default function FormRenderer({ config, control, errors }) {
  return (
    <div className="space-y-6">
      {config.map((fieldConfig) => (
        <div key={fieldConfig.name}>
          <Controller
            name={fieldConfig.name}
            control={control}
            rules={fieldConfig.rules}
            render={({ field }) => (
              <InputField
                field={field}
                label={fieldConfig.label}
                type={fieldConfig.type}
                placeholder={fieldConfig.placeholder}
                error={errors[fieldConfig.name]}
              />
            )}
          />

          {fieldConfig.showForgotPassword && (
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-textColor">
                Forgot Your Password?
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
