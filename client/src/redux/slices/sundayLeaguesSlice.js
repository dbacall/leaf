import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

const initialState = {
  leagues: [],
  status: 'loading',
};

export const fetchSundayLeagues = createAsyncThunk(
  'sundayLeagues/fetchSundayLeagues',
  (id) => {
    const response = api.request('get', null, `/sunday-leagues/${id}`);
    console.log(process.env.NODE_ENV);
    return response;
  }
);

const sundayLeaguesSlice = createSlice({
  name: 'sundayLeagues',
  initialState,
  reducers: {
    // updateSundayLeagues(state, action) {
    //   return { ...state, leagues: action.payload };
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

export const {} = sundayLeaguesSlice.actions;

export default sundayLeaguesSlice.reducer;
