import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initailState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const res = await axios.get("http://localhost:8000/products");
    return res?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initailState,
  reducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
