// import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import ProductListReducer from "./reducers/ProductListSlice";
import ProductDetailsReducer from "./reducers/ProductDetailsSlice";
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const reducer = combineReducers({})

// const intialState = {}

const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
  },
});

export default store;
