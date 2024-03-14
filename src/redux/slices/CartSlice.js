import { createSlice } from "@reduxjs/toolkit";

// createSlice is a function provided by the Redux Toolkit to simplify the process of defining Redux actions and reducers.

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;

//add & remove are the reducer function
//By using action.payload we can access  input parameter
