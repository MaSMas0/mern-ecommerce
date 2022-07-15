import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
};

export const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    productDetailsRequest: (state, action) => {
      state.loading = true;
      state.product = {};
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
