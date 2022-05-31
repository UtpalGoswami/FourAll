import {call, put} from 'redux-saga/effects';
import {help} from '../../services/Api';
import * as helpActions from '../actions/helpActions';

/**
 * Create helpAsync file for manage saga effects
 * @class helpAsync
 */
export default function* helpAsync(action) {
  try {
    // Enable login loader
    yield put(helpActions.enableLoader());

    // Calling function for API
    const response = yield call(help);
    // console.log('function*helpAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(helpActions.onHelpResponse(response));
      // Disable loader
      yield put(helpActions.disableLoader());
    } else {
      // Login failed
      yield put(helpActions.helpFailed());
      // Disable loader
      yield put(helpActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(helpActions.helpFailed());
    // Disable loader
    yield put(helpActions.disableLoader());
  }
}
