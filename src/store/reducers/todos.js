import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isPending: false,
}
export const todosReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setIsPending: (state, action) => {
            return {
                ...state,
                isPending: action.payload
            }
        },
        setTodos: (state, action) => {
            return {
                ...state,
                items: action.payload
            }
        },

        editTodo: (state, action) => {
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id 
                    ? {...item, ...action.payload} 
                    : item
                )
            }
        },

        addTodo: (state, action) => {
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        },

        removeTodo: (state, action) => {
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            }
        }
    }
})


export const {  setTodos, addTodo, removeTodo, editTodo, setIsPending } = todosReducer.actions