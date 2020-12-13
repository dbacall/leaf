import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import sundayLeaguesReducer from './slices/sundayLeaguesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer,
    sundayLeagues: sundayLeaguesReducer,
  },
});

export default store;
