import {createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
export const todoSlice =createSlice({
    name:'todo',
    initialState: [],
    reducers:{
        addtodo: (state,action)=>{
             const task={
                id: uuidv4(),
                task: action.payload
             }

            state.push(task);
            
            
        },
        deletetodo: (state,action)=>{
            console.log(action.payload);
            
            return state=state.filter((i)=>(i.id!==action.payload))
            console.log(state);
            
        }
    }
})

export const {addtodo,deletetodo} = todoSlice.actions

export default todoSlice.reducer