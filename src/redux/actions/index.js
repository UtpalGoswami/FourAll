// export action creators
import * as loginActions from './loginActions';
import * as signUpActions from './signUpActions';
import * as dashboardActions from './dashboardActions';
import * as profileActions from './profileActions';
import * as helpActions from './helpActions';

const ActionCreators = {
  ...loginActions,
  ...signUpActions,
  ...dashboardActions,
  ...profileActions,
  ...helpActions,
};

export default ActionCreators;
