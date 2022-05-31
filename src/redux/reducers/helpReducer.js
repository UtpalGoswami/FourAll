import * as types from '../actions/types';

// init state value
const initialState = {
  helpResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class helpReducer
 */
export default function helpReducer(state = initialState, action) {
  switch (action.type) {
    case types.HELP_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.HELP_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.HELP_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.HELP_RESPONSE:
      return {
        ...state,
        helpResponse: action.response,
        spinner: false,
      };
    case types.HELP_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
