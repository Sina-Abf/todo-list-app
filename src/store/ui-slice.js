import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isVisible: false },
  reducers: {
    setIsVisible(state) {
      state.isVisible = true;
    },
    setIsInvisible(state) {
      state.isVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
