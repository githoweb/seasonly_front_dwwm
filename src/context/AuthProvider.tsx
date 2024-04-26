import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  // Gestion Token pour les requêtes authentifiées.
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token', token);
      setToken(token);
      setIsConnected(true);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token');
      setToken('');
      setIsConnected(false);
    };
    console.log('=== This is AuthProvider ===');
    console.log('auth', auth);
  }, [token]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
