import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import instanceAxios from '../../utils/axios';

const deleteRecipeFromFavorites = createAsyncThunk(
  'DELETE_RECIPE_FROM_FAVORITE', async (recipe) => {
  
  const token = localStorage.getItem('token');
  const response = await instanceAxios.delete(
    `favorite/delete/${recipe.id}`,
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    },
  );

  return recipe;
});

export default deleteRecipeFromFavorites;
