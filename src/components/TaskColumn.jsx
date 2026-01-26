import TaskCard from "./TaskCard";

function TaskColumn({ title, tasks, onAddClick, onMoveTask }) {
  return (
    <div
      style={{
        width: "300px",
        border: "1px solid #ccc",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        minHeight: "200px",
      }}
    >
      <h1>{title}</h1>

      {tasks.length === 0 && <p>No tasks</p>}

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onMoveTask={onMoveTask} />
        ))}
      </div>

      <br />
      {onAddClick && <button onClick={onAddClick}>+ Add Task</button>}
    </div>
  );
}

export default TaskColumn;
