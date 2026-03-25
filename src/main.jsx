import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./features/TodoSlice.jsx"

// const store = configureStore({
//   reducer: {
//     Todos: TodoReducer,
//     Todos2: TodoReducer,
//     Todos3: TodoReducer
//   }
// })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
       <App />
    {/* </Provider> */}
  </StrictMode>,
)
