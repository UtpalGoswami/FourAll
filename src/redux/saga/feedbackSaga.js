import {call, put} from 'redux-saga/effects';
import {feedback} from '../../services/Api';
import * as feedbackActions from '../actions/feedbackActions';

/**
 * Create feedbackAsync file for manage saga effects
 * @class feedbackAsync
 */
export default function* feedbackAsync(action) {
  try {
    // Enable login loader
    yield put(feedbackActions.enableLoader());

    // Calling function for API
    const response = yield call(
      feedback,
      action.name,
      action.email,
      action.subject,
      action.message,
    );
    // console.log('function*feedbackAsync :: response : ', response)

    if (response) {
      // Store login response
      yield put(feedbackActions.onFeedbackResponse(response));
      // Disable loader
      yield put(feedbackActions.disableLoader());
    } else {
      // Login failed
      yield put(feedbackActions.feedbackFailed());
      // Disable loader
      yield put(feedbackActions.disableLoader());
    }
  } catch (error) {
    // Login failed
    yield put(feedbackActions.feedbackFailed());
    // Disable loader
    yield put(feedbackActions.disableLoader());
  }
}
