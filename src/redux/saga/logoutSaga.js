import {call, put} from 'redux-saga/effects';
import {Logout} from '../../services/Api';
import * as loginActions from '../actions/loginActions';

/**
 * Create logoutAsync file for manage saga effects
 * @class logoutAsync
 */
export default function* logoutAsync(action) {
  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(Logout);
    // console.log('function*logoutAsync :: response : ', response);

    if (response) {
      // Store login response
      yield put(loginActions.logOutResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
    } else {
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Disable loader
    yield put(loginActions.disableLoader());
  }
}
