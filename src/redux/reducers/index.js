// import login reducer
import loginReducer from './loginReducer';
// import signup reducer
import signUpReducer from './signUpReducer';
// import dashboard reducer
import dashboardReducer from './dashboardReducer';
// import profile reducer
import profileReducer from './profileReducer';
// import forgotPasswordReducer reducer
import forgotPasswordReducer from './forgotPasswordReducer';
// import forgotPasswordReducer reducer
import helpReducer from './helpReducer';
// import forgotPasswordReducer reducer
import feedbackReducer from './feedbackReducer';
// import forgotPasswordReducer reducer
import termsAndConditionsReducer from './termsAndConditionsReducer';
import privacyPolicyReducer from './privacyPolicyReducer';

const rootReducer = {
  loginReducer,
  signUpReducer,
  dashboardReducer,
  profileReducer,
  forgotPasswordReducer,
  helpReducer,
  feedbackReducer,
  termsAndConditionsReducer,
  privacyPolicyReducer,
};

export default rootReducer;
