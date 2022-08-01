import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'TODO',
  initialState: { todoList: [], isChecked: false },
  reducers: {
    addNewTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      const toBeRemovedItemId = action.payload;

      state.todoList = state.todoList.filter(
        (item) => item.id !== toBeRemovedItemId
      );
    },
    updateTodo(state, action) {
      const toBeUpdatedItemId = action.payload.id;
      const toBeUpdatedItemTitle = action.payload.title;

      const findItem = state.todoList.find(
        (item) => item.id === toBeUpdatedItemId
      );

      if (findItem) {
        findItem.title = toBeUpdatedItemTitle;
      }
    },

    setIsChecked(state) {
      state.isChecked = true;
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice;
