import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./reducers/ProductListSlice";
import ProductDetailsReducer from "./reducers/ProductDetailsSlice";
import CartReducer from "./reducers/CartSlice";

const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer,
  },
});

export default store;
