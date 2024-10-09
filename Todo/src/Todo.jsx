import React, { useState } from 'react'

export default function Todo() {
    const [task, setTask] = useState("")
    const [todolist, setTodolist] = useState([])
    
   const AddTask = () =>{
      if(task.trim()){
        setTodolist([...todolist,task]);
        setTask("");
      }
   }

   const RemoveTask = (index) => {
    const newTodoList = [...todolist]; // Create a new array by copying the current list
    newTodoList.splice(index, 1); // Remove the task at the specified index
    setTodolist(newTodoList); // Update the state with the modified list
  };
  
  return (
    <>
    <div>Todo</div>
    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button onClick={AddTask}>Add</button>
    <ul>
      {todolist.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={RemoveTask}>Remove</button>
        </li>
      ))}
    </ul>

    </>
  )
}
