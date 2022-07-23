import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const ProductReviewCreateSlice = createSlice({
  name: "productReviewCreate",
  initialState,
  reducers: {
    productReviewCreateRequest: (state) => {
      state.loading = true;
    },
    productReviewCreateSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    productReviewCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productReviewCreateReset: () => ({}),
  },
});

// Action creators are generated for each case reducer function
export const {
  productReviewCreateRequest,
  productReviewCreateSuccess,
  productReviewCreateFail,
  productReviewCreateReset
} = ProductReviewCreateSlice.actions;

export default ProductReviewCreateSlice.reducer;

