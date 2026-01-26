import { useState } from "react";
import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>KanBan Board</h2>

      {showForm && (
        <AddTaskForm
          onAddTask={(newTask) => {
            setTasks([...tasks, newTask]);
            setShowForm(false);
          }}
        />
      )}

      <div
        className="board"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        <TaskColumn
          title={<h1>To-Do</h1>}
          tasks={tasks.filter((task) => task.status === "todo")}
          onAddClick={() => setShowForm(true)}
        />

        <TaskColumn
          title={<h1>Pending</h1>}
          tasks={tasks.filter((task) => task.status === "pending")}
        />

        <TaskColumn
          title={<h1>Completed</h1>}
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </div>
  );
}

export default TaskBoard;
