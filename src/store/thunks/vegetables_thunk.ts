import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const fetchVegetables = createAsyncThunk('FETCH_VEGETABLES', async () => {
  const result = await instanceAxios.get(
    'vegetable',
  );
  return result.data.vegetables;
});

export default fetchVegetables;
