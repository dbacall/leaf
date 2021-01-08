import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchCurrentGameweek = createAsyncThunk(
  'sundayLeagueGameweek/fetchCurrentGameweek',
  async () => {
    const response = await api.request(
      'get',
      null,
      `/sunday-leagues/gameweek/`
    );
    return response;
  }
);
