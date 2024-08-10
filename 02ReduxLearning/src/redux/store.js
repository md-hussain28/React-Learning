import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todo/todo'

export const store =configureStore({
    reducer :{
        todo: todoReducer
    }
})
