'use client'
import { Provider } from "react-redux";
import { store } from "./store";

// Provider which will handle the states globally in the main layout
export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}