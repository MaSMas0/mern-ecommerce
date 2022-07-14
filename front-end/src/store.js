
import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./reducers/ProductListSlice";
import ProductDetailsReducer from "./reducers/ProductDetailsSlice";


const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
  },
});

export default store;
