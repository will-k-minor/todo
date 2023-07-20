import { useState } from "react";
import { PropTypes } from "prop-types";

const ToDoForm = ({ addToList }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addToList(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Text goes here"
          onChange={(e) => setName(e.target.value)}
        />
        <button type={"submit"}> Submit </button>
      </form>
    </div>
  );
};

ToDoForm.propTypes = {
  addToList: PropTypes.func,
};

export default ToDoForm;
