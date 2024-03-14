import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartSlice";

//configureStore from Redux Toolkit not only creates a store but can also accept reducer functions as arguments and automatically sets up the Redux DevTools Extension for easy debugging.

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
