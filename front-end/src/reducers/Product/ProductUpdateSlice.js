import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:{}
};

export const ProductUpdateSlice = createSlice({
  name: "productUpdate",
  initialState,
  reducers: {
    productUpdateRequest: (state) => {
      state.loading = true;
    },
    productUpdateSuccess: (state,action) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productUpdateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productUpdateReset: () => ({product:{}}),
  },
});

// Action creators are generated for each case reducer function
export const {
  productUpdateRequest,
  productUpdateSuccess,
  productUpdateFail,
  productUpdateReset
} = ProductUpdateSlice.actions;

export default ProductUpdateSlice.reducer;

