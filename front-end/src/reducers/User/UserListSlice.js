
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:[]
};

export const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    userListRequest: (state) => {
      state.loading = true;
    },
    userListSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    userListFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userListReset: () => ({users:[]}),
  },    
});

// Action creators are generated for each case reducer function
export const { userListRequest, userListSuccess, userListFail,userListReset } =
userListSlice.actions;

export default userListSlice.reducer;
