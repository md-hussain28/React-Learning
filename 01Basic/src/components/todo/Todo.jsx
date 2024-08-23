import React from 'react'
import ContextProvider from './context/ContextProvider'
import List from './List'

const Todo = () => {
  return (
    <ContextProvider>
    <div className='min-h-screen bg-purple-900'>
       <List/>
    </div>
    </ContextProvider>
  )
}

export default Todo
