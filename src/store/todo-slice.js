import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'TODO',
  initialState: { todoList: [], isChecked: false },
  reducers: {
    addNewTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo() {},
    updateTodo() {},
    editTodo() {},
    setIsChecked(state) {
      state.isChecked = true;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
