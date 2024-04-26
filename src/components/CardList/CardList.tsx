import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './CardList.scss';
import ToggleFavorite from '../ToggleFavorite/ToggleFavorite';
import PropTypes from 'prop-types';

interface ICardProps {
  id: number;
  title: string;
  image: string;
  // isConnected: boolean;
}

function CardList({ data, type }: { data: ICardProps, type: string}) {

  const { auth } = useAuth();

  let typeBase = '';
  if (type === 'recipe') {
    typeBase = '/recettes/';
  } else {
    typeBase = '/fruits-legumes/';
  }

  return (
    <Link to={`${typeBase}${data.id}`} className="card-b">
      <figure>
        <img src={data.image} alt={data.title} />
      </figure>

      <div className="card-meta">
        <div className="card_meta_title">{data.title}</div>
      </div>

      {
        type === "recipe" && auth?.user !== undefined && (
          <ToggleFavorite recipe={data} />
        )
      }
    </Link >
  );
}

CardList.propTypes = {
  data: PropTypes.shape({}),
  type: PropTypes.string,
}

export default CardList;
