import {takeEvery, all, takeLatest, take} from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import signUpSaga from './signUpSaga';
import dashboardSaga from './dashboardSaga';
import forgotPasswordSaga from './forgotPasswordSaga';
import verifyOTPSaga from './verifyOTPSaga';
import resendOTPSaga from './resendOTPSaga';
import updateProfileSaga from './updateProfileSaga';
import logoutSaga from './logoutSaga';
import helpSaga from './helpSaga';

/**
 * Create root saga file for manage api request and response
 * @class rootSaga
 */
export default function* rootSaga() {
  // Take login saga request
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  // Take signup saga request
  yield all([takeEvery(types.SIGNUP_REQUEST, signUpSaga)]);
  // Take signup saga request
  yield all([takeEvery(types.FORGOT_PASSWORD_REQUEST, forgotPasswordSaga)]);
  // Take dashboard saga request
  yield all([takeEvery(types.GET_DEVICE_REQUEST, dashboardSaga)]);
  // Take verify otp saga request
  yield all([takeEvery(types.VERIFY_OTP_REQUEST, verifyOTPSaga)]);
  // Take update profile saga request
  yield all([takeEvery(types.UPDATE_PROFILE_REQUEST, updateProfileSaga)]);
  // Take update profile saga request
  yield all([takeEvery(types.RESEND_OTP_REQUEST, resendOTPSaga)]);
  // Take update profile saga request
  yield all([takeEvery(types.LOGOUT, logoutSaga)]);
  // Take update profile saga request
  yield all([takeEvery(types.HELP_REQUEST, helpSaga)]);
}
