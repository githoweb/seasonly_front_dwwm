import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import getMemberInfos from "../../store/thunks/getMemberInfos_thunk";

const Profil = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.reducer.user);
  const favorites = useAppSelector((state) => state.reducer.favorites);

  useEffect(() => {
    dispatch(getMemberInfos(user.id));
  }, []);

  return (
    <>
    <h1>Page de profil de {user.pseudo}</h1>

    <p>Vous êtes membre depuis {user.memberDate}.</p>
    <p>Votre email est : {user.email}</p>

    {user.newsletter
      ? <p>Vous êtes inscrit à la newsletter</p>
      : <p>Vous n'êtes pas inscrit à la newsletter : Inscrivez-vous vite ! </p>
    }

    <p>Vos recettes favorites sont : </p>    
    <ul>
      {favorites.map((item) => (
      <li key={item.id}>
        {item.title}
      </li>
      ))}
    </ul>
    </>
    );
};

export default Profil;
