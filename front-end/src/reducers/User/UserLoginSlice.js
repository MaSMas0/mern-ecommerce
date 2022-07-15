import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userInfo:userInfoFromStorage
};

export const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLoginRequest: (state) => {
      state.loading = true;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userLoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
        state.userInfo = null
    },
  },    
});

// Action creators are generated for each case reducer function
export const { userLoginRequest, userLoginSuccess, userLoginFail,userLogout } =
userLoginSlice.actions;

export default userLoginSlice.reducer;
