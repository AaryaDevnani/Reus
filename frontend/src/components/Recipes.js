import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/Recipes.css';
import { FaSearch } from 'react-icons/fa';

function Recipes() {
  const { userId } = useSelector((state) => state.auth);
  const [search, setSearch] = useState('Potato');
  const [searchFinal, setSearchFinal] = useState('Potato');
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [items, setItems] = useState([]);
  const getIngredients = async () => {
    const response = await fetch(`/api/items`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        UserId: userId
      }
    });
    const data = await response.json();
    if (!data.error === '') return data.error;
    else {
      setIngredients(data.items);
      setSearch(data.items[0].name);
      setSearchFinal(data.items[0].name);
    }
  };

  const getRecipes = async (items) => {
    const appID = 'a670aefe';
    const app_key = '2062231e1e23e9cfc408fa3516285253d8';
    const apiURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchFinal}&app_id=${appID}&app_key=%${app_key}`;
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    setSearchFinal(search);
  };

  useEffect(() => {
    getRecipes(items);
    getIngredients();
  }, [searchFinal, items]);
  return (
    <div className="recipePage container">
      <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            value={search}
            onChange={handleOnChange}
          />
          <label className="form-label" for="form1">
            Search
          </label>
        </div>
        <div className="search-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleOnClick}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="invItems">
            Ingredients
            <div className="btns">
                {ingredients.map(ingredient=>(
                    <input type="button" className="butn pill" value={ingredient.name} /> 
                ))}
            </div>
          </div>
        </div>
        <div className=" col-6 listItems">
          {recipes.map(({ recipe }) => (
            <div className="item">
              <p>{recipe.label}</p>
              <div className="recipeCard">
                <img
                  className="recipeImage"
                  src={recipe.images.THUMBNAIL.url}
                />
                <ul>
                  {recipe.ingredients.map((i) => (
                    <li>{i.text}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
