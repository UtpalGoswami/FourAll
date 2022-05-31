/**
 * Reducer actions related with signup
 * @class feedbackActions
 */
import * as types from './types';

export function requestFeedback(name, email, subject, message) {
  return {
    type: types.FEEDBACK_REQUEST,
    name,
    email,
    subject,
    message,
  };
}

export function feedbackFailed() {
  return {
    type: types.FEEDBACK_FAILED,
  };
}

export function onFeedbackResponse(response) {
  return {
    type: types.FEEDBACK_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.FEEDBACK_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.FEEDBACK_DISABLE_LOADER,
  };
}
