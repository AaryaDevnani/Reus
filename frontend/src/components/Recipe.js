import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';

function Recipe() {
  const recipeId = useParams()
  const [ings,setIngs] = useState([])
  const getRecipes = async () => {
    const appID = 'a670aefe';
    const app_key = '2062231e1e23e9cfc408fa3516285253d8';
    const apiURL = `https://api.edamam.com/api/recipes/v2/${recipeId.id}?type=public&app_id=${appID}&app_key=%${app_key}`;

    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      console.log(data.recipe)
      setIngs(data.recipe)
    } catch (error) {
      alert({ error });
    }
  };
  useEffect(() => {
    getRecipes()
    
  }, []);
  return (
  <div>
  <div className='text-dark'>
  {
      <div>{ings.label}</div>
    }
  </div>
  </div>
  
  )}

export default Recipe;
