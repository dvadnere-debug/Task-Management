import { useState } from "react";
import "./AddTaskForm.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function AddTaskForm({ onAddTask, onClose, isOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: String(Date.now()),
      title,
      description,
      deadline,
      status: "todo",
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
      <h2>Add new Task</h2>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <h3>Add Task</h3>

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
