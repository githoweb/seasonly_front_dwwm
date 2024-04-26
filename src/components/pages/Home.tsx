import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import fetchVegetables from '../../store/thunks/vegetables_thunk';
import { changeSelectedMonth } from '../../store/actions';
import HomeSlider from '../HomeSlider/HomeSlider';
import IMonth from '../../@types/month';
import IVegetable from '../../@types/vegetable';

const Home = () => {
  const dispatch = useAppDispatch();

  const vegetablesList = useAppSelector((state) => state.reducer.vegetables);

  const nbChosenMonth = useAppSelector((state) => state.reducer.chosenNbMonth);

  const monthsRef = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  const chosenMonth = monthsRef[nbChosenMonth];

  const filtreFruits = (item: IVegetable) => {
    let a;
    let b;
    if (item.genre.name === 'Fruit') {
      a = true;

      item.months.forEach((month: IMonth) => {
        if (month.name === chosenMonth) {
          b = true;
        }
      });
    }
    if (a === true && b === true) {
      return true;
    }
  };

  const filtreLegumes = (item: IVegetable) => {
    let a;
    let b;
    if (item.genre.name === 'Légume') {
      a = true;

      item.months.forEach((month) => {
        if (month.name === chosenMonth) {
          b = true;
        }
      });
    }
    if (a === true && b === true) {
      return true;
    }
  };

  const homeFruits = vegetablesList.filter(filtreFruits);
  const homeGreenVegetables = vegetablesList.filter(filtreLegumes);

  function handleSelectMonth(event: React.ChangeEvent<HTMLSelectElement>) {
    const monthNb: number = Number(event.target.value);
    dispatch(changeSelectedMonth(monthNb));
  }

  const monthBgNb = nbChosenMonth+1;

  useEffect(() => {
    dispatch(fetchVegetables());
  }, [dispatch]);

  return (
    <>
      <h1>Fruits et Légumes de saison</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed nobis
        nesciunt voluptatibus! Pariatur, eaque. Dolorem cumque iure id
        reprehenderit incidunt eius placeat eos voluptatum adipisci! Aspernatur
        veritatis magni illo nulla eum aliquid, voluptate qui odit. Atque
        libimos delectus iure optio quo! Corporis impedit ipsa obcaecati dicta
        dignissimos nostrum. Repellat, rerum! Laborum am.
      </p>

      <form className="chooseMonth" style={{ backgroundImage: `url(../src/assets/media/months/${monthBgNb}.webp)`}}>
        <label htmlFor="selectMonth">Choisissez un mois : </label>
        <select id="selectMonth" value={nbChosenMonth} onChange={handleSelectMonth}>
          {monthsRef.map((item, index) => (
            <option key={index} value={index} id="selectMonth">{item}</option>
          ))}
        </select>
      </form >

      <section>
        <HomeSlider homeVegetables={homeFruits} chosenMonth={chosenMonth} type="Fruits" />
        <HomeSlider homeVegetables={homeGreenVegetables} chosenMonth={chosenMonth} type="Légumes" />
      </section>

    </>
  );
};

export default Home;
