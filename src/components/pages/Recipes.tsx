import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import fetchRecipes from '../../store/thunks/recipes_thunk';
import CardList from '../CardList/CardList';

const Recipes = () => {
  const dispatch = useAppDispatch();

  const recipesList = useAppSelector((state) => state.reducer.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  return (
    <>
      <h1>Toutes les recettes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse ad nisi voluptate et perferendis? Tenetur, assumenda quas cupiditate doloremque, provident illum officia dolores repellat suscipit adipisci, ex quae nemo. Sicing elit officia esse ad nisi voluptate et perferendis? Tenetur, assumenda quas cupidi
      </p>
      <div className="cards-list">
        {recipesList.map((item, index) => (
          <CardList
            key={item.id}
            data={item}
            type="recipe"
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
