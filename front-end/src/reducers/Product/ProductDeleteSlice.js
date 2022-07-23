import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const ProductDeleteSlice = createSlice({
  name: "productDelete",
  initialState,
  reducers: {
    productDeleteRequest: (state) => {
      state.loading = true;
    },
    productDeleteSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
    },
    productDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  productDeleteRequest,
  productDeleteSuccess,
  productDeleteFail,
} = ProductDeleteSlice.actions;

export default ProductDeleteSlice.reducer;


