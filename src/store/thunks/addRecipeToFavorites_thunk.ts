import React from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';
import IRecipe from '../../@types/recipe';

const addRecipeToFavorites = createAsyncThunk(
  'ADD_RECIPE_TO_FAVORITE', async (recipe: IRecipe) => {

  const token = localStorage.getItem('token');
  const response = await instanceAxios.post(
    `favorite/add/${recipe.id}`,
    {},
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    },
  );

  return recipe;
});

export default addRecipeToFavorites;
