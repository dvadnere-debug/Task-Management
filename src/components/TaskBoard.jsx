import { useState } from "react";
import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <header>KanBan Board</header>

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
          title="To-Do"
          tasks={tasks.filter((task) => task.status === "todo")}
          onAddClick={() => setShowForm(true)}
        />

        <TaskColumn
          title="Pending"
          tasks={tasks.filter((task) => task.status === "pending")}
        />

        <TaskColumn
          title="Completed"
          tasks={tasks.filter((task) => task.status === "completed")}
        />
      </div>
    </div>
  );
}

export default TaskBoard;
