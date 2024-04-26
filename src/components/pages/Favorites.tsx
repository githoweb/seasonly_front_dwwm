import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import CardList from '../CardList/CardList';
import fetchFavorites from '../../store/thunks/fetchFavorites_thunk';

const Favorites = () => {

  const dispatch = useAppDispatch();

  const favoritesList = useAppSelector((state) => state.reducer.favorites);
  const isConnected = useAppSelector((state) => state.reducer.user.isConnected);

  useEffect(() => {
      dispatch(fetchFavorites());
  }, []);

  return (
    <>
      <h1>Mes recettes préférées</h1>
      <div className="cards-list">
        {favoritesList?.map((favorite) => (
          <CardList key={favorite.id} data={favorite} type="recipe" isConnected={isConnected} />
        ))}
      </div>
    </>
  );
};

export default Favorites;
