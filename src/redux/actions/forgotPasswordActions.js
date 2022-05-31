/**
 * Reducer actions related with signup
 * @class ForgotPasswordActions
 */
import * as types from './types';

export function requestForgotPassword(email) {
  return {
    type: types.FORGOT_PASSWORD_REQUEST,
    email,
  };
}

export function forgotPasswordFailed() {
  return {
    type: types.FORGOT_PASSWORD_FAILED,
  };
}

export function onForgotPasswordResponse(response) {
  return {
    type: types.FORGOT_PASSWORD_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.FORGOT_PASSWORD_LOADING_ENDED,
  };
}

export function disableLoader() {
  return {
    type: types.FORGOT_PASSWORD_DISABLE_LOADER,
  };
}
