import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            todos = [
                ...state,
                action.payload
            ]
        }
    }
});

export const { addTodos } = slice.actions;
export default slice.reducer;