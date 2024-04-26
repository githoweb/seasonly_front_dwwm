import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useAuth from '../../hooks/useAuth';
import loginCheck from '../../store/thunks/loginCheck_thunk';
import getMemberInfos from '../../store/thunks/getMemberInfos_thunk';

const Login = () => {
  const dispatch = useAppDispatch();
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e: React.FormEventHandler<HTMLButtonElement>) => {
    e.preventDefault();
    const promiseResult = await dispatch(loginCheck(
      { username: user, password: pwd },
    )).unwrap();
    setAuth({ user, pwd, token: promiseResult?.payload.token });
    setUser(user);
    setPwd(pwd);
    localStorage.setItem('token', promiseResult?.payload.token);

    navigate(from, { replace: true });
  };

  return (
    <div className="account">
      <p
        ref={errRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>

        <div className="formInput">
          <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Nom d'utilisateur"
          />
        </div>

        <div className="formInput">
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            placeholder="Mot de passe"
            required
          />
        </div>

        <div className="actions">
          <button>Valider</button>
        </div>

      </form>

      <div className="needAccount">
        <Link to="/inscription">Créer un compte</Link>
      </div>

    </div>
  );
};

export default Login;
