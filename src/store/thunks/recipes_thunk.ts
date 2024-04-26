import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const fetchRecipes = createAsyncThunk('FETCH_RECIPES', async () => {
  const result = await instanceAxios.get(
    'recipe',
  );
  return result.data.Recettes;
});

export default fetchRecipes;
