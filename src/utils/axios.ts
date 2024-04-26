// creer une instance d'axios avec des paramètres prédéfinis
import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:8000/api/',
});


export default instanceAxios;
