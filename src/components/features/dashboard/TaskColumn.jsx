import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,

  onMoveTask = () => {},
  onDeleteTask = () => {},
}) {
  return (
    <div
      style={{
        width: "300px",
        //border: "1px solid #ccc",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        minHeight: "200px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "8px",
          color: "#3d251e",
          border: "4px #3d251e",
        }}
      >
        {title}
      </h1>

      {tasks.length === 0 && <p>No tasks</p>}

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMoveTask={onMoveTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>

      {/* <br />
      {onAddClick && <button onClick={onAddClick}>+ Add Task</button>} */}
    </div>
  );
}

export default TaskColumn;
