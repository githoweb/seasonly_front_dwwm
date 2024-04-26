import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import fetchVegetables from '../../store/thunks/vegetables_thunk';
import CardList from '../CardList/CardList';

const FruitsLegumes = () => {
  const dispatch = useAppDispatch();

  const vegetablesList = useAppSelector((state) => state.reducer.vegetables);

  useEffect(() => {
    dispatch(fetchVegetables());
  }, []);

  return (
    <>
      <h1>Tous les fruits et légumes</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse ad nisi voluptate et perferendis? Tenetur, assumenda quas cupiditate doloremque, provident illum officia dolores repellat suscipit adipisci, ex quae nemo. Sicing elit officia esse ad nisi voluptate et perferendis? Tenetur, assumenda quas cupidi
      </p>
      <div className="cards-list">
        {vegetablesList.map((item, index) => (
          <CardList key={item.id} data={item} type="vegetable" />
        ))}
      </div>
    </>
  );
};

export default FruitsLegumes;
