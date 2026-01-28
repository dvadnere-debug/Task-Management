import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask } from "../../services/api.js";
import TaskColumn from "../../components/TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    getTasks()
      .then((response) => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Failed to load tasks");
        setLoading(false);
      });
  }, []);

  function handleAddTask(newTask) {
    addTask(newTask).then((response) => {
      setTasks([...tasks, response.data]);
      setShowForm(false);
    });
  }

  function moveTask(taskId, newStatus) {
    let updatedTask = null;

    const updatedTasks = tasks.map((task) => {
      if (Number(task.id) === Number(taskId)) {
        updatedTask = { ...task, status: newStatus };
        return updatedTask;
      }
      return task;
    });

    updateTask(taskId, updatedTask).then(() => {
      setTasks(updatedTasks);
    });
  }

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <header>Kanban Board</header>

      {/* Show form only when needed */}
      {showForm && (
        <AddTaskForm
          isOpen={showForm}
          onAddTask={handleAddTask}
          onClose={() => setShowForm(false)}
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
// function moveTask(taskId, newStatus) {
//   const updatedTasks = [];

//   for (let i = 0; i < tasks.length; i++) {
//     const task = tasks[i];

//     if (task.id === taskId) {
//       updatedTasks.push({
//         ...task,
//         status: newStatus,
//       });
//     } else {
//       updatedTasks.push(task);
//     }
