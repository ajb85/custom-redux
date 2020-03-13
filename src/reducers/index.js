import { combineReducers } from '../redux/';

import counter from './counter.js';
import input from './input.js';

export default combineReducers({ counter, input });
