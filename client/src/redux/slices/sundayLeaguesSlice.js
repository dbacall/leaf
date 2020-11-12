import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  leagues: [],
  status: 'loading',
};

export const fetchSundayLeagues = createAsyncThunk(
  'sundayLeagues/fetchSundayLeagues',
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/sunday-leagues/${id}`
    );
    return response.data;
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
        console.log(action.payload);
        state.leagues = action.payload;
        state.status = 'idle';
      });
  },
});

export const {} = sundayLeaguesSlice.actions;

export default sundayLeaguesSlice.reducer;
