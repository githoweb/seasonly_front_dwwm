import { Link } from "react-router-dom";

const Contact = () => (
  <>
    <h1>Nous contacter</h1>

    <form className="contactForm">
      <fieldset>
        <div className="formInput">
          <label htmlFor="nom">Nom :</label>
          <input type="text" id="nom" name="nom" required />
        </div>
        <div className="formInput">
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" name="email" required />
        </div>
      </fieldset>

      <div className="formInput">
        <label htmlFor="message">Message :</label>
        <textarea id="message" name="message" required />
      </div>

      <fieldset>
        <div className="formInput">
          <input
            type="checkbox"
            id="souscrire"
            name="souscrire"
            value="souscrire"
          />
          <label htmlFor="souscrire">
            J'autorise ce site à conserver mes données personnelles transmises
            via ce formulaire.
          </label>
        </div>

        <p>
          Aucune exploitation commerciale ne sera faite des données conservées.
        </p>

        <p>
          Voir Notre
          <Link to="/mentions-legales">
            Politique de gestion des données personnelles
          </Link>
        </p>
      </fieldset>

      <button type="submit">
        Envoyer
      </button>

    </form>

    <figure className="map">
      <img src="_inte/media/MAP.jpg" alt="Paris" />
    </figure>
  </>
);

export default Contact;
