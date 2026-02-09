import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
  selectedTask,
onSelectTask =() =>{},
  onMoveTask = () => {},
  onDeleteTask = () => {},
  onEditTask,
}) {
  return (
    // <div
    //   style={{
    //     width: "300px",
    //     //border: "1px solid #ccc",
    //     padding: "12px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     gap: "12px",
    //     minHeight: "200px",
    //   }}
    // >
    <div className="flex flex-col items-center w-full max-w-87.5 min-w-70">
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

      <div className="flex flex-col gap-6 w-full items-center">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMoveTask={onMoveTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
 isSelected={selectedTask === task.id}
    onSelect={() => onSelectTask(task.id)}   />
        ))}
      </div>

      {/* <br />
      {onAddClick && <button onClick={onAddClick}>+ Add Task</button>} */}
    </div>
  );
}

export default TaskColumn;
