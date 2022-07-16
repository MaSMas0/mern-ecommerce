import { createSlice } from "@reduxjs/toolkit";

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

const initialState = {};

export const userUpdateProfileSlice = createSlice({
  name: "userUpdateProfile",
  initialState,
  reducers: {
    userUpdateProfileRequest: (state) => {
      state.loading = true;
    },
    userUpdateProfileSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload;
    },
    userUpdateProfileFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },    
});

// Action creators are generated for each case reducer function
export const { userUpdateProfileRequest, userUpdateProfileSuccess, userUpdateProfileFail } =
userUpdateProfileSlice.actions;

export default userUpdateProfileSlice.reducer;
