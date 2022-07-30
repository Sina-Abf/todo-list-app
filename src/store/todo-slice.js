import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'TODO',
  initialState: { todoList: [] },
  reducers: {
    addNewTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo() {},
    updateTodo() {},
    editTodo() {},
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
