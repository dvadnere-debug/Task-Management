import { useState, useEffect } from "react";
import "./AddTaskForm.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function AddTaskForm({ onAddTask, onClose, isOpen, editTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setDeadline(editTask.deadline);
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !deadline) {
      alert("Fill the fields");
      return;
    }
    const newTask = {
      id: editTask ? editTask.id : String(Date.now()),
      title,
      description,
      deadline,
      status: editTask ? editTask.status : "todo",
    };

    onAddTask(newTask); //parent child communication, taskBoard passes function as a prop, AddTaskForm calles function (onAddTask) with data, TaskBoard updates state.
    setTitle("");
    setDescription("");
    setDeadline("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onAddtask={onAddTask}
      onClose={onClose}
      className="modal-popup"
    >
      <h2>{editTask ? "Edit task" : "Add new Task"}</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h3>{editTask ? "Update Task" : "Add Task"}</h3>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <br />

        <button type="submit">Add</button>
      </form>
    </Modal>
  );
}
