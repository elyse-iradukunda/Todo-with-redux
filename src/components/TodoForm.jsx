import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, toggleTodo, editTodo } from "../features/todoSlice";

function TodoForm() {

  const task = useSelector((state) => state.todos || []);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.task.value;
    if (!value) return;

    dispatch(addTodo({ title: value }));
    e.target.reset();
  };

  const handleEdit = (elm) => {
    setEditId(elm.id);
    setEditValue(elm.title);
  };

  const handleSave = (id) => {
    if (!editValue) return;
    dispatch(editTodo({ id, title: editValue }));
    setEditId(null);
    setEditValue("");
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
    
    <div className="left">
      <input
        type="checkbox"
        checked={elm.isCompleted || false}
        onChange={() => dispatch(toggleTodo(elm.id))}
        className="checkbox"
      />

      {editId === elm.id ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className={elm.isCompleted ? "completed-text" : "text"}>
          {elm.title}
        </span>
      )}
    </div>

    <div className="actions">
      {editId === elm.id ? (
        <>
          <button
            type="button"
            onClick={() => handleSave(elm.id)}
            className="save-btn"
          >
            Save
          </button>

          <button
            type="button"
            onClick={() => setEditId(null)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => handleEdit(elm)}
          className="edit-btn"
        >
          Edit
        </button>
      )}

      <button
        className="delete-btn"
        type="button"
        onClick={() => dispatch(deleteTodo(elm.id))}
      >
        Delete
      </button>
    </div>

  </li>
))}
        </ul>
      </div>

      <h2>Here is Total tasks: {task.length}</h2>
    </div>
  );
}

export default TodoForm;