
import { createSlice } from "@reduxjs/toolkit";


const initialState = {

};

export const orderPaySlice = createSlice({
  name: "OrderPay",
  initialState,
  reducers: {
        orderPayRequest: (state) => {
          state.loading = true;
        },
        orderPaySuccess: (state) => {
          state.loading = false;
          state.success = true;
        },
        orderPayFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        orderPayReset: () => ({}),
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderPaySuccess,
    orderPayFail,
    orderPayRequest,
    orderPayReset
} = orderPaySlice.actions;

export default orderPaySlice.reducer;






