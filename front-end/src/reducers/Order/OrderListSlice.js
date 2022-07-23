


import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        orders:[],
};

export const orderListSlice = createSlice({
  name: "OrderList",
  initialState,
  reducers: {
        orderListRequest: (state) => {
          state.loading = true;
        },
        orderListSuccess: (state,action) => {
          state.loading = false;
          state.orders = action.payload;
        },
        orderListFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
        orderListReset: () => ({orders:[]}),
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderListSuccess,
    orderListFail,
    orderListRequest,
    orderListReset
} = orderListSlice.actions;

export default orderListSlice.reducer;
