import React, { useContext } from 'react';
import task from './context/TodoContext';
import useLocal from './hook/useLocal';

const List = () => {
    const { todo, addTodo } = useContext(task)
    console.log(todo, addTodo);
    const handleSubmit = (e) => {
        console.log(e);
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit} >
                <label htmlFor="task">Name Task</label>
                <input type="text" name="" id="task" />
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </>
    );
};

export default List;
