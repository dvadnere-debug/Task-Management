

import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../store/apiSlice";

export function useTasks() {

  const { data:tasks=[], isLoading } = useGetTasksQuery();
console.log(useGetTasksQuery());
  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  return {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
  };
}
