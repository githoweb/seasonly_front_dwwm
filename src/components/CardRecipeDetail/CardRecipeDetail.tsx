import "./CardRecipeDetail.scss";
import ToggleFavorite from "../ToggleFavorite/ToggleFavorite";
import useAuth from "../../hooks/useAuth";
import CardInfosItem from "../CardInfosItem/CardInfosItem";
import SocialItem from "../SocialItem/SocialItem";
import fbLogo from "../../assets/media/FB32.png";
import twtLogo from "../../assets/media/X32.png";
import PropTypes from 'prop-types';

const CardRecipeDetail = ({ data, type, isConnected }) => {
  const { token } = useAuth();

  let isConnectedValue = false;
  if (token != null) {
    isConnectedValue = true;
  }
  let duration = data.duration;
  if (duration > 59) {
    duration = (duration % 60) + "h" + " " + (duration % 60) + "mn";
  }
  duration = duration + "mn";

  let serving = data.serving;
  if (serving > 1) {
    serving = serving + " personnes";
  } else {
    serving = serving + " personne";
  }

  const cardInfos = [
    {
      label: "Durée de préparation",
      info: duration,
      icon: "far fa-clock",
    },
    {
      label: "Nombre de personnes",
      info: serving,
      icon: "fas fa-user-friends",
    },
  ];

  const socials = [
    {
      url: "https://www.facebook.fr",
      icon: fbLogo,
    },
    {
      url: "https://www.twitter.com",
      icon: twtLogo,
    },
  ];

  return (
    <div className="card-recipeDetail">
      <figure>
        <img src={data.image} alt={data.title} />
      </figure>
      <ul className="socials">
        {socials.map((item, index) => (
          <SocialItem key={index} item={item} />
        ))}
      </ul>

      <ul className="infos">
        {cardInfos.map((item, index) => (
          <CardInfosItem key={index} item={item} />
        ))}
      </ul>

      {type == "recipe" && isConnectedValue == true && (
        <ToggleFavorite
          data={recipe}
          type="recipe"
          recipeId={data.id}
          isConnected={isConnected}
        />
      )}
    </div>    
  );
};

CardRecipeDetail.propTypes = {
  data: PropTypes.shape({}),
  type: PropTypes.string,
  isConnected: PropTypes.bool,
}

export default CardRecipeDetail;
