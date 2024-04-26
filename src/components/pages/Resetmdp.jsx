import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Resetmdp = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic for resetting the password using axios or other methods.
    // Example: axios.post('/api/reset-password', { email })
    //   .then(response => setMessage(response.data.message))
    //   .catch(error => setMessage('Error resetting password'));

    setMessage(`An email for password reset has been sent to ${email}`);
  };

  return (
    <div id="password-reset-container">
      <h2>Mot de passe oublié</h2>

      <p>
        Veuiller saisir ci-dessous les informations nécessaires
        à la réintialisation de votre mot de passe.
        </p>
        <p>
        Veuiller vous assurer de votre identifiant (login) et votre email saisis sont
        bien ceux utilisés, lors de la creation de votre compte avant de valider votre demande.
      </p>

      <form id="password-reset-form" onSubmit={handleSubmit}>
        <label htmlFor="login">Votre Login:</label>
        <input type="text" id="login" value={login} onChange={handleLoginChange} required />
        <label htmlFor="email">Votre Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <button type="submit">Réinitialiser le mot de passe</button>
      </form>
      <p id="reset-message">{message}</p>
    </div>
  );
};

export default Resetmdp;
