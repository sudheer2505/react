import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here / directly modifying the state
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// console.log("slice = ", cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
