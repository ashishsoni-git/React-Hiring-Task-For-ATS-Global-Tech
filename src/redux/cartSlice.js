import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.items.find(p => p.id === action.payload.id);
      if (exists) {
        exists.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    updateQty: (state, action) => {
  const product = state.items.find(p => p.id === action.payload.id);
  if (product) {
    product.qty = action.payload.qty;
  }
},
removeFromCart: (state, action) => {
  state.items = state.items.filter(p => p.id !== action.payload);
},
  },
});

export const { addToCart, removeFromCart, updateQty } = cartSlice.actions;
export default cartSlice.reducer;
