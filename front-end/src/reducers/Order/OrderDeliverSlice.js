

import { createSlice } from "@reduxjs/toolkit";


const initialState = {

};

export const orderDeliverSlice = createSlice({
  name: "OrderDeliver",
  initialState,
  reducers: {
        orderDeliverRequest: (state) => {
          state.loading = true;
        },
        orderDeliverSuccess: (state) => {
          state.loading = false;
          state.success = true;
        },
        orderDeliverFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        orderDeliverReset: () => ({}),
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderDeliverSuccess,
    orderDeliverFail,
    orderDeliverRequest,
    orderDeliverReset
} = orderDeliverSlice.actions;

export default orderDeliverSlice.reducer;


