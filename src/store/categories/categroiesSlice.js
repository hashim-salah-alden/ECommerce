import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories"



const initialState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (typeof(action.payload) === "string") {
        state.error = action.payload;
      }
    });
  }
});


export { actGetCategories };
// export const { categoriesRecordsCleanUp } = categoriesSlice.actions;       export the action 
export default categoriesSlice.reducer;