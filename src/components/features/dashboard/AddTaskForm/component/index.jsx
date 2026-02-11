// import { useState, useEffect } from "react";
import "../../AddTaskForm.css";
// import Modal from "react-modal";

// Modal.setAppElement("#root");
// export default function AddTaskForm({ onAddTask, onClose, isOpen, editTask }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [deadline, setDeadline] = useState("");

//   useEffect(() => {
//     if (editTask) {
//       setTitle(editTask.title);
//       setDescription(editTask.description);
//       setDeadline(editTask.deadline);
//     }
//   }, [editTask]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title || !description || !deadline) {
//       alert("Fill the fields");
//       return;
//     }
//     const newTask = {
//       id: editTask ? editTask.id : String(Date.now()),
//       title,
//       description,
//       deadline,
//       status: editTask ? editTask.status : "todo",
//     };

//     onAddTask(newTask); //parent child communication, taskBoard passes function as a prop, AddTaskForm calles function (onAddTask) with data, TaskBoard updates state.
//     setTitle("");
//     setDescription("");
//     setDeadline("");
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onAddtask={onAddTask}
//       onClose={onClose}
//       className="modal-popup"
//     >
//       <h2>{editTask ? "Edit task" : "Add new Task"}</h2>
//       <button className="close-button" onClick={onClose}>
//         X
//       </button>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <h3>{editTask ? "Update Task" : "Add Task"}</h3>

//         <input
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <br />

//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <br />

//         <input
//           type="date"
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//         />

//         <br />

//         <button type="submit">{editTask ? "Edit Complete" : "Add"}</button>
//       </form>
//     </Modal>
//   );
// }

import Modal from "react-modal";
import { useForm } from "react-hook-form";
// import FormInput from "../../../../FormInput";
import { TASK_FORM_CONFIG } from "../constant";
import Button from "../../../../../common/Button/Button";
import FormController from "../../../../../common/FormController";

Modal.setAppElement("#root");
export default function AddTaskForm({ isOpen, onClose, onAddTask, editTask }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editTask?.title || "",
      description: editTask?.description || "",
      deadline: editTask?.deadline || "",
      priority: editTask?.priority || "",
    },
  });

  function onSubmit(data) {
    const taskData = {
      ...editTask,
      ...data,
      status: editTask ? editTask.status : "todo",
      id: editTask ? editTask.id : Date.now().toString(),
    };

    onAddTask(taskData);
    reset();
    onClose();
  }

  return (
    <Modal
      isOpen={isOpen}

      onAddtask={onAddTask}
      onRequestClose={onClose}
      className="modal-popup"
    >
      <h3>{editTask ? "Edit Task" : "Add Task"}</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormController
          config={TASK_FORM_CONFIG}
          control={control}
          errors={errors}
        />

        {/* <SelectField
              label={label}
              options={options}
              errors={errors} 
              field={field}/> */}

        <Button type="submit">{editTask ? "Update" : "Add"} </Button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}
