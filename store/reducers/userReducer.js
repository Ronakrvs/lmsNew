import { GET_SAMPLE, SAMPLE_ERROR, SET_USER } from "../types";

const initialState = {
  authUser: {},
  loading: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authUser: action.payload,
        loading: false,
      };

    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
