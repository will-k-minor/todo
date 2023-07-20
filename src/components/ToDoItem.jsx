import { useState } from "react";
import { PropTypes } from "prop-types";
import "./ToDoItem.css";

const ToDoItem = ({ name, removeToDo }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div className="main">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted()}
      />
      <p className={completed ? "completed" : "standard"}>{name}</p>
      <button onClick={removeToDo}>X</button>
    </div>
  );
};

ToDoItem.propTypes = {
  name: PropTypes.string,
  removeToDo: PropTypes.func,
};

export default ToDoItem;
