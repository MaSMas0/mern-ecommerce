import {
    productListRequest,
    productListSuccess,
    productListFail,
  } from "../../reducers/Product/ProductListSlice";
  import { productDetailsFail, productDetailsRequest, productDetailsSuccess } from "../../reducers/Product/ProductDetailsSlice";
  import { productDeleteFail, productDeleteRequest, productDeleteSuccess } from "../../reducers/Product/ProductDeleteSlice";
  import { productCreateFail, productCreateRequest, productCreateSuccess } from "../../reducers/Product/ProductCreateSlice";
  import { productUpdateFail, productUpdateRequest, productUpdateSuccess } from "../../reducers/Product/ProductUpdateSlice";
  import { productReviewCreateFail, productReviewCreateRequest, productReviewCreateSuccess } from "../../reducers/Product/ProductReviewCreateSlice";
  import { productTopRatedFail, productTopRatedRequest, productTopRatedSuccess } from "../../reducers/Product/ProductTopRatedSlice";
  import { logout } from "../User/UserAction";
  import axios from "axios";
  
  export const listProducts = (keyword='', pageNumber= '') => async (dispatch) => {
    try {
      dispatch(productListRequest());
      const { data } = await axios.get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
      dispatch(productListSuccess(data));
    } catch (error) {
      dispatch(
        productListFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
      );
    }
  };
  
export const DetailsOfProduct = (id) => {
    return async (dispatch) => {
      try {
        dispatch(productDetailsRequest());
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch(productDetailsSuccess(data));
      } catch (error) {
        dispatch(
          productDetailsFail(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      }
    };
  };
  
  export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch(productDeleteRequest());
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.delete(`/api/products/${id}`, config)
  
      dispatch(productDeleteSuccess());
  
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch(productDeleteFail(message));
    }
  }
  
  export const createProduct = () => async (dispatch, getState) => {
    try {
        dispatch(productCreateRequest());
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`/api/products`, {}, config)
      dispatch(productCreateSuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch(productCreateFail(message));
    }
  }
  
  export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch(productUpdateRequest());
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      )
  
      dispatch(productUpdateSuccess(data));
      dispatch(productDetailsSuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch(productUpdateFail(message));
    }
  }
  
  export const createProductReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    try {
        dispatch(productReviewCreateRequest());
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      await axios.post(`/api/products/${productId}/reviews`, review, config)
  
      dispatch(productReviewCreateSuccess());

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch(productReviewCreateFail(message));

    }
  }
  
  export const listTopProducts = () => async (dispatch) => {
    try {
        dispatch(productTopRatedRequest());

  
      const { data } = await axios.get(`/api/products/top`)
  
      dispatch(productTopRatedSuccess(data));

    } catch (error) {
      dispatch(productTopRatedFail(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message))
  }
}