import { combineReducers } from 'redux';
import companyReducer from './companyReducer';
import courseReducer from './courseReducer';
import userReducer from './userReducer';
import generalReducer from './generalReducer';

export default combineReducers({
	companyReducer,
	courseReducer,
	userReducer,
	generalReducer,
});
