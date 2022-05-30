import {call, put} from 'redux-saga/effects';
import {updateProfile} from '../../services/Api';
import * as loginActions from '../actions/loginActions';

/**
 * Create updateProfileAsync file for manage saga effects
 * @class updateProfileAsync
 */
export default function* updateProfileAsync(action) {
  try {
    // Enable login loader
    yield put(loginActions.enableLoader());

    // Calling function for API
    const response = yield call(
      updateProfile,
      action.userName,
      action.filePath,
    );
    // console.log('function*updateProfileAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(loginActions.onUpdateProfileResponse(response));
      // Disable loader
      yield put(loginActions.disableLoader());
    } else {
      // Login failed
      yield put(loginActions.updateProfileFailed());
      // Disable loader
      yield put(loginActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(loginActions.updateProfileFailed());
    // Disable loader
    yield put(loginActions.disableLoader());
  }
}
