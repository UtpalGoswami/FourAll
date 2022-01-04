// export action creators
import * as loginActions from './loginActions';
import * as signUpActions from './signUpActions';
import * as dashboardActions from './dashboardActions';
import * as profileActions from './profileActions';

const ActionCreators = {
  ...loginActions,
  ...signUpActions,
  ...dashboardActions,
  ...profileActions,
};

export default ActionCreators;