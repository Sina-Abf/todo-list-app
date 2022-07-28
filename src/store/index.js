import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
