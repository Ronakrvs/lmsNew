import { RESET_STATE } from "../types";


const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    // Reset all state to its initial values
    return {
      // Replace 'initialState' with your actual initial state
      ...initialState,
    };
  }

  // Handle other actions here

  return state;
};

export default rootReducer;