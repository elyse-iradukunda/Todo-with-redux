import { useState } from "react";


function TodoForm() {
  

    return (
        <div>
              <form action="" method="post">
                 <h1>Add Items</h1>
                  <input type="text" placeholder="Add New Item here" name="values" />
                  <button type="button">Add New Item</button>

              </form>
        </div>
    );
}

export default TodoForm;