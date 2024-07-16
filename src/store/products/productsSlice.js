import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import actGetProductById from "./act/actGetProductById";

const initialState = {
  records: [],
  productFullInfo: {},
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsRecords: (state) => {
      state.records = [];
      state.productFullInfo = {};
    },
  },
  extraReducers: (builder) => {
    // get products by category
    builder.addCase(actGetProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    // get singel product by id
    builder.addCase(actGetProductById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductById.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetProductById.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { actGetProducts, actGetProductById };
export const { cleanUpProductsRecords } = productsSlice.actions;
export default productsSlice.reducer;
