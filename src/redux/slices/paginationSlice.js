import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  generation: 1,
  currentPage: 1,
  totalPages: 13,
  resultsPerPage: 12,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setGeneration(state, action) {
      state.generation = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
});

export const { setGeneration, setCurrentPage, setTotalPages } =
  paginationSlice.actions;

export default paginationSlice.reducer;
