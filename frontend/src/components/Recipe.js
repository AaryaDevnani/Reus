import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Alert, Table, Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './styles/Recipe.css';
import home_img6 from '../images/home_img6.png';

function Recipe() {
  const recipeId = useParams()
  const [ings,setIngs] = useState([])
  const getRecipe = async () => {
    const appID = process.env.REACT_APP_API_APP_ID;
    const app_key = process.env.REACT_APP_API_APP_KEY;
    const apiURL = `https://api.edamam.com/api/recipes/v2/${recipeId.id}?type=public&app_id=${appID}&app_key=%${app_key}`;

    try {
      const response = await fetch(apiURL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      });
      const data = await response.json();
      setIngs(data.recipe)
      console.log(data.recipe)
    } catch (error) {
      console.log({error});
      alert(error.message);
    }
  };
  useEffect(() => {
    getRecipe()
    
  }, []);

  
  return (
       
        <div className='oneRecipe'>
              <h2 className='recipeRecipe'>Recipe</h2>
              <hr className='recipeHr' />
              <div className='recipeNameImg'>
                  <img className='reciImg'  src={ings.image} alt="" />
                   <p  className='reciName'>{ings.label}</p>
              </div>
              <hr className='recipeHr' />
              <h2 className='recipeIngred'>Ingredients</h2>
              <div className='recIngreUl'>
                <ul >
                   {ings.ingredients && ings.ingredients.map((i)=>(
                      <li> -> {i.text}</li>
                  ))
                  } 
                </ul>
              </div>
              <hr className='recipeHr' />
              <div className='j'>
                <a href={ings.url} target = "_blank"className='steps'><u>View Steps Here </u></a>
              </div>
        </div>


  )};

export default Recipe;