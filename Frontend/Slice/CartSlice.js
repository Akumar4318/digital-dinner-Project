import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(item => item._id === action.payload._id);
      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item._id !== action.payload); 
    },
    increaseQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);
      if (item) {
        item.quantity += 1; 
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find(item => item._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1; 
        } else {
          state = state.filter(item => item._id !== action.payload); 
        }
      }
    },
    clearCart: (state) => {
      return []; 
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart } = CartSlice.actions;

export default CartSlice.reducer;
