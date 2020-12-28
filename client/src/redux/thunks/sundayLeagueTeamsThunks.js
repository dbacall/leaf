import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchSundayLeagueTeams = createAsyncThunk(
  'sundayLeagueTeams/fetchSundayLeagueTeams',
  async (id) => {
    const response = await api.request(
      'get',
      null,
      `/sunday-leagues/team/${id}/league`
    );
    return response;
  }
);
