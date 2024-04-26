import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logMeOut } from '../../store/actions';

interface IClickHandler {
    clickHandler: React.MouseEventHandler<HTMLElement>;
};

const User = ({ clickHandler }: IClickHandler) => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.reducer.user);
  const isConnected = user.isConnected;
  const userName = user.pseudo;
  const userId = user.id;

  const logout = async () => {
    dispatch(logMeOut(false));
    setAuth({});
    // TODO add a dispatch to set state isConnected and token to '';
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="user">
      {!isConnected && (
        <Link to="/connexion" className="btnStyle" onClick={clickHandler}>
          Se connecter
        </Link>
      )}

      {isConnected && (
        <>
          <span className="username">{userName}</span>
          <div className="userlinks">
            <ul>
              <li>
                <Link
                  to={`/profil/${userId}`}
                  className="userlinks__item"
                  onClick={clickHandler}
                >
                  Mon Compte
                </Link>
              </li>
            </ul>
            <span className="logout" onClick={logout}>
              Se déconnecter
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
