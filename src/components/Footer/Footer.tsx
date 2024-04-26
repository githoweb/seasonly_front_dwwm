import { Link } from "react-router-dom";
import "./Footer.scss";
import FooterLink from "./FooterLink";

const Footer = () => {

  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/"
    }
  ];

  const internalLinks = [
    {
      name: "Qui sommes nous",
      url: "/sommes-nous",
    },
    {
      name: "Mentions Legales",
      url: "/mentions-legales"
    },
    {
      name: "Contact",
      url: "/contact"
    }
  ];
  
  return (
  <footer id="footer">
    <div className="newsletter">
      <div className="newsletter__title">
        <h3>Newsletter</h3>
        <p>Notre actualité dans votre boîte mail</p>
      </div>
      <form>
        <input type="email" />
        <button type="submit">
          Envoyer
        </button>
      </form>
    </div>
    
    <div className="footerLinks">
      <ul className="footerLinks__social">
        {socials.map((item, index) => (
          <FooterLink key={index} item={item} />
        ))}
      </ul>
      <ul className="footerLinks__infos">
        {internalLinks.map((item, index) => (
          <FooterLink key={index} item={item} />
        ))}
      </ul>
    </div>

    <div className="legal">
      <p>
        J'accepte que mes données soient stockées et traitées conformément à la politique de confidentialité.
      </p>
      Copyright 2023 SEASOnly
    </div>

  </footer>
  )
};

export default Footer;
