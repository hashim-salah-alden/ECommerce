import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetAllProducts = createAsyncThunk(
  "products/actGetAllProducts",
  async (currentPage, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get(`https://dummyjson.com/products?limit=16&skip=${currentPage * 16}`, { signal });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetAllProducts;
