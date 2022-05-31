import * as types from '../actions/types';

// init state value
const initialState = {
  privacyPolicyResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class privacyPolicyReducer
 */
export default function privacyPolicyReducer(state = initialState, action) {
  switch (action.type) {
    case types.PRIVACYPOLICY_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.PRIVACYPOLICY_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.PRIVACYPOLICY_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.PRIVACYPOLICY_RESPONSE:
      return {
        ...state,
        privacyPolicyResponse: action.response,
        spinner: false,
      };
    case types.PRIVACYPOLICY_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
