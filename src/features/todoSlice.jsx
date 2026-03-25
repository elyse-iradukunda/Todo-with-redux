import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "task 1", isCompleted: false },
  { id: 2, title: "task 2", isCompleted: true },
  { id: 3, title: "task 3", isCompleted: false }
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        isCompleted: false
      });
    },

    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },

    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    }

  }
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;