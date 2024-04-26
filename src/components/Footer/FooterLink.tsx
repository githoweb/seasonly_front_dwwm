import { Link } from "react-router-dom";

interface IFooterLinkItem {
  name: string,
  url: string
}

const FooterLink = ({ url, name }: IFooterLinkItem) => {
  return (
    <li className="footerLinks__item">
      <Link to={url} title="TODO">{name}</Link>
    </li>
  );
};

export default FooterLink;
