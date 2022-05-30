import {call, put} from 'redux-saga/effects';
import {VerifyOTP} from '../../services/Api';
import * as loginActions from '../actions/loginActions';

/**
 * Create verifyOTPAsync file for manage saga effects
 * @class verifyOTPAsync
 */
export default function* verifyOTPAsync(action) {
  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(VerifyOTP, action.email, action.otp_number);
    // console.log('function*verifyOTPAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(loginActions.onVerifyOTPResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
    } else {
      // Login failed
      yield put(loginActions.verifyOTPRequestFailed());
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(loginActions.verifyOTPRequestFailed());
    // Disable loader
    yield put(loginActions.disableLoader());
  }
}
