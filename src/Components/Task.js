import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../ReduxComponents/Actions";
export const Task = ({ todo }) => {
  const dispatch = useDispatch();

  console.log(todo);
  return (
    <div >
      <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.task}
      </p>
      <button
        className="button-91"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        ✕
      </button>

      <button
        className="button-92"
        onClick={() => dispatch(toggleTodo(todo.id))}
      >
        ✓
      </button>
    </div>
  );
};
