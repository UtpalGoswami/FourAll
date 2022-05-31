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

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

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

export function verifyOTPRequestFailed() {
  return {
    type: types.VERIFY_OTP_FAILED,
  };
}

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

export function updateProfileFailed() {
  return {
    type: types.UPDATE_PROFILE_FAILED,
  };
}

export function onUpdateProfileResponse(response) {
  return {
    type: types.UPDATE_PROFILE_RESPONSE,
    response,
  };
}

export function requestResendOTP(email, otp_number) {
  return {
    type: types.RESEND_OTP_REQUEST,
    email,
    otp_number,
  };
}

export function resendOTPRequestFailed() {
  return {
    type: types.RESEND_OTP_FAILED,
  };
}

export function onResendOTPResponse(response) {
  return {
    type: types.RESEND_OTP_RESPONSE,
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
    type: types.LOGOUT,
  };
}

export function logOutResponse(response) {
  return {
    type: types.LOGOUT_RESPONSE,
    response,
  };
}
