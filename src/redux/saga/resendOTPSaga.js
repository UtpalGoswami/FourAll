import {call, put} from 'redux-saga/effects';
import {resendOTP} from '../../services/Api';
import * as loginActions from '../actions/loginActions';

/**
 * Create resendOTPAsync file for manage saga effects
 * @class resendOTPAsync
 */
export default function* resendOTPAsync(action) {
  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(resendOTP, action.email);
    // console.log('function*resendOTPAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(loginActions.onResendOTPResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
    } else {
      // Login failed
      yield put(loginActions.resendOTPRequestFailed());
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(loginActions.resendOTPRequestFailed());
    // Disable loader
    yield put(loginActions.disableLoader());
  }
}
