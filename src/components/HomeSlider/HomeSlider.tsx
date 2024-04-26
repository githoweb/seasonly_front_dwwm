import { useEffect } from 'react';
import IVegetable from '../../@types/vegetable';
import CardList from '../CardList/CardList';

import Slider from 'react-slick';

import '../../libs/slick.scss';
import '../../libs/slick-theme.scss';

interface ContentProps {
  homeVegetables?: IVegetable[];
  chosenMonth: string;
  type: string;
}

const HomeContent = ({ homeVegetables, chosenMonth, type }: ContentProps) => {
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

  return (
    <div className="spotlight">
      <h2>{type} de {chosenMonth}</h2>
      <Slider {...settings}>
        {homeVegetables?.map((item, index) => (
          <div key={item.id}>
            <CardList key={item.id} data={item} type="vegetable" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeContent;
