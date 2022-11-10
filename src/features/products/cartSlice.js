import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].cartQuantity += 1;
        toast.info("Quantity increased", {
          position: "bottom-left",
          theme: "dark",
        });
      } else {
        const productAssemble = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(productAssemble);
        toast.success("Item added", {
          position: "bottom-left",
          theme: "dark",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = updatedCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error("Item removed", {
        position: "bottom-left",
        theme: "dark",
      });
    },

    decreaseCart(state, action) {
      const itemindex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemindex].cartQuantity > 1) {
        state.cartItems[itemindex].cartQuantity -= 1;

        toast.info("Quantity decreased", {
          position: "bottom-left",
          theme: "dark",
        });
      } else if (state.cartItems[itemindex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = updatedCartItems;

        toast.error("Item removed", {
          position: "bottom-left",
          theme: "dark",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];

      toast.error("Cart cleared", {
        position: "bottom-left",
        theme: "dark",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals(state, action) {
      const { subtotal, quantity } = state.cartItems.reduce(
        (acc, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          acc.subtotal += itemTotal;
          acc.quantity += cartQuantity;

          return acc;
        },
        {
          subtotal: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = subtotal;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
