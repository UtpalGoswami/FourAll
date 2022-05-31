// export action creators
import * as loginActions from './loginActions';
import * as signUpActions from './signUpActions';
import * as dashboardActions from './dashboardActions';
import * as profileActions from './profileActions';
import * as helpActions from './helpActions';
import * as feedbackActions from './feedbackActions';
import * as termsAndConditionsActions from './termsAndConditionsActions';
import * as privacyPolicyActions from './privacyPolicyActions';

const ActionCreators = {
  ...loginActions,
  ...signUpActions,
  ...dashboardActions,
  ...profileActions,
  ...helpActions,
  ...feedbackActions,
  ...termsAndConditionsActions,
  ...privacyPolicyActions,
};

export default ActionCreators;
