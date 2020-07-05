import AuthReducer from 'reducers/Auth';
import { combineReducers } from 'redux';

export default combineReducers({ auth: AuthReducer });
