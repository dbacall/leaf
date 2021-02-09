import { combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import therapistsReducer from './slices/TherapistsSlice';
import meetingsReducer from './slices/MeetingsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  therapists: therapistsReducer,
  meetings: meetingsReducer,
});

export default rootReducer;
