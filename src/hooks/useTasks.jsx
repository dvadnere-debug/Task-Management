import { useDispatch } from "react-redux";
import {
  useAddTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  api,
} from "../store/apiSlice";

export function useTasks() {
  const dispatch = useDispatch();

  const { data: tasks = [], isLoading } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTrigger] = useDeleteTaskMutation();

  const deleteTaskWithUndo = async (taskId) => {
    // optimistic update
    const patchResult = dispatch(//fires a redux action for rtk query's cache updation(action)
      //modifies the chache of getTasks quer without server request and refetch
      //undefined is a query arg
      // draft is the current cached data of getTasks which is an object of immer draft so we can directly mutate it
      api.util.updateQueryData("getTasks", undefined, (draft) => {
        const index = draft.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          draft.splice(index, 1);
        }
      })
    );

    const confirmDelete = window.confirm("Click 'Cancel' to UNDO.");

    // if user chose undo
    if (!confirmDelete) {
      patchResult.undo();
      console.log("Undo successful");
      return;
    }

    // user confirmed delete
    try {
      await deleteTrigger(taskId).unwrap();
      console.log("Deleted from server");
    } catch (err) {
      patchResult.undo();
      alert("Server error: task restored");
    }
  };

  return {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask: deleteTaskWithUndo,
  };
}