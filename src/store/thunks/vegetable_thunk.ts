import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const fetchVegetable = createAsyncThunk('FETCH_VEGETABLE', async (vegetableId) => {
  const result = await instanceAxios.get(
    `vegetable/${vegetableId}`,
  );
  return result.data.vegetable;
});

export default fetchVegetable;
