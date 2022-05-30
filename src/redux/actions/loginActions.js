/**
 * Reducer actions related with login
 * @class loginActions
 */
import * as types from './types';

/**
 * @description requestLogin - login request
 * @param  {string} email - Use email for login request
 * @param  {string} password - Use password for login request
 */
export function requestLogin(email, device_type, device_token) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    device_type,
    device_token,
  };
}

/**
 * @description  loginFailed - login failed action
 */
export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function requestVerifyOTP(email, otp_number) {
  return {
    type: types.VERIFY_OTP_REQUEST,
    email,
    otp_number,
  };
}

/**
 * @description  loginFailed - login failed action
 */
export function verifyOTPRequestFailed() {
  return {
    type: types.VERIFY_OTP_FAILED,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function onVerifyOTPResponse(response) {
  return {
    type: types.VERIFY_OTP_RESPONSE,
    response,
  };
}

export function requestUpdateProfile(userName, filePath) {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
    userName,
    filePath,
  };
}

/**
 * @description  loginFailed - login failed action
 */
export function updateProfileFailed() {
  return {
    type: types.UPDATE_PROFILE_FAILED,
  };
}

/**
 * @description  onLoginResponse - login failed action
 * @param  {object} response - Login Response
 */
export function onUpdateProfileResponse(response) {
  return {
    type: types.UPDATE_PROFILE_RESPONSE,
    response,
  };
}

/**
 * @description enableLoader - enable Loader
 */
export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

/**
 * @description  disableLoader - disable Loader
 */
export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

/**
 * @description logOut - logOut user
 */
export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
