import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    value: 'ALL'
  },
  reducers: {
    setFilter(state, action) {
      state.value = action.payload;
    }
  }
});

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
