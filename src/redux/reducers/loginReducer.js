import * as types from '../actions/types';

// init state value
const initialState = {
  isLoggedIn: false,
  id: 0,
  email: '',
  password: '',
  spinner: false,
  loginResponse: {},
  verifyOTPResponse: {},
  updateProfileResponse: {},
};

/**
 * Reducer
 * @class loginReducer
 */
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        email: action.email,
        device_type: action.device_type,
        device_token: action.device_token,
        spinner: true,
      };
    case types.LOGIN_ENABLE_LOADER:
      return {
        ...state,
        spinner: true,
      };
    case types.LOGIN_DISABLE_LOADER:
      return {
        ...state,
        spinner: false,
      };
    case types.LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.VERIFY_OTP_REQUEST:
      return {
        ...state,
        email: action.email,
        otp_number: action.otp_number,
        spinner: true,
      };
    case types.VERIFY_OTP_RESPONSE:
      return {
        ...state,
        verifyOTPResponse: action.response,
        spinner: false,
      };
    case types.VERIFY_OTP_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        userName: action.userName,
        filePath: action.filePath,
        spinner: true,
      };
    case types.UPDATE_PROFILE_RESPONSE:
      return {
        ...state,
        updateProfileResponse: action.response,
        isLoggedIn: true,
        spinner: false,
      };
    case types.UPDATE_PROFILE_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    case types.LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        spinner: false,
      };
    default:
      return state;
  }
}
