import { createContext, useState } from "react";
import { NewForm } from "./components/NewForm";
import DisplayArr from "./DisplayArr";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

export const Context = createContext()


export default function App() {

  const [arr,setArr] = useState([1,2,3,4])
  return (
    <>
       {/* <TodoList/>
       <TodoForm/> */}
       {/* <NewForm /> */}

       <Context.Provider value={{arr,setArr}}>
        <DisplayArr />
       </Context.Provider>
    </>
  );
}