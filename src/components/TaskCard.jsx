import React from "react";

export default function TaskCard({ task, onMoveTask = () => {} }) {
  return (
    <div className="task-card">
      <h4 className="task-title">{task.title}</h4>
      <p className="task-desc">{task.description}</p>
      {task.status === "todo" && (
        <>
          <button onClick={() => onMoveTask(task.id, "in-progress")}>
            Move to in-progress?
          </button>
          <br />
          <button onClick={() => onMoveTask(task.id, "done")}>
            Move to Done?
          </button>
        </>
      )}

      {task.status === "in-progress" && (
        <>
          <button onClick={() => onMoveTask(task.id, "todo")}>
            Move to todo?
          </button>
          <br />S
          <button onClick={() => onMoveTask(task.id, "done")}>
            Move to Done?
          </button>
        </>
      )}

      {task.status === "done" && (
        <>
          <button
            className="btn move-progress"
            onClick={() => onMoveTask(task.id, "in-progress")}
          >
            Move to in-progress?
          </button>
          <br />
          <button onClick={() => onMoveTask(task.id, "todo")}>
            Move to Todo?
          </button>
        </>
      )}

      <small className="task-deadline">Due: {task.deadline}</small>
    </div>
  );
}
