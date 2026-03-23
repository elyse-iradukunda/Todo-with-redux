 import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../features/todos/todoSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

      <button onClick={() => dispatch(removeTodo(todo.id))}>
        Delete
      </button>
    </div>
  );
}