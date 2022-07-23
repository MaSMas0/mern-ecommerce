import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user:{}
};

export const userUpdateSlice = createSlice({
  name: "userUpdate",
  initialState,
  reducers: {
    userUpdateRequest: (state) => {
      state.loading = true;
    },
    userUpdateSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    userUpdateFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userUpdateReset: () => ({user:{}}),
  },    
});

// Action creators are generated for each case reducer function
export const { userUpdateRequest, userUpdateSuccess, userUpdateFail,userUpdateReset } =
userUpdateSlice.actions;

export default userUpdateSlice.reducer;

