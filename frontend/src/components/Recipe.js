import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, Table, Button, CardGroup, Card, Container, Row, Col } from 'react-bootstrap';
import './styles/Recipe.css';
import home_img6 from '../images/home_img6.png';

export const Recipe = () => {
  return <div>
    {/* <Container>
      <p className='name'>Recipe Name</p>
    </Container> */}
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
        

  </div>;
};

export default Recipe;