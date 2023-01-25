import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
  limit: 151,
  offset: 0,
};

const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
    },
    setOffset(state, action) {
      state.offset = action.payload;
    },
  },
});

export const { setPage, setLimit, setOffset } = paginationSlice.actions;

export default paginationSlice.reducer;
