import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice.jsx"

 export const store = configureStore({
    reducer: {
         todos: todoReducer
    }
 });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>,
)
