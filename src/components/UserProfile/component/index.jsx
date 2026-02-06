import useProfile from "../hook/useProfile";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";


export default function ProfilePage() {
  const {
    user,
    control,
    handleSubmit,
    onSubmit,
    errors
  } = useProfile();
  

 

  return (
    <div className="min-h-screen bg-backGroundColor flex flex-col items-center py-16 text-white">
      <h1 className="text-[1.5rem] font-semibold mb-8">Personal Information</h1>

     <ProfileHeader user={user} />
     <ProfileForm control = {control}
     errors={errors}
     handleSubmit ={handleSubmit}
     onSubmit={onSubmit}
     />
     </div>
  );
}

     
     