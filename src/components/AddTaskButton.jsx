 import React from "react";
 function AddTaskButton({ onAddClick = () => {} }) {
  return (
    <div>{onAddClick && <button onClick={onAddClick}>+ Add Task</button>}</div>
  );
}
export default React.memo(AddTaskButton);
