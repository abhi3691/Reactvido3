/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Flexbox from './src/Flexbox';
import Webview from './src/Webview';
import Home from './src/Drawer/Home'
import {name as appName} from './app.json';
import Login from './src/Login';

AppRegistry.registerComponent(appName, () => Home);
