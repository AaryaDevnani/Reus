import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Alert, Table, Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './styles/Recipe.css';
import home_img6 from '../images/home_img6.png';

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
  return (<div>
    <Container>
                <Row>
                        <Col sm={6}>
                                <img className='recipeI' src={home_img6} alt="" />
                        </Col>
                        <Col sm={6}>
                                <p className='name'>Recipe Name</p>
                        </Col>   
                </Row>
        </Container>
        <Row>
        <div>
          <p className='ingredients'>Ingredients: </p>
        </div>
        <div>
          <p className='steps'>Steps: </p>
        </div>
        </Row>
        </div>
  )};

export default Recipe;