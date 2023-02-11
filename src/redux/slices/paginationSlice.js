import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  generation: 1,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setGeneration(state, action) {
      state.generation = action.payload;
    },
  },
});

export const { setGeneration } = paginationSlice.actions;

export default paginationSlice.reducer;
