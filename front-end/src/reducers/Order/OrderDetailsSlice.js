import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading:true,
    orderItems:[],
    shippingAddress:{}
};

export const OrderDetailsSlice = createSlice({
  name: "Order Details",
  initialState,
  reducers: {
        orderDetailsRequest: (state) => {
          state.loading = true;
        },
        orderDetailsSuccess: (state, action) => {
          state.loading = false;
          state.order = action.payload;
          state.order.itemsPrice = (
          state.order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)).toFixed(2)
          
        },
        orderDetailsFail: (state, action) => {
          state.loading = false;
          state.error = action.payload;
        },
      },
    });

// Action creators are generated for each case reducer function
export const {
    orderDetailsRequest,
    orderDetailsSuccess,
    orderDetailsFail,
} = OrderDetailsSlice.actions;

export default OrderDetailsSlice.reducer;
