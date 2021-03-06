/**
 * @format
 */

import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
enableScreens();

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'NativeBase: The contrast ratio of',
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
AppRegistry.registerComponent(appName, () => App);
