import {
    userLoginRequest,
    userLoginSuccess,
    userLoginFail,
    userLogout
  } from "../../reducers/User/UserLoginSlice";
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail
  } from "../../reducers/User/UserRegisterSlice";
  import axios from "axios";
  
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch(userLoginRequest());
      const config = {
        headers: {
            'Content-Type': 'application/json',
        },
      }
      
      const { data } = await axios.post("/api/users/login",{email,password},config);
      dispatch(userLoginSuccess(data));
      localStorage.setItem('userInfo', JSON.stringify(data))
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
  
  export const logout =() =>  (dispatch) =>{
    localStorage.removeItem('userInfo')
    dispatch(userLogout())
  }

  export const register = (name, email, password) => async (dispatch) => {
    try {
      dispatch(userRegisterRequest());
      const config = {
        headers: {
            'Content-Type': 'application/json',
        },
      }
      
      const { data } = await axios.post("/api/users/",{name,email,password},config);
      dispatch(userRegisterSuccess(data));
      dispatch(userLoginSuccess(data));
      localStorage.setItem('userInfo', JSON.stringify(data))
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