import { Controller } from "react-hook-form";
import FormRenderer from "../commonFormRender";

export default function FormController({ config, control, errors }) {
  console.log("config", config);
  return (
    <div className="space-y-6">
      {config.map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name}
          control={control}
          rules={fieldConfig.rules}
          render={({ field }) => (
            <FormRenderer
              config={fieldConfig}
              field={field}
              errors={errors[fieldConfig.name]}
            />
          )}
        />
      ))}
    </div>
  );
}
