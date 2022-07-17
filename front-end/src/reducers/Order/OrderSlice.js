import { createSlice } from "@reduxjs/toolkit";


const initialState = {

};

export const OrderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
        orderCreateRequest: (state, action) => {
          state.loading = true;
        },
        orderCreateSuccess: (state, action) => {
          state.loading = false;
          state.success = true;
          state.order = action.payload;
        },
        orderCreateFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderCreateRequest,
    orderCreateSuccess,
    orderCreateFail,
} = OrderSlice.actions;

export default OrderSlice.reducer;
