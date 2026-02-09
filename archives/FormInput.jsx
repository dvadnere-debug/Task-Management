import { Controller } from "react-hook-form";

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  rules = {},
}) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <label>{label}</label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <>
            <input
              {...field}
              type={type}
              className={error ? "input-error" : ""}
            />
            {error && (
              <small style={{ color: "red" }}>{label} is required</small>
            )}
          </>
        )}
      />
    </div>
  );
}
