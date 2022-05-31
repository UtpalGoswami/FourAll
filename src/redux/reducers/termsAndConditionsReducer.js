import * as types from '../actions/types';

// init state value
const initialState = {
  termsAndConditionsResponse: {},
  spinner: false,
};

/**
 * Reducer related with signup
 * @class termsAndConditionsReducer
 */
export default function termsAndConditionsReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case types.TERMSANDCONDITIONS_REQUEST:
      return {
        ...state,
        spinner: true,
      };
    case types.TERMSANDCONDITIONS_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.TERMSANDCONDITIONS_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.TERMSANDCONDITIONS_RESPONSE:
      return {
        ...state,
        termsAndConditionsResponse: action.response,
        spinner: false,
      };
    case types.TERMSANDCONDITIONS_FAILED:
      return {
        ...state,
        spinner: false,
      };
    default:
      return state;
  }
}
