import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../features/todoSlice";

function TodoForm() {

const task = useSelector((state) => state.todos || []);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.task.value;
    if (!value) return;

    dispatch(addTodo({ title: value }));
    e.target.reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Add Items</h1>

        <input
          type="text"
          placeholder="Add New Item here"
          name="task"
          className="input"
        />

        <button type="submit" className="button">
          Add New Item
        </button>
      </form>

      <div className="list-container">
        <ul>
          {task.map((elm) => (
            <li key={elm.id} className="list-item">
              
              <input
                type="checkbox"
                checked={elm.isCompleted}
                onChange={() => dispatch(toggleTodo(elm.id))}
              />

              {elm.title}

              <button
                className="delete-btn"
                type="button"
                onClick={() => dispatch(deleteTodo(elm.id))}
              >
                Delete
              </button>

            </li>
          ))}
        </ul>
      </div>

      <h2>Here is Total tasks: {task.length}</h2>
    </div>
  );
}

export default TodoForm;