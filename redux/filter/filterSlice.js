'use client'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'null'
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    iphoneFilter(state, action) {
      state.value = action.payload;
    }
  }
})

export const { iphoneFilter } = filterSlice.actions;
export default filterSlice.reducer;