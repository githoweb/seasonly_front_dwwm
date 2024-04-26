import { useRef, useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import instanceAxios from '../../utils/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const dispatch = useAppDispatch();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Vous n'avez pas respectez les critères");
      return;
    } else

      try {
        const response = await instanceAxios.post(
          `member/add`,
          {
            email: email,
            pseudo: user,
            password: pwd,
            role: "[ROLE_USER]",
            newsletter: false,
          }
        );

        setSuccess(true);
      } catch (err) {
        if (!err?.response) {
          setErrMsg('No Server Response');
        } else if (err.response?.status === 409) {
          setErrMsg('Username Taken');
        } else {
          setErrMsg('Registration Failed');
        }
        errRef.current.focus();
      }
  };

  return (
    <div className="account">
      {success ? (
        <>
          <h1>Success</h1>
          <p>Votre compte a bien été créé</p>
          <p>
            Vous pouvez maintenant vous connecter pour bénéficier des fonctionnalités supplémentaire du site
          </p>
          <Link to="/connexion">Se connecter</Link>
        </>
      ) : (
        <>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Créer un compte</h1>
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? 'false' : 'true'}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder="Pseudo"
              />
            </div>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? 'instructions' : 'offscreen'
              }
            >
              4 to 24 caractères.<br />
              Doit commencer par une lettre.<br />
              Les lettres, chiffres, underscores, tirets sont autorisés.
            </p>

            <div className="formInput">
              <input
                type="email"
                id="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                placeholder="Email"
              />
            </div>

            <div className="formInput">
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                placeholder="Mot de passe"
              />
            </div>
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            >
              8 à 24 caractères.<br />
              Doit contenir au moins une majuscule, une minuscule un chiffre et un caractère spécial.<br />{' '}
              <span aria-label="point d'exclamation">!</span>{' '}
              <span aria-label="arobase">@</span>{' '}
              <span aria-label="dièse">#</span>{' '}
              <span aria-label="dollar">$</span>{' '}
              <span aria-label="pourcent">%</span>
            </p>

            <div className="formInput">
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                placeholder="Confirmer le mot de passe"
              />
            </div>
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? 'instructions' : 'offscreen'
              }
            >
              Doit correspondre au premier champ de mot de passe
            </p>

            <div className="actions">
              <button
                disabled={!!(!validName || !validPwd || !validMatch)}
              >
                Valider
              </button>
            </div>

          </form>
        </>
      )}
    </div>
  );
};

export default Register;