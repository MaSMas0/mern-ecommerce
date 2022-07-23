import { configureStore } from "@reduxjs/toolkit";
import productListReducer from "./reducers/Product/ProductListSlice";
import productDetailsReducer from "./reducers/Product/ProductDetailsSlice";
import productDeleteReducer from "./reducers/Product/ProductDeleteSlice";
import productCreateReducer from "./reducers/Product/ProductCreateSlice";
import productUpdateReducer from "./reducers/Product/ProductUpdateSlice";
import productReviewCreateReducer from "./reducers/Product/ProductReviewCreateSlice";
import productTopRatedReducer from "./reducers/Product/ProductTopRatedSlice";
import cartReducer from "./reducers/Cart/CartSlice";
import userLoginReducer from "./reducers/User/UserLoginSlice";
import userRegisterReducer from "./reducers/User/UserRegisterSlice";
import userDetailsReducer from "./reducers/User/UserDetailsSlice";
import userUpdateProfileReducer from "./reducers/User/UserUpdateProfileSlice";
import userListReducer from "./reducers/User/UserListSlice";
import userDeleteReducer from "./reducers/User/UserDeleteSlice";
import userUpdateReducer from "./reducers/User/UserUpdateSlice";
import orderCreateReducer from "./reducers/Order/OrderSlice";
import orderDetailsReducer from "./reducers/Order/OrderDetailsSlice";
import orderPayReducer from "./reducers/Order/OrderPaySlice";
import orderDeliverReducer from "./reducers/Order/OrderDeliverSlice";
import orderListMyReducer from "./reducers/Order/OrderMyListSlice";
import orderListReducer from "./reducers/Order/OrderListSlice";

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
  },
});

export default store;
