import { SET_CURRENT_USER } from "./constants";

const initialState = {
  currentUser: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default reducer;
