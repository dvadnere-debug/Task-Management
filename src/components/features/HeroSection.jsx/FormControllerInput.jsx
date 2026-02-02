import { Controller } from "react-hook-form";
import InputField from "./CommonInput";

export default function FormControllerInput({
  name,
  control,
  rules,
  label,
  type,
  placeholder,
  error,
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputField
          label={label}
          type={type}
          placeholder={placeholder}
          error={error}
          value={field.value || ""}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
}
