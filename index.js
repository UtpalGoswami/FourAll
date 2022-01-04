/**
 * @format
 */

import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
enableScreens();
AppRegistry.registerComponent(appName, () => App);