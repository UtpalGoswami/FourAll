/**
 * Reducer actions related with signup
 * @class privacyPolicyActions
 */
import * as types from './types';

export function requestPrivacyPolicy() {
  return {
    type: types.PRIVACYPOLICY_REQUEST,
  };
}

export function privacyPolicyFailed() {
  return {
    type: types.PRIVACYPOLICY_FAILED,
  };
}

export function onPrivacyPolicyResponse(response) {
  return {
    type: types.PRIVACYPOLICY_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.PRIVACYPOLICY_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.PRIVACYPOLICY_DISABLE_LOADER,
  };
}
