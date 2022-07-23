import { createSlice } from "@reduxjs/toolkit";

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null

const initialState = {
    user:{}
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    userDetailsRequest: (state) => {
      state.loading = true;
    },
    userDetailsSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userDetailsReset: () => ({ user:{}}),
  },    
});

// Action creators are generated for each case reducer function
export const { userDetailsRequest, userDetailsSuccess, userDetailsFail,userDetailsReset } =
userDetailsSlice.actions;

export default userDetailsSlice.reducer;
