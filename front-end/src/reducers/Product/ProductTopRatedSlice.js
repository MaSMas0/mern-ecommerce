import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
};

export const ProductTopRatedSlice = createSlice({
  name: "productTopRated",
  initialState,
  reducers: {
    productTopRatedRequest: (state) => {
      state.loading = true;
    },
    productTopRatedSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productTopRatedFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  productTopRatedRequest,
  productTopRatedSuccess,
  productTopRatedFail,
} = ProductTopRatedSlice.actions;

export default ProductTopRatedSlice.reducer;