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

const rootReducer = {
  loginReducer,
  signUpReducer,
  dashboardReducer,
  profileReducer,
  forgotPasswordReducer
};

// export const LogOut = () => ({type : 'RESET_STORE'});

// const rootReducer = (state, action) => {
//   if(action.type === 'RESET_STORE'){
//     state={};
//   }
//   return appReducer(state, action)
// }

export default rootReducer;
