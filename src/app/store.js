import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productsFetch,
} from "../features/products/productsSlice";
import { productsApi } from "../features/products/productsApi";
import cartReducer, { getTotals } from "../features/products/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());
