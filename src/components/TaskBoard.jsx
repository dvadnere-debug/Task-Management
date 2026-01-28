import { useState } from "react";
import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  function moveTask(taskId, newStatus) {
    const updatedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];

      if (task.id === taskId) {
        updatedTasks.push({
          ...task,
          status: newStatus,
        });
      } else {
        updatedTasks.push(task);
      }
    }

    setTasks(updatedTasks);
  }

  return (
    <div>
      <header>KanBan Board</header>
      {/* {*if showForm is true, show the AddTaskForm*} */}
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
          onMoveTask={moveTask}
        />

        <TaskColumn
          title="In Progress"
          tasks={tasks.filter((task) => task.status === "in-progress")}
          onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
        />

        <TaskColumn
          title="Completed"
          tasks={tasks.filter((task) => task.status === "done")}
          onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
        />
      </div>
    </div>
  );
}

export default TaskBoard;
