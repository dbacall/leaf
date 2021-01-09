import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  currentLeague: {},
  leagues: [],
  status: 'loading',
};

export const fetchSundayLeagues = createAsyncThunk(
  'sundayLeagues/fetchSundayLeagues',
  (id) => {
    const response = api.request('get', null, `/sunday-leagues/${id}/owner`);
    return response;
  }
);

const sundayLeagueSlice = createSlice({
  name: 'sundayLeague',
  initialState,
  reducers: {
    updateCurrentLeague(state, action) {
      state.currentLeague = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSundayLeagues.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchSundayLeagues.fulfilled, (state, action) => {
        state.leagues = action.payload.data;
        state.status = 'idle';
      });
  },
});

export const { updateCurrentLeague } = sundayLeagueSlice.actions;

export default sundayLeagueSlice.reducer;
