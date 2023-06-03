import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {
    addProducts: (state, payload) => {
      state.push(payload);
    },
    removeProducts: (state, payload) => {
      state.map((item) =>
        item.id === payload.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const { addProducts, removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
