import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {reviews:[]},
};

export const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    productDetailsRequest: (state) => {
      state.loading = true;
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  productDetailsRequest,
  productDetailsSuccess,
  productDetailsFail,
} = ProductDetailsSlice.actions;

export default ProductDetailsSlice.reducer;
