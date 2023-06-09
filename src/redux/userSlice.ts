import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  currentUser: any;
  isFetching: boolean;
  error: boolean;
  success: boolean;
}

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  error: false,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
    },
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.isFetching = false;
      state.success = true;
      state.currentUser = action.payload;
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { userStart, loginSuccess, userFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
