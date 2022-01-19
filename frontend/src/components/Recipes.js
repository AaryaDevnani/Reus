import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/Recipes.css';
import { FaSearch } from 'react-icons/fa';
import Recipebyproduct from './Recipebyproduct';

function Recipes() {
  const { userId } = useSelector((state) => state.auth);
  const [search, setSearch] = useState('Brocolli');
  const [searchFinal, setSearchFinal] = useState('Brocolli');
  const [recipes, setRecipes] = useState([]);
  const [byproducts, setByproducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [items, setItems] = useState([]);
  const [adding,setAdding]=useState(['Brocolli']);
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
      // setSearch(data.items[0].name);
      // setSearchFinal(data.items[0].name);
    }
  };
  const getByproducts = async()=>{
    const response = await fetch(`api/byproduct`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }})
      const data = await response.json();
      if (!data.error === '') return data.error;
      else {
      setByproducts(data.items);
    }
    }

  const getAdding = (name)=>{
    if(adding.includes(name)){
      setAdding(adding.filter(a => a !== name))
      setSearchFinal(adding.join(" "))
    }else{
      setAdding([...adding,name])
      setSearchFinal(searchFinal + " " + name)
    }
  }

  const getRecipes = async (items) => {
    const appID = 'a670aefe';
    const app_key = '2062231e1e23e9cfc408fa3516285253d8';
    const apiURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchFinal}&app_id=${appID}&app_key=%${app_key}`;
    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      alert({ error });
    }
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
    getByproducts();
    
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
          <p className='ingr' >Ingredients</p>
          <div className="invItems">
            <div className="btns">
              {ingredients.map((ingredient) => (
                  <input
                    type="button"
                    className={adding.includes(ingredient.name) ? "butn pill pill-active" : "butn pill pill-inactive"}
                    value={ingredient.name}
                    onClick={()=>{getAdding(ingredient.name)}}
                  />
              ))}
            </div>
          </div>  
          <p className='byproduct' >Byproducts</p> 
          <div className='invItems'>
          <Recipebyproduct ingredients={ingredients} byproducts={byproducts} />
          </div>
        </div>
        <div className=" col-6 listItems">
          <p className='recp' >Recipes</p>
          {recipes.map(({ recipe }) => (
            <div className="item">
              <p dangerouslySetInnerHTML={{__html: recipe.label}}></p>
              <div className="recipeCard">
                {recipe.images.THUMBNAIL ? (
                  <img
                    className="recipeImage"
                    src={recipe.images.THUMBNAIL.url}
                  />
                ) : (
                  <img
                    className="recipeImage"
                    src={recipe.image}
                    height={100}
                    width={100}
                  />
                )}
                <ul className='recipeText'>
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
