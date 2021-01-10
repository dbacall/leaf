import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchFixture = createAsyncThunk(
  'sundayLeaguePlayers/fetchSundayLeaguePlayers',
  async (id) => {
    const response = await api.request(
      'get',
      null,
      `/sunday-leagues/fixture/${id}/current`
    );
    return response;
  }
);
