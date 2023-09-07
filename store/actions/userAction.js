import { SET_USER, SAMPLE_ERROR } from "../types";

export const setUserAuthInfo = (data) => async (dispatch) => {
  console.log("setUserAuthInfo",data)
  try {
    dispatch({
      type: SET_USER,
      payload:data,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
