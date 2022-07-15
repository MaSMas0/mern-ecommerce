import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./reducers/Product/ProductListSlice";
import ProductDetailsReducer from "./reducers/Product/ProductDetailsSlice";
import CartReducer from "./reducers/Cart/CartSlice";
import UserLoginReducer from "./reducers/User/UserLoginSlice";
import UserRegisterReducer from "./reducers/User/UserRegisterSlice";

const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer,
    userLogin: UserLoginReducer,
    userRegister:UserRegisterReducer
  },
});

export default store;
