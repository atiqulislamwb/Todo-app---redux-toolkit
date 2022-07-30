import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: 1, title: "todo1", completed: true }];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime().toLocaleString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toogleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      const deleteTodos = state.filter((todo) => todo.id !== action.payload.id);
      return deleteTodos;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, toogleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
