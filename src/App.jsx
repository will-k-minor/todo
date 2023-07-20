import { useCallback, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDoForm from "./components/ToDoForm";
import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const addToList = useCallback(
    (val) => {
      setList((list) => [...list, val]);
    },
    [setList]
  );

  const removeTodo = useCallback(
    (index) => setList((list) => list.filter((_, i) => i !== index)),
    [setList]
  );

  return (
    <>
      <div>
        <ToDoForm addToList={(val) => addToList(val)} />
      </div>
      <div className="card">
        {list.map((item, index) => (
          <ToDoItem
            key={`todoItem-${index}`}
            name={item}
            removeToDo={() => removeTodo(index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
