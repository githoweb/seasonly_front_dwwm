import { useEffect, useState } from 'react';
import {
  Link, useParams,
} from 'react-router-dom';
import instanceAxios from '../../utils/axios';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import CardList from '../CardList/CardList';
import IVegetable from '../../@types/vegetable';
import IMonth from '../../@types/month';

import Slider from 'react-slick';

import '../../libs/slick.scss';
import '../../libs/slick-theme.scss';
import { array, arrayOf } from 'prop-types';

function FruitLegumePage() {
  const dispatch = useAppDispatch();

  // TODO : en attente des recettes liées à un fruit ou légume
  const relatedRecipesList = useAppSelector((state) => state.reducer.recipes);

  const [vegetable, setVegetable] = useState([]);
  const [vegetableRecipe, setVegetableRecipe] = useState([]);

  const [vegetableMonths, setVegetableMonths] = useState([]);

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

  function capitalize(string: string) {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string;
  }

  function getMonthNumber(monthName: string) {
    if (monthsRef.indexOf(monthName) != -1) {
      return monthsRef.indexOf(monthName);
    }
  }

  function getMonthsNames(rawMonths: string[]) {
    const dataMonths: string[] = [];
    rawMonths.map((item) => {
      const monthName = capitalize(item.name);
      dataMonths.push(monthName);
    });
    return dataMonths;
  }

  let vegetableId = useParams();
  vegetableId = vegetableId.slug;

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    // mobileFirst: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  async function fetchVegetable() {
      const response = await instanceAxios.get(
        `vegetable/${vegetableId}`,
      );
      const vegetableData = await response.data;
      setVegetable(vegetableData.vegetable);

      const transformedMonths: string[] = getMonthsNames(vegetableData.vegetable.months);
      setVegetableMonths(transformedMonths);      
  }

  useEffect(() => {
    fetchVegetable();
  }, []);

  return (
    <>
      <section className="detail_item">
        <div className="visual">
          <figure>
            <img src={vegetable.image} alt={vegetable.name} />
          </figure>
        </div>

        <div className="content">
          <h1>{vegetable.title}</h1>
          <p>{vegetable.description}</p>

          <div className="benefits">
            <h2>Bénéfices</h2>
            <p>{vegetable.benefits}</p>
          </div>
        </div>

          <div className="calendar">
            <h2><span>Calendrier annuel</span></h2>
            <div className="calendar_content">
              <ul>
                {monthsRef.map((month, index) => (
                  <li
                    key={index}
                    className={vegetableMonths.includes(month) ? 'active' : ''}
                  >
                    <span>{month}</span>
                  </li>
                ))}
              </ul>
              <div className="months">
                <p>Consommable en :</p>
                {vegetableMonths.map((item, id) => {
                  let a = '/';
                  id === 0 ? a='' : a=' - ';
                  return (
                    <span key={id}>{a+item}</span>
                  );
                })}            
              </div>
            </div>
          </div>
      </section>

      <section className="spotlight">
        <h2>Recettes liées à cet ingrédient {/*{vegetable.genre.name.toLowerCase()}*/}</h2>
        <Slider {...settings}>
          {relatedRecipesList.map((item, index) => (
            <div key={item.id}>
              <CardList key={item.id} data={item} type="recipes" />
            </div>
          ))}
        </Slider>

        <div className="actions">
          <Link to="/recettes">
            <button type="submit">Voir toutes les recettes</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default FruitLegumePage;
