import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addtodo, deletetodo } from '../redux/todo/todo';

const Mainbar = () => {
    const todo = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [task, setTask] = useState(""); // State to manage the form input value

    const handleAdd = (e) => {
        e.preventDefault(); // Prevent the form from reloading the page
        if (task.trim() === "") return; // Prevent adding empty tasks
        dispatch(addtodo(task)); // Dispatch the addtodo action with the task value
        setTask(""); // Clear the input field
    };

    const handleDel = (id) => {
        console.log(id);
        
        dispatch(deletetodo(id)); // Dispatch the deletetodo action with the task's ID
    };

    return (
        <div className="flex-1 bg-gray-400 p-4">
            <form onSubmit={handleAdd}>
                <label htmlFor="addtask">Add Task</label>
                <input 
                    type="text" 
                    name="addtask" 
                    id="addtask" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} // Update the task state on input change
                    className="ml-2 px-2 py-1"
                />
                <button type="submit" className="ml-2 bg-green-500 text-white px-4 py-2 rounded">Add</button>
            </form>

            <div className="mt-4">
                {todo.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => handleDel(item.id)} 
                        className="flex bg-black text-cyan-400 p-2 mt-2 "
                    >
                        <p className="">{item.task}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mainbar;
