/**
 * Reducer actions related with signup
 * @class termsAndConditionsActions
 */
import * as types from './types';

export function requesttermsAndConditions() {
  return {
    type: types.TERMSANDCONDITIONS_REQUEST,
  };
}

export function termsAndConditionsFailed() {
  return {
    type: types.TERMSANDCONDITIONS_FAILED,
  };
}

export function ontermsAndConditionsResponse(response) {
  return {
    type: types.TERMSANDCONDITIONS_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.TERMSANDCONDITIONS_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.TERMSANDCONDITIONS_DISABLE_LOADER,
  };
}
