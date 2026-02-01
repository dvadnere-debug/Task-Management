import React from "react";
import "./TaskCard.css";

export default function TaskCard({
  task,
  onMoveTask = () => {},
  onDeleteTask = () => {},
  onEditTask,
}) {
  return (
    <div className="task-card">
      <button className="delete-btn" onClick={() => onDeleteTask(task.id)}>
        x
      </button>

      <div className="task-header">
        <h4>{task.title}</h4>
        <span className="task-level">Status: {task.status}</span>
      </div>

      <p className="task-desc">{task.description}</p>

      <div className="task-actions">
        {task.status !== "todo" && (
          <button onClick={() => onMoveTask(task.id, "todo")}>Todo</button>
        )}
        {task.status !== "in-progress" && (
          <button onClick={() => onMoveTask(task.id, "in-progress")}>
            In Progress
          </button>
        )}
        {task.status !== "done" && (
          <button onClick={() => onMoveTask(task.id, "done")}>Done</button>
        )}
      </div>

      <small className="task-deadline">Due: {task.deadline}</small>
      <small onClick={() => onEditTask(task)}>Edit?</small>
    </div>
  );
}
