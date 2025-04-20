// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../Slice/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // This is fine as long as cartReducer matches the export
  },
});
