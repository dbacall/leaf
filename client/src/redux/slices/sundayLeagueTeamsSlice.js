import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  teams: [],
  status: 'loading',
};

export const fetchSundayLeagueTeams = createAsyncThunk(
  'sundayLeagueTeams/fetchSundayLeagueTeams',
  async (id) => {
    const response = await api.request(
      'get',
      null,
      `/sunday-leagues/team/${id}/league`
    );
    console.log('response', response);
    return response;
  }
);

const sundayLeagueTeamsSlice = createSlice({
  name: 'sundayLeagueTeams',
  initialState,
  reducers: {
    // updateSundayLeagues(state, action) {
    //   return { ...state, leagues: action.payload };
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

export const {} = sundayLeagueTeamsSlice.actions;

export default sundayLeagueTeamsSlice.reducer;
