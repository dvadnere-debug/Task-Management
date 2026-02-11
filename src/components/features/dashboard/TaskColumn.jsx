import TaskCard from "./TaskCard";

function TaskColumn({
  title,
  tasks,
  selectedTask,
onToggleTask =() =>{},
  onMoveTask = () => {},
  onDeleteTask = () => {},
  onEditTask,
}) {
  return (
  
    <div className=" flex flex-col items-center w-full max-w-87.5 min-w-70">
    

      {tasks.length === 0 && <p>No tasks</p>}

      <div className="  flex flex-col pt-4 gap-6 w-full items-center">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onMoveTask={onMoveTask}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
 isSelected={selectedTask.includes(task.id)}
 
    onToggle={()=> onToggleTask(task.id)} />
        ))}
      </div>

      {/* <br />
      {onAddClick && <button onClick={onAddClick}>+ Add Task</button>} */}
    </div>
  );
}

export default TaskColumn;
