import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import FormControllerInput from "../../../common/commonFormController";
import { useAuth } from "../../../context/AuthContext";
import { updateUser } from "../../../services/userService";
import { SIGNUP_FORM_CONTROLLER } from "../../Signup/constant";
import FormController from "../../../common/commonFormController";

export default function ProfilePage() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      phone: "",
      gender: "Gender",
      dob: "",
      address: "",
      zipCode: "",
      state: "",
    },
  });
  const { user, updateProfile } = useAuth();
  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName || "",
        username: user.username || user.userName || "",
        email: user.email || "",
        phone: user.phone || "",
        gender: user.gender || "Gender",
        dob: user.dob || "",
        address: user.address || "",
        zipCode: user.zipCode || "",
        state: user.state || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      const updatedUser = await updateUser(user.id, data);
      updateProfile(updatedUser);
      alert("Updation Successfull");
    } catch (e) {
      console.error("Profile Updation is failed", e);
    }
  };

  return (
    <div className="min-h-screen bg-backGroundColor flex flex-col items-center py-16 text-white">
      <h1 className="text-[1.5rem] font-semibold mb-8">Personal Information</h1>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-14">
        <div className="w-25 h-25 rounded-full overflow-hidden mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-[1.5rem] font-bold">{user.name}</h2>
        <p className="text-[0.875rem] text-gray-400">
          User ID: {user.username || user.userName}
        </p>
      </div>

      {/* Main Form w/Flex rows */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">Full Name</label>
            <FormController
              config={SIGNUP_FORM_CONTROLLER}
              control={control}
              errors={errors}
            />
          </div>
          {/* <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-[31rem] h-[3rem] bg-backGroundColor rounded-[0.625rem] px-[1rem] outline-none border border-white focus:border-borderColor"
                />
              )}
            /> */}
        </div>
        {/* <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">Username</label>
            <FormControllerInput control={control} />
            {/* <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-[31rem] h-[3rem] bg-backGroundColor border border-white  focus:border-borderColor rounded-[0.625rem] px-[1rem] outline-none"
                />
              )}
            /> */}
        {/* </div>
        </div> */}

        {/* Row 2 E-Mail n Phone */}
        {/* <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">E-Mail ID</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter your e-mail id"
                  className="w-124 h-12 bg-backGroundColor border border-white  focus:border-borderColor rounded-[0.625rem] px-4 outline-none"
                />
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">Phone No.</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="05215 000000000000"
                  className="w-124 h-12 bg-backGroundColor border border-white  focus:border-borderColor rounded-[0.625rem] px-4 outline-none"
                />
              )}
            />
          </div>
        </div> */}

        {/* Row 3 Gender n DOB*/}
        {/* <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">Gender</label>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-124 h-12 bg-backGroundColor border border-white  focus:border-borderColor rounded-[0.625rem] px-[1.2rem] outline-none text-gray-400"
                >
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              )}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[0.875rem]">Date of Birth</label>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="DD/MM/YYYY"
                  className="w-124 h-12 bg-backGroundColor border border-white  focus:border-borderColor rounded-[0.625rem] px-4 outline-none"
                />
              )}
            />
          </div> */}
        {/* </div> */}

        <button
          type="submit"
          className="w-50 h-12 bg-btnColor  rounded-[1.875rem] font-bold text-[1rem] mt-12 transition-all"
        >
          Save
        </button>
      </form>
    </div>
  );
}
