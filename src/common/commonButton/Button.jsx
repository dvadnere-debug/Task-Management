export default function Button({ children, onClick, isClose=false, type="button" }) {
  return (
    <button
      type={type} onClick={onClick} 
      className={
        isClose?"absolute top-6 right-6 text-textColor":"w-full bg-btnColor py-3 rounded-md text-white font-bold text-sm"
      }
      
    >
      {children}
    </button>
  );
}
