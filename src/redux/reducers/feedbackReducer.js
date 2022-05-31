import * as types from '../actions/types';

// init state value
const initialState = {
  feedbackResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class feedbackReducer
 */
export default function feedbackReducer(state = initialState, action) {
  switch (action.type) {
    case types.FEEDBACK_REQUEST:
      return {
        ...state,
        name: action.name,
        email: action.email,
        subject: action.subject,
        message: action.message,
        spinner: true,
      };
    case types.FEEDBACK_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.FEEDBACK_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.FEEDBACK_RESPONSE:
      return {
        ...state,
        feedbackResponse: action.response,
        spinner: false,
      };
    case types.FEEDBACK_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
