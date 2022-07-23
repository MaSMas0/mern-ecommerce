import { createSlice } from "@reduxjs/toolkit";


const initialState = {

};

export const userDeleteSlice = createSlice({
  name: "userDelete",
  initialState,
  reducers: {
    userDeleteRequest: (state) => {
      state.loading = true;
    },
    userDeleteSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    userDeleteFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },    
});

// Action creators are generated for each case reducer function
export const { userDeleteRequest, userDeleteSuccess, userDeleteFail } =
userDeleteSlice.actions;

export default userDeleteSlice.reducer;





