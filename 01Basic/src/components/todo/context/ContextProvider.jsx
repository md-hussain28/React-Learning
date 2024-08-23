import React, { useState } from 'react'
import task from './TodoContext'
import useLocal from '../hook/useLocal'

const generateUniqueId = () => `${Date.now()}-${Math.floor(Math.random() * 1000)}`;





const ContextProvider = ({children}) => {
    const [todo,setTodo]=useLocal("Todo",[]);

    const addTodo=(e)=>{
       
        const key=generateUniqueId();
     
        setTodo([...todo,{key,e}]);
    }
   
  return (
   <task.Provider value={{todo,addTodo}}>
     {children}
   </task.Provider>
  )
}

export default ContextProvider
