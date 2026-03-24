import { useState } from "react";
import "../index.css";
import { useDispatch } from "react-redux";
import { todos } from "../features/todoSlice";

function TodoForm() {

    const Dispatch= useDispatch();


  const [task, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    Dispatch(todos({
        title: e.target.task.value,

    }))

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
            return <li key={i} className="list-item"> <input type="checkbox" name="" id={i} /> {elm} <button className="delete-btn" type="button" onClick={()=>handleDelete(i)}>Delete</button> </li>;
          })}
        </ul>
      </div>  
       <h2>Here is Total tasks: {task.length}</h2>
    </div>
  );
}

export default TodoForm;