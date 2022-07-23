import {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
} from "../../reducers/Order/OrderSlice";
import {
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
} from "../../reducers/Order/OrderDetailsSlice";
import {
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
} from "../../reducers/Order/OrderPaySlice";
import {
  orderDeliverRequest,
  orderDeliverSuccess,
  orderDeliverFail,
} from "../../reducers/Order/OrderDeliverSlice";
import {
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
} from "../../reducers/Order/OrderMyListSlice";
import {
  orderListRequest,
  orderListSuccess,
  orderListFail,
} from "../../reducers/Order/OrderListSlice";

import { logout } from '../User/UserAction'
import axios from "axios";
import { cartClearItems } from "../../reducers/Cart/CartSlice";
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderCreateRequest());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);
    dispatch(orderCreateSuccess(data));
    dispatch(cartClearItems(data));
    localStorage.removeItem('cartItems')
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(orderCreateFail(message));
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsRequest());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);
    dispatch(orderDetailsSuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(orderDetailsFail(message));
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(orderPayRequest());
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      );
      dispatch(orderPaySuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(orderPayFail(message));
    }
  };

export const deliverOrder =
  (order) => async (dispatch, getState) => {
    try {
      dispatch(orderDeliverRequest());
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/orders/${order._id}/deliver`,
        {},
        config
      );
      dispatch(orderDeliverSuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(orderDeliverFail(message));
    }
  };

export const listMyOrders =
  () => async (dispatch, getState) => {
    try {
      dispatch(orderListMyRequest());
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/orders/myorders`, config);
      dispatch(orderListMySuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(orderListMyFail(message));
    }
  };
export const listOrders =
  () => async (dispatch, getState) => {
    try {
      dispatch(orderListRequest());
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/orders`, config);
      dispatch(orderListSuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch(orderListFail(message));
    }
  };
