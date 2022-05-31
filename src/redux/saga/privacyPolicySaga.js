import {call, put} from 'redux-saga/effects';
import {privacyPolicy} from '../../services/Api';
import * as privacyPolicyActions from '../actions/privacyPolicyActions';

/**
 * Create privacyPolicyAsync file for manage saga effects
 * @class privacyPolicyAsync
 */
export default function* privacyPolicyAsync(action) {
  try {
    // Enable login loader
    yield put(privacyPolicyActions.enableLoader());

    // Calling function for API
    const response = yield call(privacyPolicy);
    // console.log('function*privacyPolicyAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(privacyPolicyActions.onPrivacyPolicyResponse(response));
      // Disable loader
      yield put(privacyPolicyActions.disableLoader());
    } else {
      // Login failed
      yield put(privacyPolicyActions.privacyPolicyFailed());
      // Disable loader
      yield put(privacyPolicyActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(privacyPolicyActions.privacyPolicyFailed());
    // Disable loader
    yield put(privacyPolicyActions.disableLoader());
  }
}
