import { publicRequest, userRequest } from "../requestMethods";
import { loginSuccess, userFailure, userStart } from "./userSlice";

//User API Calls
export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if (res) {
      userRequest.defaults.headers.token = "Bearer " + res.data?.token;
      dispatch(loginSuccess(res.data));
    }
  } catch (err) {
    dispatch(userFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    if (res) {
      dispatch(loginSuccess(res.data));
    }
  } catch (err) {
    dispatch(userFailure());
  }
};
