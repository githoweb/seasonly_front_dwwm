import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const fetchFavorites = createAsyncThunk(
  'FETCH_FAVORITE', async () => {

  const response = await instanceAxios.get(
    'favorite'
  );
  return response.data.favorites;
});

export default fetchFavorites;
