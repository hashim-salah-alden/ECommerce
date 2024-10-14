import { createSlice } from "@reduxjs/toolkit";
import actGetProducts from "./act/actGetProducts";
import actGetProductById from "./act/actGetProductById";
import actGetAllProducts from "./act/actGetAllProducts";

const initialState = {
  records: [],
  products:[],
  productFullInfo: {},
  totalPages: 0 ,
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
    // get All products
    builder.addCase(actGetAllProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAllProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.products = action.payload.products;
      state.totalPages = action.payload.total;
    });
    builder.addCase(actGetAllProducts.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = "failed";
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

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

export { actGetProducts, actGetProductById, actGetAllProducts };
export const { cleanUpProductsRecords } = productsSlice.actions;
export default productsSlice.reducer;
