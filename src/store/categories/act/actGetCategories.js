import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;

    try {
      const res = await axios.get("https://dummyjson.com/products/categories", {
        signal,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default actGetCategories;
