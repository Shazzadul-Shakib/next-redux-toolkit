import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./Services/api"; // Ensure the correct path to your api configuration
import counterReducer from "./counter/counterSlice";
import loginReducer from "./login/loginSlice";
import filterReducer from "./filter/filterSlice";

// The root reducer is the combination of all reducers
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  counter: counterReducer,
  isLoggedIn: loginReducer,
  filter:filterReducer
});

// Configure the store with the RTK-Query middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// You should also call setupListeners to enable automatic request lifecycle management
setupListeners(store.dispatch);
