import {call, put} from 'redux-saga/effects';
import {termsConditions} from '../../services/Api';
import * as termsAndConditionsActions from '../actions/termsAndConditionsActions';

/**
 * Create termsAndConditionsAsync file for manage saga effects
 * @class termsAndConditionsAsync
 */
export default function* termsAndConditionsAsync(action) {
  try {
    // Enable login loader
    yield put(termsAndConditionsActions.enableLoader());

    // Calling function for API
    const response = yield call(termsConditions);
    // console.log('function*termsAndConditionsAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(
        termsAndConditionsActions.ontermsAndConditionsResponse(response),
      );
      // Disable loader
      yield put(termsAndConditionsActions.disableLoader());
    } else {
      // Login failed
      yield put(termsAndConditionsActions.termsAndConditionsFailed());
      // Disable loader
      yield put(termsAndConditionsActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(termsAndConditionsActions.termsAndConditionsFailed());
    // Disable loader
    yield put(termsAndConditionsActions.disableLoader());
  }
}
