import React from "react";

export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h4 className="task-title">{task.title}</h4>
      <p className="task-desc">{task.description}</p>
      <small className="task-deadline">Due: {task.deadline}</small>
    </div>
  );
}
