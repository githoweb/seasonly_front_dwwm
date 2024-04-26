import PropTypes from "prop-types";

const SocialItem = ({ item }) => (
  <li>
    <img src={item.icon} alt="" />
  </li>
);

export default SocialItem;
