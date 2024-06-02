import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      // mutating/modifying the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items = state.items.filter(item => item.id !== action.payload.id);
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
