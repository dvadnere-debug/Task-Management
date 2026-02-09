import { useState } from "react";
// import {
//   getTasks,
//   addTask,
//   updateTask,
//   deleteTask,
// } from "../../services/api.js";
import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm/component";
import SearchBar from "../../SearchBar.jsx";
import AddTaskButton from "../../AddTaskButton.jsx";
import { useTasks } from "../../../hooks/useTasks.jsx";
import useDebounce from "../../../hooks/useDebounce.jsx";
function TaskBoard() {
  //const [tasks, setTasks] = useState([]);
  //const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);
  const {
    tasks,
    loading,
    handleAddTask,
    moveTask,
    deletingTask,
    handleUpdateTask,
  } = useTasks();
  const debouncedText = useDebounce(text, 1000);
  const searchText = debouncedText.length >= 3 ? debouncedText : "";

  function onEditTask(task) {
    setEdit(task);
    setShowForm(true);
  }

  function onAddTask(newTask) {
    if (edit) {
      handleUpdateTask(newTask);
    } else {
      handleAddTask(newTask);
    }

    setEdit(null);
    setShowForm(false);
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
        <p>wait.. Loading ur tasks.</p>
      </h1>
    );
  }

  return (
    <div>
      <header>Kanban Board</header>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 px-4">
        <div className="w-full md:w-auto">
          <SearchBar text={text} setText={setText} />
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <AddTaskButton onAddClick={() => setShowForm(true)} />
        </div>
      </div>

      {/* <div
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
      </div> */}
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
          onClose={() => {
            setShowForm(false);
            setEdit(null);
          }}
          editTask={edit}
        />
      )}

      {/* <div
        className="board"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      > */}
      <div className="board grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 md:px-12 w-full max-w-300 mx-auto justify-items-center">
        <TaskColumn
          title={<b>To-Do</b>}
          tasks={tasks.filter(
            (task) =>
              task.status === "todo" &&
              task.title.toLowerCase().includes(searchText),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
          onEditTask={onEditTask}
          
          selectedTaskId={selectedTask}
          onSelectTask={setSelectedTask}

        />

        <TaskColumn
          title={<b>In Progress</b>}
          tasks={tasks.filter(
            (task) =>
              task.status === "in-progress" &&
              task.title.toLowerCase().includes(searchText),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
          onEditTask={onEditTask}
           selectedTaskId={selectedTask}
          onSelectTask={setSelectedTask}
        />

        <TaskColumn
          title={<b>Completed</b>}
          tasks={tasks.filter(
            (task) =>
              task.status === "done" &&
              task.title.toLowerCase().includes(searchText),
          )}
          // onAddClick={() => setShowForm(true)}
          onMoveTask={moveTask}
          onDeleteTask={deletingTask}
          onEditTask={onEditTask}
           selectedTaskId={selectedTask}
          onSelectTask={setSelectedTask}
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
