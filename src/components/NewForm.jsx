import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTask, PopTask } from "../features/TodoSlice"

export const NewForm = ( ) => {

    const [task,setTask] = useState("")
    const dispatch = useDispatch()
    const selector = useSelector(state=>state)
    console.log(selector.Todos)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(AddTask(task))

        
    }

    const handlePop = () => {

        dispatch(PopTask())
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={e=>setTask(e.target.value)} />
        <button>send</button>
        <button type="button" onClick={handlePop}>pop</button>
    </form>
}