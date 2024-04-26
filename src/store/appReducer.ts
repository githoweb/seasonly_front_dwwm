import { createReducer } from '@reduxjs/toolkit';
// TypeScript Interfaces
import IVegetable from '../@types/vegetable';
import IRecipe from '../@types/recipe';
import IUser from '../@types/user';
// Actions and Thunks
import fetchVegetables from './thunks/vegetables_thunk';
import fetchVegetable from './thunks/vegetable_thunk';
import fetchRecipes from './thunks/recipes_thunk';
import fetchRecipe from './thunks/recipe_thunk';
import fetchFavorites from './thunks/fetchFavorites_thunk';
import loginCheck from './thunks/loginCheck_thunk';
import addRecipeToFavorites from './thunks/addRecipeToFavorites_thunk';
import deleteRecipeFromFavorites from './thunks/deleteRecipeFromFavorites_thunk';
import getMemberInfos from './thunks/getMemberInfos_thunk';
import { changeSelectedMonth, logMeOut } from './actions';

// by default we display the current month
const d = new Date();
const month = d.getMonth();

interface IStateGlobal {
  vegetables: IVegetable[],
  monthVegetables: IVegetable[],
  recipes: IRecipe[],
  favorites: IRecipe[],
  isLoading: boolean,
  user: IUser,
  token: string,
  chosenNbMonth: number,
}

const initialState: IStateGlobal = {
  vegetables: [],
  monthVegetables: [],
  recipes: [],
  favorites: [],
  isLoading: true,
  user: {
    id: 0,
    pseudo: '',
    email: '',
    newsletter: false,
    memberDate: '',
    isConnected: false,
  },
  token: '',
  chosenNbMonth: month,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchVegetables.fulfilled, (state, action) => {
    state.vegetables = action.payload;
  });
  builder.addCase(fetchVegetable.fulfilled, (state, action) => {
    // The data is not stored in the state
  });
  builder.addCase(fetchRecipes.fulfilled, (state, action) => {
    state.recipes = action.payload;
  });
  builder.addCase(fetchFavorites.fulfilled, (state, action) => {
    state.favorites = action.payload;
  });
  builder.addCase(addRecipeToFavorites.fulfilled, (state, action) => {
    state.favorites.push(action.payload);
  });
  builder.addCase(deleteRecipeFromFavorites.fulfilled, (state, action) => {
    const favoriteRecipesList = state.favorites;
    const objectId = action.payload.id;
    function removeObjectWithId(array, id) {
      return array.filter((item) => item.id !== objectId);
    }
    const newArray = removeObjectWithId(favoriteRecipesList, objectId);

    state.favorites = newArray;
  });
  builder.addCase(loginCheck.fulfilled, (state, action) => {
    state.user.id = action.payload?.payload.user_id;
    state.user.pseudo = action.payload.username;
    state.user.isConnected = true;
    state.token = action.payload?.payload.token;
  });
  builder.addCase(getMemberInfos.fulfilled, (state, action) => {
    state.user.id = action.payload.user_id;
    state.isConnected = true;
    state.token = action.payload.token;
    state.user.pseudo = action.payload.pseudo;
    state.favorites = action.payload.recipes;
    state.user.memberDate = action.payload.created_at;
    state.user.email = action.payload.user.email;
    state.user.newsletter = action.payload.user.newsletter;
  });
  builder.addCase(changeSelectedMonth, (state, action) => {
    state.chosenNbMonth = action.payload;
  });
  builder.addCase(logMeOut, (state, action) => {
    state.user.isConnected = false;
    state.user.id = 0;
    state.token = '';
    state.favorites = [];
  });
});

export default reducer;
