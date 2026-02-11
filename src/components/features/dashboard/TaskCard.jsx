import React from "react";
import "./TaskCard.css";

export default function TaskCard({
  task,
  isSelected,
  onToggle,
  onMoveTask = () => {},
  onDeleteTask = () => {},
  onEditTask,
}) {
  return (
    <div className={`task-card ${isSelected ? "selected" : ""}`}>
      {isSelected && (
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      )}
      <input type="checkbox" checked={isSelected} onChange={onToggle} />
      

      {/* {isSelected && <span className="tick">[selected]</span>} */}

      <div className="task-header">
        <h4
          className=" font-Poppins
    font-semibold
    text-[1.25rem]
    leading-[2.453rem] 
    tracking-[0]
    text-white
    capitalize
    text-left"
        >
          {task.title}
        </h4>
        <div className="task-level text-left">
          Status: {task.status}<br/>Priority: {task.priority}<br/>Due: {task.deadline}
        </div>
      </div>

      <p className="task-desc">{task.description}</p>

      <div className="task-actions">
        {task.status !== "todo" && (
          <button onClick={() => onMoveTask({id:task.id, status:"todo"})}>Todo</button>
        )}
        {task.status !== "in-progress" && (
          <button onClick={() => onMoveTask({id:task.id, status: "in-progress"})}>
            In Progress
          </button>
        )}
        {task.status !== "done" && (
          <button onClick={() => onMoveTask({id:task.id, status:"done"})}>Done</button>
        )}
      </div>

      
      <div className="flex items-center mt-2 gap-1">
  <button
    className="cursor-pointer rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center"
    onClick={() => onEditTask(task)}
  >
    <img src="/edit-16.png" alt="Edit" className="w-5 h-5" />
  </button>

  <button
    className="cursor-pointer border-white  rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center "
    onClick={() => onDeleteTask(task.id)}
  >
    <img src="/delete.png" alt="Delete" className="w-5 h-5" />
  </button>

  <button
    className="cursor-pointer border-white  rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center "
    onClick={() => onMoveTask({id:task.id, status:"in-progress"})}
  >
    <img src="/move.png" alt="move" className="w-5 h-5" />
  </button>

</div>
    </div>
  );
}
