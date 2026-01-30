export default function AddTaskButton({ onAddClick = () => {} }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "20px",
        marginRight: "20px",
      }}
    >
      {onAddClick && <button onClick={onAddClick}>+ Add Task</button>}
    </div>
  );
}
