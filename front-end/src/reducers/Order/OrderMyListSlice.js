


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        orders:[],
};

export const orderListMySlice = createSlice({
  name: "OrderListMy",
  initialState,
  reducers: {
        orderListMyRequest: (state) => {
          state.loading = true;
        },
        orderListMySuccess: (state,action) => {
          state.loading = false;
          state.orders = action.payload;
        },
        orderListMyFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        orderListMyReset: () => ({orders:[]}),
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderListMySuccess,
    orderListMyFail,
    orderListMyRequest,
    orderListMyReset
} = orderListMySlice.actions;

export default orderListMySlice.reducer;





