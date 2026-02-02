export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div>welcome {user.name}</div>
      <div>Email:{user.email}</div>
      <div>Phone:{user.phone}</div>
    </>
  );
}
