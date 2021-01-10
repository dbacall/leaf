import { combineReducers } from 'redux';
import authReducer from './reducers/authReducers';
import errorReducer from './reducers/errorReducers';
import sundayLeagueReducer from './slices/sundayLeagueSlice';
import sundayLeagueTeamReducer from './slices/sundayLeagueTeamSlice';
import sundayLeaguePlayerReducer from './slices/sundayLeaguePlayerSlice';
import sundayLeagueSeasonReducer from './slices/sundayLeagueSeasonSlice';
import sundayLeagueGameweekReducer from './slices/sundayLeagueGameweekSlice';
import sundayLeagueFixtureReducer from './slices/sundayLeagueFixtureSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  sundayLeague: sundayLeagueReducer,
  sundayLeagueTeam: sundayLeagueTeamReducer,
  sundayLeaguePlayer: sundayLeaguePlayerReducer,
  sundayLeagueSeason: sundayLeagueSeasonReducer,
  sundayLeagueGameweek: sundayLeagueGameweekReducer,
  sundayLeagueFixture: sundayLeagueFixtureReducer,
});

export default rootReducer;