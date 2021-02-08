import { combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import therapistsReducer from './slices/TherapistsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  therapists: therapistsReducer,
});

export default rootReducer;
