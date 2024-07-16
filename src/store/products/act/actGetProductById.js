import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetProductById = createAsyncThunk(
  "products/actGetProductById",
  async (productId, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${productId}`,
        { signal }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetProductById;






  

