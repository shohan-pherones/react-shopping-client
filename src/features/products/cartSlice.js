import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // Checking if the item is already added
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // If the item exists, increase it's quantity by 1
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].cartQuantity += 1;
      } else {
        const productAssemble = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(productAssemble);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
