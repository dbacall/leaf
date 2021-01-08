import { createSlice } from '@reduxjs/toolkit';
import { fetchSundayLeagueTeams } from '../thunks/sundayLeagueTeamsThunks';

const initialState = {
  currentTeam: {},
  teams: [],
  status: 'loading',
};

const sundayLeagueTeamsSlice = createSlice({
  name: 'sundayLeagueTeams',
  initialState,
  reducers: {
    updateCurrentTeam(state, action) {
      state.currentTeam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSundayLeagueTeams.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSundayLeagueTeams.fulfilled, (state, action) => {
        state.teams = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const { updateCurrentTeam } = sundayLeagueTeamsSlice.actions;

export default sundayLeagueTeamsSlice.reducer;
