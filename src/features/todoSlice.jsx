import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {

        AddTask: (state,action) => {
            state.push(action.payload)
        },
        PopTask: (state) => {
            state.pop()
        }

    }
})

export const {AddTask,PopTask} = TodoSlice.actions

export default TodoSlice.reducer