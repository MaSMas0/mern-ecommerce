import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    productListRequest: (state) => {
      state.loading = true;
      state.products = [];
    },
    productListSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    productListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { productListRequest, productListSuccess, productListFail } =
  productListSlice.actions;

export default productListSlice.reducer;
