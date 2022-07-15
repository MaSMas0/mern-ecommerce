import { createSlice } from "@reduxjs/toolkit";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: cartItemsFromStorage,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          cartItems: [...state.cartItems, item],
        };
      }
    },
    cartRemoveItem: (state, action) => {
      return {
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartAddItem, cartRemoveItem } = CartSlice.actions;

export default CartSlice.reducer;
