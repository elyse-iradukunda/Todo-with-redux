import { useState } from "react";
import "../index.css";

function TodoForm() {
  const [task, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = e.target.task.value;
    if (!values) return;

    setTasks([...task, values]);
    e.target.reset();
  };

  const handleDelete = (index)=>{
       
    const del = task.filter((_,i)=> i!==index);
    setTasks(del);
  }

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
          {task.map((elm, i) => {
            return <li key={i} className="list-item">{elm} <button className="delete-btn" type="button" onClick={()=>handleDelete(i)}>Delete</button> </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;