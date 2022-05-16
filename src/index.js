import React from 'react';
import store from './redux/store/index.js';
import {Provider} from 'react-redux';
// import { colors } from './constants/index';
import App from './navigation';

/**
 * @class Index
 * @description  FourAll init function
 */
export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
