export default function ProfileHeader({ user }) {
  return (
    <div className="flex flex-col items-center mb-14">
      <div className="w-25 h-25 rounded-full overflow-hidden mb-4">
        <img
          src="https://picsum.photos/200/300"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-[1.5rem] font-bold">Name:{user.fullname}</h2>
      <p className="text-[0.875rem] text-gray-400">{console.log(user.username)}
        User ID: {user.username || user.userName}
      </p>
    </div>
  );
}
