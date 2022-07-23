import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const ProductCreateSlice = createSlice({
  name: "productCreate",
  initialState,
  reducers: {
    productCreateRequest: (state) => {
      state.loading = true;
    },
    productCreateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.product = action.payload;
    },
    productCreateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    productCreateReset: () => ({}),
  },
});

// Action creators are generated for each case reducer function
export const {
  productCreateRequest,
  productCreateSuccess,
  productCreateFail,
  productCreateReset
} = ProductCreateSlice.actions;

export default ProductCreateSlice.reducer;



