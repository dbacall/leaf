import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import sundayLeaguesReducer from './slices/sundayLeaguesSlice';
import sundayLeagueTeamsReducer from './slices/sundayLeagueTeamsSlice';
import sundayLeaguePlayersReducer from './slices/sundayLeaguePlayersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    errors: errorReducer,
    sundayLeagues: sundayLeaguesReducer,
    sundayLeagueTeams: sundayLeagueTeamsReducer,
    sundayLeaguePlayers: sundayLeaguePlayersReducer,
  },
});

export default store;
