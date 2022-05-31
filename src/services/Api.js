import {Alert} from 'react-native';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// common service URL
const SERVICEURL = 'http://103.1.100.53/4all/public/api/';

const getAccessToken = async () => {
  const UserDetails = await AsyncStorage.getItem('UserTokenDetail');
  const finalUserDetails = JSON.parse(UserDetails);
  return finalUserDetails.token;
};

/**
 * @function signUp signUp
 * @param  email {string} - email for new create firebase user
 * @param  password {string} - password for new create firebase user
 */
export const signUp = (email, password) => {
  // const URL = SERVICEURL + '/merchant/' + 'signup';
  // console.log('signUp URL : ' + URL);
  // return new Promise(async (resolve, reject) => {
  //     const data = JSON.stringify({
  //         email: email,
  //         password: password
  //     });
  //     const options = {
  //         headers: {
  //             'Content-Type': 'application/json',
  //         }
  //     };
  //     console.log('Fina log : ' + URL, data, options);
  //     axios.post(URL, data, options)
  //         .then(async (response) => {
  //             console.log("signup Resp : ", JSON.stringify(response.data));
  //             resolve(response);
  //         })
  //         .catch((error) => {
  //             // handle error
  //             console.log('signup error : ', error);
  //             resolve(error);
  //         })
  // });
};

/**
 * @function LogIn LogIn
 * @param  email {string} - email for login user
 * @param  device_type {string} - device_type for login user
 * @param  device_token {string} - device_type for login user
 */
export const LogIn = async (email, device_type, device_token) => {
  const URL = SERVICEURL + 'login';
  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      device_type: device_type,
      device_token: device_token,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // console.log('Fina log : ' + URL, data, options);
    axios
      .post(URL, data, options)
      .then(async response => {
        // console.log("LogIn Resp : ", JSON.stringify(response.data));
        resolve(response);
      })
      .catch(error => {
        // handle error
        console.log('LogIn error : ', error);
        resolve(error);
      });
  });
};

/**
 * @function VerifyOTP VerifyOTP
 * @param  email {string} - email
 * @param  otp_number {string} - otp_number
 */
export const VerifyOTP = async (email, otp_number) => {
  const URL = SERVICEURL + 'verifyOtp';
  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
      otp_number: otp_number,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // console.log('Fina log : ' + URL, data, options);
    axios
      .post(URL, data, options)
      .then(async response => {
        // console.log("LogIn Resp : ", JSON.stringify(response.data));
        resolve(response);
      })
      .catch(error => {
        // handle error
        console.log('LogIn error : ', error);
        resolve(error);
      });
  });
};

/**
 * @function updateProfile updateProfile
 * @param  username {string} - username
 * @param  filePath {string} - filePath
 */
export const updateProfile = async (username, filePath) => {
  const URL = SERVICEURL + 'updateProfile';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('avatar', filePath);

    const options = {
      headers: {
        'Content-Type': 'multipart/form-data; ',
        Authorization: 'Bearer ' + access_token,
      },
    };
    // console.log('Fina log : ' + URL, data, options);
    axios
      .post(URL, formData, options)
      .then(async response => {
        // console.log('updateProfile Resp : ', JSON.stringify(response.data));
        resolve(response);
      })
      .catch(error => {
        // handle error
        // console.log('LogIn error : ', error);
        resolve(error);
      });
  });
};

/**
 * @function resendOTP resendOTP
 * @param  email {string} - email for login user
 */
export const resendOTP = async email => {
  const URL = SERVICEURL + 'sendOtp';
  return new Promise(async (resolve, reject) => {
    const data = JSON.stringify({
      email: email,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post(URL, data, options)
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

/**
 * @function ForgotPassword forgotPassword
 * @param  email {string} - email for forgot user password
 */
export const ForgotPassword = email => {
  // const URL = SERVICEURL + '/merchant/' + 'forgot-password';
  // console.log('forgotPassword URL : ' + URL);
  // return new Promise(async (resolve, reject) => {
  //     const data = JSON.stringify({
  //         email: email
  //     });
  //     const options = {
  //         headers: {
  //             'Content-Type': 'application/json',
  //         }
  //     };
  //     console.log('Fina log : ' + URL, data, options);
  //     axios.post(URL, data, options)
  //         .then(async (response) => {
  //             console.log("forgotPassword Resp : ", JSON.stringify(response.data));
  //             resolve(response);
  //         })
  //         .catch((error) => {
  //             // handle error
  //             console.log('forgotPassword error : ', error);
  //             resolve(error);
  //         })
  // });
};

export const Logout = async () => {
  const URL = SERVICEURL + 'logout';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, {}, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

export const help = async () => {
  const URL = SERVICEURL + 'help';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, {}, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

export const feedback = async (name, email, subject, message) => {
  const URL = SERVICEURL + 'feedback';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const data = JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .post(URL, data, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

export const termsConditions = async () => {
  const URL = SERVICEURL + 'terms_conditions';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, {}, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

export const privacyPolicy = async () => {
  const URL = SERVICEURL + 'privacy_policy';
  return new Promise(async (resolve, reject) => {
    const access_token = await getAccessToken();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + access_token,
      },
    };
    axios
      .get(URL, {}, options)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error);
      });
  });
};

/**
 * @function clearAsyncStorageData clear AsyncStorage Data
 * @description clear all local async storage data
 */
const clearAsyncStorageData = async () => {
  try {
    await AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => console.log('success'));
  } catch (error) {
    console.error('Error clearing app data.');
  }
};
