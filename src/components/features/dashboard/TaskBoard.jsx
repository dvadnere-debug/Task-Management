import { useState } from "react";

import TaskColumn from "./TaskColumn.jsx";
import AddTaskForm from "./AddTaskForm/component";
import SearchBar from "../../SearchBar.jsx";
import AddTaskButton from "../../AddTaskButton.jsx";
import { useTasks } from "../../../hooks/useTasks.jsx";
import useDebounce from "../../../hooks/useDebounce.jsx";
function TaskBoard() {

  const [showForm, setShowForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState([]);

  const [text, setText] = useState("");
  const [edit, setEdit] = useState(null);


  const { tasks, isLoading, addTask, updateTask, deleteTask } = useTasks();

  const debouncedText = useDebounce(text, 1000);
  const searchText = debouncedText.length >= 3 ? debouncedText : "";

  function onEditTask(task) {
    setEdit(task);
    setShowForm(true);
  }

  function toggleTaskSelection(taskId) {
    setSelectedTask((prevSelectedTasks) => {
      const isAlreadySelected = prevSelectedTasks.includes(taskId);

      if (isAlreadySelected) {
        const updatedTasks = prevSelectedTasks.filter((id) => id !== taskId);
        return updatedTasks;
      }

      const updatedTasks = [...prevSelectedTasks, taskId];
      return updatedTasks;
    });
  }

  function onAddTask(newTask) {
    if (edit) {
      updateTask({ id: newTask.id, ...newTask });
    } else {
      addTask(newTask);
    }

    setEdit(null);
    setShowForm(false);
  }

  if (isLoading) {
    //loading states
    return (
      <h1>
        <p>wait.. Loading ur tasks.</p>
      </h1>
    );
  }

  return (
    <div className="bg-backGroundColor pt-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 px-4">
        <div className="w-full md:w-auto text-textColor">
          <SearchBar text={text} setText={setText} />
        </div>
        <div className=" text-white border rounded-[0.625rem] p-2 mb-[1.25rem] ">
          <AddTaskButton onAddClick={() => setShowForm(true)} />
        </div>
      </div>

     
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

      
      <div className="board grid grid-cols-1 gap-8 lg:grid-cols-3 px-6 md:px-12 w-full max-w-300 mx-auto justify-items-center">
        <div className="bg-colColr rounded-[20px] px-8 py-9 mb-5">
          <div className=" bg-colTitle w-full h-16.25 rounded-[20px] text-textColor p-4  border-gradient font-medium flex items-center justify-center">
            To Do
          </div>
          <TaskColumn
            title={<b>To-Do</b>}
            tasks={tasks.filter(
              (task) =>
                task.status === "todo" &&
                task.title.toLowerCase().includes(searchText),
            )}
            // onAddClick={() => setShowForm(true)}
            onMoveTask={updateTask}
            onDeleteTask={deleteTask}
            onEditTask={onEditTask}
            selectedTask={selectedTask}
            onToggleTask={toggleTaskSelection}
          />
        </div>
        <div className="bg-colColr rounded-[20px] px-8 py-9 mb-5">
          <div className="  bg-colTitle w-full h-16.25 rounded-[20px] text-textColor p-4  border-gradient font-medium flex items-center justify-center">
            In Progress
          </div>
          <TaskColumn
            title={<b>In Progress</b>}
            tasks={tasks.filter(
              (task) =>
                task.status === "in-progress" &&
                task.title.toLowerCase().includes(searchText),
            )}
            // onAddClick={() => setShowForm(true)}
            onMoveTask={updateTask}
            onDeleteTask={deleteTask}
            onEditTask={onEditTask}
            selectedTask={selectedTask}
            onToggleTask={toggleTaskSelection}
          />
        </div>
        <div className="bg-colColr rounded-[20px] px-8 py-9 mb-5">
          <div className=" bg-colTitle w-full h-16.25 rounded-[20px] text-textColor p-4  border-gradient font-medium flex items-center justify-center">
            Done
          </div>
          <TaskColumn
            title="Completed"
            tasks={tasks.filter(
              (task) =>
                task.status === "done" &&
                task.title.toLowerCase().includes(searchText),
            )}
            // onAddClick={() => setShowForm(true)}
            onMoveTask={updateTask}
            onDeleteTask={deleteTask}
            onEditTask={onEditTask}
            selectedTask={selectedTask}
            onToggleTask={toggleTaskSelection}
          />
        </div>
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
