import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userInfo:userInfoFromStorage
};

export const userRegisterSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    userRegisterRequest: (state) => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: (state) => {
        state.userInfo = null
    },
  },    
});

// Action creators are generated for each case reducer function
export const { userRegisterRequest, userRegisterSuccess, userRegisterFail,userLogout } =
userRegisterSlice.actions;

export default userRegisterSlice.reducer;
