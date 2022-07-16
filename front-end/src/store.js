import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./reducers/Product/ProductListSlice";
import ProductDetailsReducer from "./reducers/Product/ProductDetailsSlice";
import CartReducer from "./reducers/Cart/CartSlice";
import UserLoginReducer from "./reducers/User/UserLoginSlice";
import UserRegisterReducer from "./reducers/User/UserRegisterSlice";
import UserDetailsReducer from "./reducers/User/UserDetailsSlice";
import UserUpdateProfileReducer from "./reducers/User/UserUpdateProfileSlice";

const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
    cart: CartReducer,
    userLogin: UserLoginReducer,
    userRegister:UserRegisterReducer,
    userDetails:UserDetailsReducer,
    userUpdateProfile:UserUpdateProfileReducer
  },
});

export default store;
