import { useState } from "react";


function TodoForm() {
  
    const [task,setTasks] = useState([]);

        const handleSubmit=(e)=>{
            e.preventDefault();
           
            const values = e.target.task.value;

            setTasks([...task, values ]);
        }

    return (
        <div>
              <form action="" onSubmit={handleSubmit} method="post">
                 <h1>Add Items</h1>
                  <input type="text" placeholder="Add New Item here" name="task" />
                  <button type="submit">Add New Item</button>
              </form>
                
                <div>
                     <ul>
                         { task.map((elm,i)=>{
                            return <li key={i}>{elm}</li>
                         })}
                     </ul>
                </div>

        </div>
    );
}

export default TodoForm;