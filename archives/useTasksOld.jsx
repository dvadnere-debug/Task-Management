// import { getTasks, updateTask, deleteTask, addTask } from "../services/api";
// import { useEffect, useState } from "react";
//import{ useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation}
// xport function useTasks() {
  // const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const createTask = (task) => addTask(task);

  // const moveTask = (taskId, newStatus) => updateTask({id:taskId, status: newStatus});

  // const removeTask =(id) => deleteTask(id);

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
  //   return addTask(newTask).then((response) => {
  //     setTasks((prevTasks) => [...prevTasks, response.data]);
  //     return response;
  //   });
  // }

  // function moveTask(taskId, newStatus) {
  //   let updatedTask = null;

  //   const updatedTasks = tasks.map((task) => {
  //     if (Number(task.id) === Number(taskId)) {
  //       updatedTask = { ...task, status: newStatus };
  //       return updatedTask;
  //     }
  //     return task;
  //   });
  //   return updateTask(taskId, updatedTask).then(() => {
  //     setTasks(updatedTasks);
  //   });
  // }

  // const deletingTask = async (id) => {
  //     try {
  //       await deleteTask(id);

  //       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  //     } catch (error) {
  //       console.error("Failed to delete task", error);
  //     }
  //   };
  // function deletingTask(id) {
  //   return deleteTask(id).then(() => {
  //     setTasks((prevTasks) =>
  //       prevTasks.filter((task) => Number(task.id) !== Number(id)),
  //     );
  //   });
  // }

  // function handleUpdateTask(updatedTask) {
  //   return updateTask(updatedTask.id, updatedTask).then((response) => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         Number(task.id) === Number(updatedTask.id) ? response.data : task,
  //       ),
  //     );
  //   });

  // return {
  //   tasks,
  //   loading,
  //   handleAddTask,
  //   moveTask,
  //   deletingTask,
  //   handleUpdateTask,
  // };