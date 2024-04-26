import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Searchbar.scss';

function Searchbar() {
  const [recipeData, setRecipeData] = useState([]);
  const [vegetableData, setVegetableData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Récupération des données des recettes et des légumes
      const [recipeResponse, vegetableResponse] = await Promise.all([
        axios.get('http://127.0.0.1:8000/api/recipe'),
        axios.get('http://127.0.0.1:8000/api/vegetable'),
      ]);

      setRecipeData(recipeResponse.data.Recettes);
      setVegetableData(vegetableResponse.data.vegetables);
    };

    fetchData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue('');
  };

  const filteredRecettes = value
    ? recipeData.filter(({ title }) =>
      title.toLowerCase().includes(value.toLowerCase())
    ) // Filtrage des recettes en fonction de la valeur de recherche
    : [];

  const filteredLegumes = value
    ? vegetableData.filter(
      ({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
    )
    : [];

  return (
    <div className="searchBar">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          placeholder="Rechercher une recette, un légume, un fruit..."
          value={value}
          onChange={handleChange}
        />
        <i className="fas fa-search" />
      </label>
      {(filteredRecettes.length > 0 || filteredLegumes.length > 0) && (
        <ul>
          {filteredRecettes.map(({ id, title, image }) => (
            <li key={id}>
              <Link to={`/recettes/${id}`} onClick={handleClear}>
                {title}
              </Link>
            </li>
          ))}
          {filteredLegumes.map(({ id, title, image }) => (
            <li key={id}>
              <Link to={`/fruits-legumes/${id}`} onClick={handleClear}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Searchbar;
