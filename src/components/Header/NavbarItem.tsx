import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

interface INavBarItem {
  name: string,
  url: string,
}

const NavbarItem = ({ item, clickHandler }: { item: INavBarItem, clickHandler: string }) => {
  return (
    <li className="navbar__item">
      <Link
        to={item.url}
        className="navbar__link"
        onClick={clickHandler}
      >
        {item.name}
      </Link>
    </li>
  );
};

NavbarItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  clickHandler: PropTypes.func,
}

export default NavbarItem;
