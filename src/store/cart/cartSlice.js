import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  loading: "idle",
  cartError: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartError = null;
      const findProduct = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        if (findProduct.quantity < findProduct.maxUnits) {
          findProduct.quantity += 1;
        } else {
          state.cartError = "you have reashed the max quantity";
        }
      } else {
        const itemClone = { ...action.payload, quantity: 1, maxUnits: 5 };
        state.cartProducts.push(itemClone);
      }
    },
    changeQuantity: (state, action) => {
      const selctedItem = state.cartProducts.find(
        (item) => item.id === action.payload.payload.id
      );
      selctedItem.quantity = +action.payload.selectedQuantity;
    },
    deleteFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToCart, changeQuantity, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
