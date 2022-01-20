import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles/Recipes.css';
import { FaSearch } from 'react-icons/fa';
import Recipebyproduct from './Recipebyproduct';
import { Link } from 'react-router-dom';

function Recipes() {
  const { userId } = useSelector((state) => state.auth);
  const [search, setSearch] = useState('Broccoli');
  const [searchFinal, setSearchFinal] = useState('Broccoli');
  const [recipes, setRecipes] = useState([]);
  const [byproducts, setByproducts] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [adding,setAdding]=useState(['Broccoli']);
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

  const getRecipes = async () => {
    const appID = 'a670aefe';
    const app_key = '2062231e1e23e9cfc408fa3516285253d8';
    const apiURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchFinal}&app_id=${appID}&app_key=%${app_key}`;
    // const apiURL = `https://api.edamam.com/api/recipes/v2/4442d46778d89c3b9adf19580b3fd317?type=public&app_id=a670aefe&app_key=2062231e1e23e9cfc408fa3516285253d8

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
      console.log({error});
      alert( error.message);
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    setSearchFinal(search);
  };

  useEffect(() => {
    getRecipes();
    getIngredients();
    getByproducts();
    
  }, [searchFinal]);
  return (
    <div className="recipePage container">
      
      <div className="row">
        <div className="col-5 ingre-by">
        <div className="input-group">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            value={search}
            onChange={handleOnChange}
          />
          
        </div>
        <div className="search-btn">
          <button
            type="button"
            className="btn btn-primary search"
            onClick={handleOnClick}
          >
            <FaSearch />
          </button>
        </div>
      </div>
          <p className='ingr' >Ingredients</p>
          <div className="invItems">
            <div className="btns">
              {ingredients.map((ingredient) => (
                  <input
                    key={ingredient._id}
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
        <div className="col-5 listItems recip-list">
          <p className='recp' >Recipes</p>
          {recipes.map(({ recipe }) => (
            <div className="item">
              <p className="recipeName" dangerouslySetInnerHTML={{__html: recipe.label}}></p>
              <div className="recipeCard">
                {recipe.images.THUMBNAIL ? (
                  <img
                    className="recipeImage"
                    src={recipe.images.THUMBNAIL.url}
                    alt=""
                  />
                ) : (
                  <img
                    className="recipeImage"
                    src={recipe.image}
                    height={100}
                    width={100}
                    alt=""
                  />
                )}
                {/* <ul className='recipeText'>
                  {recipe.ingredients.map((i) => (
                    <li>{i.text}</li>
                  ))}
                </ul> */}
                <ul className='recipeText'>
                {recipe.dietLabels && recipe.dietLabels.length>0 ? (
                    <li>Diet Labels: {recipe.dietLabels.join(", ")}</li>
                ):<div></div>}
                {recipe.cuisineType ? (
                  <li>Cuisine: {recipe.cuisineType}</li>
                ):<div></div>}
                {recipe.dishType ? (
                  <li>Dish Type: {recipe.dishType}</li>
                ):<div></div>}
                {recipe.mealType ? (
                  <li>Meal Type: {recipe.mealType}</li>
                ):<div></div>}
                {<li>Calories: {recipe.calories.toPrecision(4)}</li>}
                </ul>
                <Link to={`/recipe/${recipe.uri.split("_")[1]}`} className="recipeButton" >
                  &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
