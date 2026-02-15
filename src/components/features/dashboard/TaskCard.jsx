import React from "react";
import "./TaskCard.css";
import {useState} from "react";

function TaskCard({
  task,
  isSelected,
  onToggle,
  onMoveTask = () => {},
  onDeleteTask = () => {},
  onEditTask,
}) {
  const [ expanded, setExpanded]= useState(false);
 return (
    <div
      className={`
        task-card
        w-full
        transition-all
        duration-300
        
        ${expanded ? "min-h-65" : "h-40"}
        ${isSelected ? "selected" : ""}
      `}
    >
      {isSelected && (
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      )}
      <input type="checkbox" checked={isSelected} onChange={onToggle} />

      <div className="flex items-start justify-between gap-2">
        <h4
          className="
            font-Poppins
            font-semibold
            text-[1.25rem]
            leading-[2.453rem]
            tracking-[0]
            text-white
            capitalize
            text-left
          "
        >
          {task.title}
        </h4>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white text-sm mt-1"
        >
          {expanded ? (
  <img src="/arrow-up.png" alt="collapse" className="w-4 h-4" />
) : (
  <img src="/arrow-down.png" alt="expand" className="w-4 h-4" />
)}
        </button>
      </div>


      <p
        className={`
          task-desc
          ${expanded ? "" : "line-clamp-2"}
        `} 
      >
        {task.description}
      </p>

   
      {expanded && (
        <>
          <div className="task-level text-left mt-2">
            Status: {task.status}
            <br />
            Priority: {task.priority}
            <br />
            Due: {task.deadline}
          </div>

          <div className="task-actions mt-3">
            {task.status !== "todo" && (
              <button
                onClick={() =>
                  onMoveTask({ id: task.id, status: "todo" })
                }
              >
                Todo
              </button>
            )}
            {task.status !== "in-progress" && (
              <button
                onClick={() =>
                  onMoveTask({
                    id: task.id,
                    status: "in-progress",
                  })
                }
              >
                In Progress
              </button>
            )}
            {task.status !== "done" && (
              <button
                onClick={() =>
                  onMoveTask({ id: task.id, status: "done" })
                }
              >
                Done
              </button>
            )}
          </div>

        
          <div className="flex items-center mt-3 gap-1">
            <button
              className="cursor-pointer rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center"
              onClick={() => onEditTask(task)}
            >
              <img
                src="/edit-16.png"
                alt="Edit"
                className="w-5 h-5"
              />
            </button>

            <button
              className="cursor-pointer border-white rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center"
              onClick={() => onDeleteTask(task.id)}
            >
              <img
                src="/delete.png"
                alt="Delete"
                className="w-5 h-5"
              />
            </button>

            <button
              className="cursor-pointer border-white rounded-[5px] bg-backGroundColor w-10 h-10 flex justify-center items-center"
              onClick={() =>
                onMoveTask({
                  id: task.id,
                  status: "in-progress",
                })
              }
            >
              <img
                src="/move.png"
                alt="move"
                className="w-5 h-5"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(TaskCard);