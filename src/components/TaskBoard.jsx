import { useState } from "react";
import TaskColumn from "../../components/TaskColumn";
import AddTaskForm from "./AddTaskForm";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>Task Board</h2>

      {showForm && (
        <AddTaskForm
          onAddTask={(newTask) => {
            setTasks([...tasks, newTask]);
            setShowForm(false);
          }}
        />
      )}

      <div style={{ display: "flex", gap: "20px" }}>
        <TaskColumn
          title="To Do"
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
