import { useState } from "react";
// import {
//   getTasks,
//   addTask,
//   updateTask,
//   deleteTask,
// } from "../../services/api.js";
import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import SearchBar from "../../SearchBar.jsx";
import AddTaskButton from "../../AddTaskButton.jsx";
import { useTasks } from "../../../hooks/useTasks.jsx";

function TaskBoard() {
  //const [tasks, setTasks] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const { tasks, loading, handleAddTask, moveTask, deletingTask } = useTasks();

  function onAddTask(newTask) {
    handleAddTask(
      newTask.then(() => {
        setShowForm(false);
      }),
    );
  }

  // console.log(tasks.filter((task) => task.title.includes("Best")));
  // useEffect(() => {
  //   getTasks()
  //     .then((response) => {
  //       setTasks(response.data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       console.error("Failed to load tasks");
  //       setLoading(false);
  //     });
  // }, []);

  // function handleAddTask(newTask) {
  //   addTask(newTask).then((response) => {
  //     setTasks([...tasks, response.data]);
  //     setShowForm(false);
  //   });
  // }

  // const deletingTask = async (id) => {
  //   try {
  //     await deleteTask(id);

  //     setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  //   } catch (error) {
  //     console.error("Failed to delete task", error);
  //   }
  // };

  // function moveTask(taskId, newStatus) {
  //   let updatedTask = null;

  //   const updatedTasks = tasks.map((task) => {
  //     if (Number(task.id) === Number(taskId)) {
  //       updatedTask = { ...task, status: newStatus };
  //       return updatedTask;
  //     }
  //     return task;
  //   });

  //   updateTask(taskId, updatedTask).then(() => {
  //     setTasks(updatedTasks);
  //   });
  // }

  if (loading) {
    ///loading states
    return (
      <h1>
        <p>hee hee Loading tasks...</p>
      </h1>
    );
  }

  return (
    <div>
      <header>Kanban Board</header>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <SearchBar text={text} setText={setText} />
        <AddTaskButton onAddClick={() => setShowForm(true)} />
      </div>
      {/* <SearchBar text={text} setText={setText} />
      <AddTaskButton
        onAddClick={() => {
          setShowForm(true);
        }}
      /> */}

      {/* Show form only when needed */}
      {showForm && (
        <AddTaskForm
          isOpen={showForm}
          onAddTask={onAddTask}
          onClose={() => setShowForm(false)}
        />
      )}

      <div
        className="board"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        <TaskColumn
          title="To-Do"
          tasks={tasks.filter(
            (task) =>
              task.status === "todo" && task.title.toLowerCase().includes(text),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
        />

        <TaskColumn
          title="In Progress"
          tasks={tasks.filter(
            (task) =>
              task.status === "in-progress" &&
              task.title.toLowerCase().includes(text),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
        />

        <TaskColumn
          title="Completed"
          tasks={tasks.filter(
            (task) =>
              task.status === "done" && task.title.toLowerCase().includes(text),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
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
