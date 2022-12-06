import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../ReduxComponents/Actions";

const Addtask = () => {
  const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter New Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTask}>Addtask</button>
    </div>
  );
};

export default Addtask;
