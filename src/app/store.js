import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetch,
} from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFetch());
