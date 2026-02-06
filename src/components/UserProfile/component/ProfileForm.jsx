import FormController from "../../../common/commonFormController";
import { PROFILE_FORM_CONTROLLER } from "../constant";

export default function ProfileForm({
  control,
  errors,
  handleSubmit,
  onSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6"
    ><div className="flex gap-10">
        {/* <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            <FormController config={PROFILE_FORM_CONTROLLER}
            control = {control}
            errors={errors} />
        </div> */}
        <div className="flex flex-col gap-6">
      <FormController
        config={PROFILE_FORM_CONTROLLER.filter(x=> x.column==="left")}
        control={control}
        errors={errors}
      />
      </div> 
     <div className="flex flex-col gap-6">

       <FormController
        config={PROFILE_FORM_CONTROLLER.filter(x=> x.column==="right")}
        control={control}
        errors={errors}
      /> 
</div></div>
       <button
          type="submit"
          className="w-50 h-12 bg-btnColor  rounded-[1.875rem] font-bold text-[1rem] mt-12 transition-all"
        >
          Save
        </button>
    </form>
  );
}
