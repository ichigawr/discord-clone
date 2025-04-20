import authService from "@/services/authService";
import { SET_CURRENT_USER } from "./constants";

export const getCurrentUser = () => {
  return async (dispatch) => {
    const res = await authService.me();

    if (res.status === "success") {
      dispatch(setCurrentUser(res.data));
    } else {
      console.error(res?.message);
      dispatch(setCurrentUser(null));
    }
  };
};

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});
