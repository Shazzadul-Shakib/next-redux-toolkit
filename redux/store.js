'use client'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"; //imported counterSlice.reducer as counterReducer

// The root reducer is the combine of all reducers from slice
const rootReducer = combineReducers({
  counter: counterReducer,
})
// configure the store and export from here , inside root reducer
export const store = configureStore({
  reducer : rootReducer
})