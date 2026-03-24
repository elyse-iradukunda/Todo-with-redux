import { createSlice } from "@reduxjs/toolkit";

 const todoSlice = createSlice({
    name:"todoList",
    initialState: [
        {id:1,tittle:"task 1",isCompleted:false},
        {id:2,tittle:"task 2",isCompleted:true},
        {id:3,tittle:"task 3",isCompleted:false},

    ]
    ,
    reducers: {
        
        todos: (state,action)=>{
             
             const newTask = {

                id: Date.now(),
                tittle: action.payload.tittle,
                isCompleted: false
             }

             state.push(newTask);
        }
        }
    })

    export  const {todos}  = todoSlice.actions
    export default todoSlice.reducer