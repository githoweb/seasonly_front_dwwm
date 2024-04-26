import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import addRecipeToFavorites from '../../store/thunks/addRecipeToFavorites_thunk';
import deleteRecipeFromFavorites from '../../store/thunks/deleteRecipeFromFavorites_thunk';
import './ToggleFavorite.scss';
import fetchFavorites from '../../store/thunks/fetchFavorites_thunk';

const ToggleFavorite = ({ recipe }) => {
  const dispatch = useAppDispatch();
  const isConnected = useAppSelector((state) => state.reducer.user.isConnected);
  const favoritesList = useAppSelector((state) => state.reducer.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  function idCorrespond(item) {
    return item.id === recipe.id;
  }

  let isFavorite: boolean;

  const found = favoritesList.find(idCorrespond);
  if (found !== undefined) {
    isFavorite = true;
  } else {
    isFavorite = false;
  }  

  const handleAddFavorite = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();

    if (isFavorite) {
      dispatch(deleteRecipeFromFavorites(recipe));
    } else {
      dispatch(addRecipeToFavorites(recipe));             
    }
  };

  return (
    <button type="button" className={isFavorite ? 'favorite active' : 'favorite'} onClick={handleAddFavorite}>
      <i className="fas fa-heart" aria-hidden="true" />
    </button>
  );
}

export default ToggleFavorite;
