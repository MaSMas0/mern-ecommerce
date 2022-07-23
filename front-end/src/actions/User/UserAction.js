import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} from "../../reducers/User/UserLoginSlice";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} from "../../reducers/User/UserRegisterSlice";
import {
  userDetailsRequest,
  userDetailsSuccess,
  userDetailsFail,
  userDetailsReset,
} from "../../reducers/User/UserDetailsSlice";
import {
  userUpdateProfileRequest,
  userUpdateProfileSuccess,
  userUpdateProfileFail,
} from "../../reducers/User/UserUpdateProfileSlice";
import { orderListMyReset } from "../../reducers/Order/OrderMyListSlice";
import { userListFail, userListRequest, userListReset, userListSuccess } from "../../reducers/User/UserListSlice";
import { userDeleteFail, userDeleteRequest, userDeleteSuccess } from "../../reducers/User/UserDeleteSlice";
import { userUpdateFail, userUpdateRequest, userUpdateSuccess } from "../../reducers/User/UserUpdateSlice";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch(userLogout());
  dispatch(userDetailsReset());
  dispatch(orderListMyReset());
  dispatch(userListReset());
  document.location.href = "/login";
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/",
      { name, email, password },
      config
    );
    dispatch(userRegisterSuccess(data));
    dispatch(userLoginSuccess(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userRegisterFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsRequest());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);
    dispatch(userDetailsSuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(userDetailsFail(message));
  }
};
export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateProfileRequest());
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/profile`, user, config);
    dispatch(userUpdateProfileSuccess(data));
    dispatch(userLoginSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch(userUpdateProfileFail(message));
  }
};


export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch(userListRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/users`, config)

    dispatch(userListSuccess(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch(userListFail(message))
  }
}

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDeleteRequest())

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/users/${id}`, config)

    dispatch(userDeleteSuccess())

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch(userDeleteFail(message))
  }
}

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch(userUpdateRequest())


    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(`/api/users/${user._id}`, user, config)

    dispatch(userUpdateSuccess())

    dispatch(userDetailsSuccess(data));

    dispatch(userDetailsReset());
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch(userUpdateFail(message))
  }
}

